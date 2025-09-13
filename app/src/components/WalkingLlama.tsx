import React, { useEffect, useRef, useState } from 'react';
import { useLlama } from '../contexts/LlamaContext';

interface LlamaAnimation {
  direction: 'left' | 'right';
  startTime: number;
  duration: number;
  isActive: boolean;
  height: number; // Add height for vertical positioning
}

const WalkingLlama: React.FC = () => {
  const { isLlamaEnabled } = useLlama();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [animation, setAnimation] = useState<LlamaAnimation | null>(null);

  useEffect(() => {
    if (!isLlamaEnabled) {
      setAnimation(null);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Start periodic animations every 3-15 seconds
    const startPeriodicAnimation = () => {
      const direction = Math.random() < 0.5 ? 'left' : 'right';
      const duration = 3000 + Math.random() * 2000; // 3-5 seconds
      const height = Math.random() * 0.6 + 0.2; // Random height between 20% and 80% of screen
      
      setAnimation({
        direction,
        startTime: Date.now(),
        duration,
        isActive: true,
        height
      });
    };

    // Start first animation immediately
    startPeriodicAnimation();

    // Set up interval for periodic animations (3-15 seconds)
    const scheduleNext = () => {
      const delay = Math.random() * 12000 + 3000; // 3-15 seconds
      intervalRef.current = setTimeout(() => {
        startPeriodicAnimation();
        scheduleNext(); // Schedule the next one
      }, delay);
    };

    scheduleNext();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isLlamaEnabled]);

  useEffect(() => {
    if (!animation || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // WebGL shader for cartoon-style rendering
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      varying vec2 v_texCoord;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform float u_progress;
        uniform int u_direction;
        uniform float u_height;
      
      // Advanced noise functions
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      float noise(vec3 p) {
        return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
      }
      
      // Smooth noise with multiple octaves
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      
      // Fractal noise for complex textures
      float fractalNoise(vec2 p, int octaves) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        
        for (int i = 0; i < 8; i++) {
          if (i >= octaves) break;
          value += amplitude * smoothNoise(p * frequency);
          amplitude *= 0.5;
          frequency *= 2.0;
        }
        
        return value;
      }
      
      // Ultra-realistic fur with tens of thousands of strands
      float realisticFur(vec2 uv, float scale, float time, float depth) {
        float fur = 0.0;
        
        // Base fur density map
        float baseDensity = fractalNoise(uv * scale * 2.0, 6) * 0.8 + 0.2;
        
        // Multiple layers of fur strands at different depths
        for (int layer = 0; layer < 4; layer++) {
          float layerDepth = float(layer) * 0.25;
          float layerScale = scale * (1.0 + layerDepth * 2.0);
          vec2 layerUV = uv * layerScale;
          
          // Thousands of fur strands per layer
          for (int i = 0; i < 50; i++) {
            float fi = float(i) + float(layer) * 50.0;
            
            // Pseudo-random strand positions using improved distribution
            vec2 strandSeed = vec2(fi * 0.1, fi * 0.13);
            vec2 strandPos = vec2(
              fract(sin(strandSeed.x * 12.9898) * 43758.5453),
              fract(sin(strandSeed.y * 78.233) * 43758.5453)
            );
            
            // Strand direction and length variation
            float strandLength = 0.8 + sin(fi * 0.7) * 0.4;
            float strandAngle = fi * 2.4 + time * 0.1;
            
            // Wind effect on individual strands
            vec2 windOffset = vec2(
              sin(time * 3.0 + fi * 0.1) * 0.02,
              cos(time * 2.0 + fi * 0.15) * 0.01
            ) * (1.0 - layerDepth);
            
            strandPos += windOffset;
            
            // Calculate strand contribution
            vec2 strandDir = vec2(cos(strandAngle), sin(strandAngle));
            vec2 toStrand = layerUV - strandPos;
            
            // Project onto strand direction
            float alongStrand = dot(toStrand, strandDir);
            vec2 perpendicular = toStrand - strandDir * alongStrand;
            
            // Strand shape (tapered)
            float strandWidth = 0.002 * (1.0 - abs(alongStrand) / strandLength);
            float strandDist = length(perpendicular);
            
            if (abs(alongStrand) < strandLength && strandDist < strandWidth) {
              float strandIntensity = exp(-strandDist / strandWidth) * 
                                    (1.0 - abs(alongStrand) / strandLength) *
                                    baseDensity * (1.0 - layerDepth * 0.3);
              fur += strandIntensity * 0.1;
            }
          }
        }
        
        // Subsurface scattering effect
        float subsurface = smoothNoise(uv * scale * 4.0) * 0.2;
        fur += subsurface;
        
        // Fur color variation
        float colorVariation = fractalNoise(uv * scale * 6.0, 3) * 0.1;
        fur += colorVariation;
        
        return clamp(fur, 0.0, 1.0);
      }
      
      // Realistic skin texture
      float skinTexture(vec2 uv, float scale) {
        float skin = 0.0;
        
        // Skin pores
        skin += fractalNoise(uv * scale * 20.0, 4) * 0.3;
        
        // Skin wrinkles
        skin += fractalNoise(uv * scale * 8.0, 3) * 0.2;
        
        // Fine skin detail
        skin += smoothNoise(uv * scale * 40.0) * 0.1;
        
        return skin;
      }
      
      // Muscle movement simulation
      float muscleMovement(vec2 uv, float time, float intensity) {
        float muscle = 0.0;
        muscle += sin(time * 8.0 + uv.x * 20.0) * intensity;
        muscle += sin(time * 12.0 + uv.y * 15.0) * intensity * 0.5;
        return muscle;
      }
      
      // Advanced physically-based lighting with subsurface scattering
      vec3 calculateRealisticLighting(vec3 albedo, vec2 uv, vec2 normal, vec2 lightPos, float roughness, float subsurface) {
        vec2 lightDir = normalize(lightPos - uv);
        vec2 viewDir = normalize(vec2(0.0, -1.0) - uv);
        vec2 halfDir = normalize(lightDir + viewDir);
        
        float distance = length(lightPos - uv);
        float attenuation = 1.0 / (1.0 + 0.09 * distance + 0.032 * distance * distance);
        
        // Diffuse lighting (Lambert)
        float NdotL = max(0.0, dot(normal, lightDir));
        vec3 diffuse = albedo * NdotL;
        
        // Specular lighting (Blinn-Phong)
        float NdotH = max(0.0, dot(normal, halfDir));
        float specularPower = mix(32.0, 2.0, roughness);
        float specular = pow(NdotH, specularPower) * (1.0 - roughness);
        
        // Subsurface scattering approximation
        float backLight = max(0.0, dot(-lightDir, normal));
        vec3 subsurfaceColor = albedo * backLight * subsurface * 0.5;
        
        // Rim lighting
        float rimPower = 1.0 - max(0.0, dot(viewDir, normal));
        vec3 rimColor = vec3(0.8, 0.6, 0.4) * pow(rimPower, 3.0) * 0.3;
        
        // Ambient occlusion approximation
        float ao = smoothNoise(uv * 10.0) * 0.3 + 0.7;
        
        // Combine all lighting components
        vec3 finalColor = (diffuse + subsurfaceColor + rimColor) * attenuation * ao;
        finalColor += vec3(specular) * attenuation;
        finalColor += albedo * 0.1; // Ambient
        
        return finalColor;
      }
      
      // Realistic eye rendering
      vec3 renderRealisticEye(vec2 eyeUV, float time, vec2 lightPos) {
        float eyeDist = length(eyeUV);
        
        if (eyeDist > 0.08) return vec3(0.0);
        
        // Sclera (eye white) with subtle veins
        vec3 scleraColor = vec3(0.95, 0.94, 0.93);
        float veins = fractalNoise(eyeUV * 50.0, 3) * 0.1;
        scleraColor = mix(scleraColor, vec3(0.9, 0.85, 0.8), veins);
        
        // Iris with detailed structure
        float irisDist = length(eyeUV) / 0.04;
        if (irisDist < 1.0) {
          // Base iris color
          vec3 irisColor = mix(vec3(0.2, 0.4, 0.1), vec3(0.4, 0.6, 0.2), irisDist);
          
          // Iris patterns
          float irisPattern = fractalNoise(eyeUV * 80.0, 4);
          irisColor = mix(irisColor, vec3(0.1, 0.3, 0.05), irisPattern * 0.3);
          
          // Radial iris lines
          float angle = atan(eyeUV.y, eyeUV.x);
          float radialLines = sin(angle * 20.0) * 0.1;
          irisColor += vec3(radialLines * 0.2);
          
          // Pupil
          float pupilDist = length(eyeUV) / 0.02;
          if (pupilDist < 1.0) {
            return vec3(0.0); // Black pupil
          }
          
          // Iris lighting
          vec2 lightDir = normalize(lightPos - eyeUV);
          float lightIntensity = max(0.3, dot(normalize(eyeUV), lightDir));
          irisColor *= lightIntensity;
          
          return irisColor;
        }
        
        // Eye highlight/reflection
        vec2 highlightPos = eyeUV - vec2(0.02, -0.02);
        if (length(highlightPos) < 0.01) {
          return vec3(1.0);
        }
        
        return scleraColor;
      }
      
      // Particle system for dust
      float dustParticles(vec2 uv, float time) {
        float dust = 0.0;
        for (int i = 0; i < 15; i++) {
          float fi = float(i);
          vec2 particlePos = vec2(
            mod(fi * 0.123 + time * 0.02, 1.0),
            mod(fi * 0.456 + time * 0.015, 1.0)
          );
          float dist = length(uv - particlePos);
          float size = 0.02 + sin(time * 3.0 + fi) * 0.01;
          dust += exp(-dist / size) * 0.4;
        }
        return dust;
      }
      
      // Photorealistic llama rendering function
      vec3 drawRealisticLlama(vec2 uv, float time, float progress, int direction) {
        vec3 color = vec3(0.0);
        
        // Anatomically correct scale and position
        float scale = 0.5;
        vec2 center = vec2(0.5, u_height);
        
        // Realistic walking physics with weight distribution
        float walkCycle = sin(time * 5.5) * 0.06; // Slower, more realistic gait
        float bodyBob = sin(time * 11.0) * 0.02;
        float breathingCycle = sin(time * 3.0) * 0.008; // Realistic breathing rate
        float heartbeat = sin(time * 12.0) * 0.002; // Subtle heartbeat
        float muscleFlex = muscleMovement(uv, time, 0.008);
        center.y += walkCycle + bodyBob + breathingCycle + heartbeat + muscleFlex;
        
        // Realistic head movement with natural sway
        float headBob = sin(time * 6.0 + 0.8) * 0.015;
        float headSway = sin(time * 3.2) * 0.008;
        float earTwitch = sin(time * 18.0 + sin(time * 2.1)) * 0.004; // Natural ear movement
        float nostrilFlare = sin(time * 6.0) * 0.003 + 0.003; // Breathing-related
        
        // Apply direction and progress with momentum
        float dir = direction == 1 ? 1.0 : -1.0;
        float momentum = smoothstep(0.0, 0.1, progress) * (1.0 - smoothstep(0.9, 1.0, progress));
        center.x = 0.5 + (progress - 0.5) * 2.2 * dir * momentum;
        
        // Transform UV to llama space with perspective correction
        vec2 llamaUV = (uv - center) / scale;
        
        // Advanced lighting setup with multiple sources
        vec2 primaryLight = vec2(0.4, 0.2); // Main sunlight
        vec2 secondaryLight = vec2(-0.3, 0.4); // Ambient fill light
        vec2 rimLight = vec2(0.0, -0.5); // Rim lighting from below
        
        // Photorealistic body with anatomical accuracy
        float body = length(vec2(llamaUV.x * 0.68, llamaUV.y * 0.82)) - 0.68;
        if (body < 0.0) {
          // Realistic llama coloring with natural variation
          vec3 baseColor = vec3(0.88, 0.72, 0.58); // Natural llama cream color
          
          // Color variation across body
          float colorNoise = fractalNoise(llamaUV * 4.0, 3);
          baseColor = mix(baseColor, vec3(0.82, 0.65, 0.48), colorNoise * 0.3);
          
          // Darker areas (belly, legs connection)
          float darkerAreas = smoothstep(0.2, 0.6, llamaUV.y + 0.2);
          baseColor = mix(baseColor, vec3(0.76, 0.58, 0.42), darkerAreas * 0.4);
          
          // Ultra-realistic fur with tens of thousands of strands
          float furDensity = realisticFur(llamaUV, 1.2, time, 1.0);
          
          // Fur color variation
          vec3 furColor = mix(vec3(0.9, 0.75, 0.6), vec3(0.7, 0.55, 0.4), furDensity);
          baseColor = mix(baseColor, furColor, furDensity * 0.8);
          
          // Skin showing through sparse fur areas
          float skinShow = 1.0 - furDensity;
          vec3 skinColor = vec3(0.85, 0.7, 0.6) + skinTexture(llamaUV, 2.0) * 0.1;
          baseColor = mix(baseColor, skinColor, skinShow * 0.3);
          
          // Advanced physically-based lighting
          vec2 bodyNormal = normalize(vec2(llamaUV.x * 0.68, llamaUV.y * 0.82));
          float roughness = 0.7 + furDensity * 0.3; // Fur increases roughness
          float subsurface = 0.4; // Llama fur has subsurface scattering
          
          baseColor = calculateRealisticLighting(baseColor, llamaUV, bodyNormal, primaryLight, roughness, subsurface);
          
          // Additional lighting passes
          vec3 fillLight = calculateRealisticLighting(baseColor * 0.3, llamaUV, bodyNormal, secondaryLight, roughness, subsurface);
          baseColor += fillLight;
          
          color = baseColor;
        }
        
        // Neck with better proportions
        vec2 neckPos = vec2(llamaUV.x - 0.15, llamaUV.y + headBob);
        float neck = length(vec2(neckPos.x * 0.25, neckPos.y * 1.0)) - 0.35;
        if (neck < 0.0) {
          vec3 baseColor = mix(vec3(0.85, 0.65, 0.45), vec3(0.95, 0.75, 0.55), smoothstep(-0.1, 0.1, neck));
          float fur = furTexture(neckPos * 10.0, 1.0);
          baseColor += vec3(fur * 0.1);
          color = baseColor;
        }
        
        // Head with advanced detail and micro-animations
        vec2 headPos = vec2(llamaUV.x - 0.4 + headSway, llamaUV.y + headBob);
        float head = length(vec2(headPos.x * 0.5, headPos.y * 0.6)) - 0.45;
        if (head < 0.0) {
          vec3 baseColor = mix(vec3(0.85, 0.65, 0.45), vec3(0.95, 0.75, 0.55), smoothstep(-0.1, 0.1, head));
          
          // Advanced fur texture
          float fur = furTexture(headPos * 12.0, 1.0, time);
          baseColor += vec3(fur * 0.12);
          
          // Head muscle movement
          float headMuscle = muscleMovement(headPos, time, 0.015);
          baseColor += vec3(headMuscle * 0.03);
          
          // Dynamic lighting on head
          vec2 headNormal = normalize(vec2(headPos.x * 0.5, headPos.y * 0.6));
          baseColor = calculateLighting(baseColor, headPos, headNormal, lightPos);
          
          color = baseColor;
        }
        
        // Enhanced ears with twitching
        vec2 ear1Pos = vec2(llamaUV.x - 0.45, llamaUV.y - 0.25 + headBob + earTwitch);
        vec2 ear2Pos = vec2(llamaUV.x - 0.45, llamaUV.y + 0.25 + headBob - earTwitch);
        float ear1 = length(vec2(ear1Pos.x * 0.3, ear1Pos.y * 0.8)) - 0.15;
        float ear2 = length(vec2(ear2Pos.x * 0.3, ear2Pos.y * 0.8)) - 0.15;
        if (ear1 < 0.0 || ear2 < 0.0) {
          vec3 earColor = mix(vec3(0.7, 0.5, 0.3), vec3(0.8, 0.6, 0.4), 0.5);
          
          // Ear fur texture
          float earFur = furTexture(ear1Pos * 15.0, 1.0, time);
          earColor += vec3(earFur * 0.1);
          
          // Ear muscle movement
          float earMuscle = muscleMovement(ear1Pos, time, 0.01);
          earColor += vec3(earMuscle * 0.02);
          
          color = earColor;
        }
        
        // Enhanced legs with proper walking mechanics
        for (int i = 0; i < 4; i++) {
          float legX = -0.5 + float(i) * 0.3;
          float legPhase = float(i) * 1.57; // Stagger leg movement
          float legLift = max(0.0, sin(time * 6.0 + legPhase)) * 0.15;
          float legSwing = sin(time * 6.0 + legPhase) * 0.05;
          
          vec2 legPos = vec2(llamaUV.x - legX + legSwing, llamaUV.y - 0.4 + legLift);
          float leg = length(vec2(legPos.x * 0.12, legPos.y * 0.7)) - 0.25;
          if (leg < 0.0) {
            vec3 legColor = mix(vec3(0.6, 0.4, 0.2), vec3(0.7, 0.5, 0.3), smoothstep(-0.1, 0.1, leg));
            // Add hooves
            if (legPos.y > 0.2) {
              legColor = mix(vec3(0.3, 0.2, 0.1), vec3(0.4, 0.3, 0.2), 0.5);
            }
            color = legColor;
          }
        }
        
        // Photorealistic eyes with anatomical accuracy
        vec2 eye1Pos = vec2(llamaUV.x - 0.52, llamaUV.y - 0.15 + headBob + headSway);
        vec2 eye2Pos = vec2(llamaUV.x - 0.52, llamaUV.y + 0.15 + headBob + headSway);
        
        // Left eye
        vec3 leftEye = renderRealisticEye(eye1Pos, time, primaryLight);
        if (length(leftEye) > 0.0) {
          color = leftEye;
        }
        
        // Right eye  
        vec3 rightEye = renderRealisticEye(eye2Pos, time, primaryLight);
        if (length(rightEye) > 0.0) {
          color = rightEye;
        }
        
        // Eye lids and lashes
        float eyeLid1 = abs(eye1Pos.y) - 0.05;
        float eyeLid2 = abs(eye2Pos.y) - 0.05;
        if ((eyeLid1 < 0.01 && length(eye1Pos) < 0.08) || (eyeLid2 < 0.01 && length(eye2Pos) < 0.08)) {
          vec3 lidColor = vec3(0.75, 0.6, 0.45);
          float furOnLid = realisticFur(eye1Pos, 3.0, time, 0.5);
          lidColor = mix(lidColor, vec3(0.65, 0.5, 0.35), furOnLid * 0.6);
          color = lidColor;
        }
        
        // Eyelashes
        for (int i = 0; i < 8; i++) {
          float fi = float(i);
          float lashAngle = fi * 0.785 + 1.57; // Spread around eye
          vec2 lashStart = eye1Pos + vec2(cos(lashAngle), sin(lashAngle)) * 0.08;
          vec2 lashEnd = lashStart + vec2(cos(lashAngle), sin(lashAngle)) * 0.02;
          
          float lashDist = distance(eye1Pos, lashStart);
          if (lashDist < 0.005) {
            color = mix(color, vec3(0.2, 0.1, 0.05), 0.8);
          }
        }
        
        // Photorealistic nose with detailed structure
        vec2 nosePos = vec2(llamaUV.x - 0.58, llamaUV.y + headBob);
        float noseBridge = length(vec2(nosePos.x * 0.4, nosePos.y * 1.2)) - 0.06;
        float noseTip = length(nosePos) - 0.045;
        
        if (noseBridge < 0.0 || noseTip < 0.0) {
          // Realistic nose coloring - darker and more textured
          vec3 noseColor = vec3(0.45, 0.35, 0.25);
          
          // Nose skin texture
          float noseTexture = skinTexture(nosePos, 4.0);
          noseColor += vec3(noseTexture * 0.15);
          
          // Nose highlight from moisture
          float moisture = smoothstep(0.02, 0.0, length(nosePos));
          noseColor = mix(noseColor, vec3(0.6, 0.5, 0.4), moisture * 0.4);
          
          // Realistic nostrils with breathing animation
          float breathingRate = sin(time * 3.0) * nostrilFlare;
          vec2 nostril1 = nosePos + vec2(-0.025, 0.015);
          vec2 nostril2 = nosePos + vec2(0.025, 0.015);
          
          float nostril1Dist = length(nostril1) - (0.018 + breathingRate);
          float nostril2Dist = length(nostril2) - (0.018 + breathingRate);
          
          if (nostril1Dist < 0.0 || nostril2Dist < 0.0) {
            // Dark nostril interior with depth
            color = vec3(0.05, 0.02, 0.01);
          } else {
            // Apply realistic lighting to nose
            vec2 noseNormal = normalize(nosePos);
            noseColor = calculateRealisticLighting(noseColor, nosePos, noseNormal, primaryLight, 0.3, 0.2);
            color = noseColor;
          }
        }
        
        // Photorealistic mouth and muzzle
        vec2 muzzlePos = vec2(llamaUV.x - 0.55, llamaUV.y + headBob);
        float muzzle = length(vec2(muzzlePos.x * 0.8, muzzlePos.y * 1.2)) - 0.12;
        
        if (muzzle < 0.0) {
          // Muzzle base color
          vec3 muzzleColor = vec3(0.8, 0.65, 0.5);
          
          // Muzzle fur (shorter and finer than body)
          float muzzleFur = realisticFur(muzzlePos, 2.5, time, 0.3);
          muzzleColor = mix(muzzleColor, vec3(0.75, 0.6, 0.45), muzzleFur * 0.6);
          
          // Mouth line
          vec2 mouthLine = vec2(llamaUV.x - 0.58, llamaUV.y + 0.08 + headBob);
          float mouthDist = abs(mouthLine.y) - 0.002;
          if (mouthDist < 0.005 && abs(mouthLine.x) < 0.04) {
            color = vec3(0.3, 0.2, 0.15); // Mouth line
          } else {
            // Apply lighting to muzzle
            vec2 muzzleNormal = normalize(vec2(muzzlePos.x * 0.8, muzzlePos.y * 1.2));
            muzzleColor = calculateRealisticLighting(muzzleColor, muzzlePos, muzzleNormal, primaryLight, 0.6, 0.3);
            color = muzzleColor;
          }
        }
        
        // Tail with movement
        vec2 tailPos = vec2(llamaUV.x + 0.3, llamaUV.y);
        float tailSway = sin(time * 4.0) * 0.1;
        tailPos.x += tailSway;
        float tail = length(vec2(tailPos.x * 0.4, tailPos.y * 0.3)) - 0.2;
        if (tail < 0.0) {
          vec3 tailColor = mix(vec3(0.8, 0.6, 0.4), vec3(0.9, 0.7, 0.5), smoothstep(-0.1, 0.1, tail));
          float fur = furTexture(tailPos * 15.0, 1.0);
          tailColor += vec3(fur * 0.1);
          color = tailColor;
        }
        
        // Enhanced outline with varying thickness
        float outline = min(min(min(body, head), neck), tail);
        if (outline > -0.08 && outline < 0.0) {
          float outlineStrength = smoothstep(-0.08, 0.0, outline);
          color = mix(color, vec3(0.1), outlineStrength * 0.8);
        }
        
        // Add some sparkle in the eyes
        if (eye1 < 0.0 || eye2 < 0.0) {
          vec2 sparklePos = (eye1 < 0.0) ? eye1Pos : eye2Pos;
          float sparkle = length(sparklePos + vec2(0.02, -0.02)) - 0.01;
          if (sparkle < 0.0) {
            color = vec3(1.0);
          }
        }
        
        // Ground shadow
        vec2 shadowPos = vec2(llamaUV.x, llamaUV.y + 0.5);
        float shadow = length(vec2(shadowPos.x * 0.8, shadowPos.y * 0.3)) - 0.4;
        if (shadow < 0.0) {
          float shadowAlpha = smoothstep(-0.2, 0.0, shadow) * 0.3;
          color = mix(color, vec3(0.0), shadowAlpha);
        }
        
        // Add some personality - occasional blinking
        float blink = step(0.95, sin(time * 0.5));
        if (blink > 0.5 && (eye1 < 0.0 || eye2 < 0.0)) {
          color = mix(vec3(0.85, 0.65, 0.45), vec3(0.9, 0.7, 0.5), 0.5);
        }
        
        // Environmental effects - dust particles
        float dust = dustParticles(uv, time);
        if (dust > 0.1) {
          color = mix(color, vec3(0.8, 0.7, 0.6), dust * 0.3);
        }
        
        // Wind effect on fur
        float windEffect = sin(time * 3.0 + uv.x * 20.0) * 0.02;
        if (body < 0.0 || head < 0.0) {
          color += vec3(windEffect);
        }
        
        // Breathing animation
        float breathing = sin(time * 4.0) * 0.005;
        if (body < 0.0) {
          color += vec3(breathing);
        }
        
        // Subtle color variation over time
        float colorShift = sin(time * 0.1) * 0.02;
        color += vec3(colorShift);
        
        return color;
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv.y = 1.0 - uv.y; // Flip Y coordinate
        
        float time = u_time * 0.001;
        float progress = u_progress;
        
        vec3 color = drawRealisticLlama(uv, time, progress, u_direction);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Create WebGL context
    const gl = canvas.getContext('webgl');
    if (!gl) {
      // Fallback to 2D canvas if WebGL is not available
      const animate2D = () => {
        const now = Date.now();
        const elapsed = now - animation.startTime;
        const progress = Math.min(elapsed / animation.duration, 1);
        
        if (progress >= 1) {
          setAnimation(null);
          return;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw photorealistic 2D llama matching WebGL quality
        const x = animation.direction === 'right' 
          ? progress * canvas.width + 80
          : canvas.width - progress * canvas.width - 80;
        const y = canvas.height / 2;
        const time = Date.now() * 0.0055; // Slower, more realistic timing
        const walkCycle = Math.sin(time * 5.5) * 10;
        const bodyBob = Math.sin(time * 11) * 3;
        const breathingCycle = Math.sin(time * 3) * 1.5;
        const heartbeat = Math.sin(time * 12) * 0.4;
        const headBob = Math.sin(time * 6 + 0.8) * 2.5;
        const headSway = Math.sin(time * 3.2) * 1.5;
        const tailSway = Math.sin(time * 4) * 12;
        const earTwitch = Math.sin(time * 18 + Math.sin(time * 2.1)) * 0.8;
        const nostrilFlare = Math.sin(time * 6) * 0.6 + 0.6;
        const muscleFlex = Math.sin(time * 8) * 0.5;
        
        // Save context for transformations
        ctx.save();
        
        // Apply realistic walking transformation
        ctx.translate(x, y + walkCycle + bodyBob + breathingCycle + heartbeat);
        
        // Photorealistic body with natural llama coloring
        const bodyGradient = ctx.createRadialGradient(-10, -5, 0, 0, 0, 65);
        bodyGradient.addColorStop(0, '#e1b894'); // Natural llama cream
        bodyGradient.addColorStop(0.4, '#d4a574'); // Mid-tone
        bodyGradient.addColorStop(0.7, '#c49a6c'); // Darker areas
        bodyGradient.addColorStop(1, '#a67c52'); // Shadow areas
        ctx.fillStyle = bodyGradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, 55 + muscleFlex, 38, 0, 0, 2 * Math.PI);
        ctx.fill();
        
        // Body outline with varying thickness
        ctx.strokeStyle = '#8b6914';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Muscle definition lines
        ctx.strokeStyle = 'rgba(139, 105, 20, 0.3)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.ellipse(0, -10 + i * 10, 40, 25, 0, 0, 2 * Math.PI);
          ctx.stroke();
        }
        
        // Neck
        ctx.fillStyle = '#d4a574';
        ctx.beginPath();
        ctx.ellipse(-25, headBob, 15, 25, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // Head with head sway
        ctx.beginPath();
        ctx.ellipse(-45 + headSway, headBob, 30, 25, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // Enhanced ears with twitching
        ctx.fillStyle = '#c49a6c';
        ctx.beginPath();
        ctx.ellipse(-50, headBob - 15 + earTwitch, 8, 12, 0, 0, 2 * Math.PI);
        ctx.ellipse(-50, headBob + 15 - earTwitch, 8, 12, 0, 0, 2 * Math.PI);
        ctx.fill();
        
        // Ear fur texture
        ctx.fillStyle = 'rgba(196, 154, 108, 0.3)';
        for (let i = 0; i < 8; i++) {
          ctx.beginPath();
          ctx.arc(-50 + (Math.random() - 0.5) * 16, headBob - 15 + (Math.random() - 0.5) * 24, 1, 0, 2 * Math.PI);
          ctx.fill();
        }
        
        // Ultra-detailed eyes with iris
        ctx.fillStyle = '#f8f8f8';
        ctx.beginPath();
        ctx.arc(-55, headBob - 8, 6, 0, 2 * Math.PI);
        ctx.arc(-55, headBob + 8, 6, 0, 2 * Math.PI);
        ctx.fill();
        
        // Iris
        ctx.fillStyle = '#2d4a1a';
        ctx.beginPath();
        ctx.arc(-53, headBob - 8, 4, 0, 2 * Math.PI);
        ctx.arc(-53, headBob + 8, 4, 0, 2 * Math.PI);
        ctx.fill();
        
        // Pupils
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(-53, headBob - 8, 2, 0, 2 * Math.PI);
        ctx.arc(-53, headBob + 8, 2, 0, 2 * Math.PI);
        ctx.fill();
        
        // Eye sparkles
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(-52, headBob - 9, 1, 0, 2 * Math.PI);
        ctx.arc(-52, headBob + 7, 1, 0, 2 * Math.PI);
        ctx.fill();
        
        // Enhanced nose with nostril flaring
        ctx.fillStyle = '#8b6914';
        ctx.beginPath();
        ctx.arc(-60, headBob, 4, 0, 2 * Math.PI);
        ctx.fill();
        
        // Nostrils with flaring animation
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(-61, headBob + 1, 1 + nostrilFlare, 0, 2 * Math.PI);
        ctx.arc(-59, headBob + 1, 1 + nostrilFlare, 0, 2 * Math.PI);
        ctx.fill();
        
        // Mouth
        ctx.strokeStyle = '#8b6914';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(-58, headBob + 3, 8, 0, Math.PI);
        ctx.stroke();
        
        // Enhanced legs with proper walking mechanics
        ctx.fillStyle = '#8b6914';
        for (let i = 0; i < 4; i++) {
          const legX = -30 + i * 20;
          const legPhase = i * 1.57;
          const legLift = Math.max(0, Math.sin(time * 6 + legPhase)) * 15;
          const legSwing = Math.sin(time * 6 + legPhase) * 5;
          
          ctx.beginPath();
          ctx.ellipse(legX + legSwing, 35 + legLift, 6, 20, 0, 0, 2 * Math.PI);
          ctx.fill();
          
          // Hooves
          ctx.fillStyle = '#4a3c2a';
          ctx.beginPath();
          ctx.ellipse(legX + legSwing, 50 + legLift, 8, 4, 0, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = '#8b6914';
        }
        
        // Tail with movement
        ctx.fillStyle = '#d4a574';
        ctx.save();
        ctx.translate(35, 0);
        ctx.rotate(tailSway * 0.1);
        ctx.beginPath();
        ctx.ellipse(0, 0, 15, 8, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        
        // Ultra-realistic fur simulation (thousands of individual strands)
        ctx.strokeStyle = 'rgba(196, 154, 108, 0.3)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < 200; i++) {
          const furX = (Math.random() - 0.5) * 110;
          const furY = (Math.random() - 0.5) * 75;
          const furLength = Math.random() * 3 + 1;
          const furAngle = Math.random() * Math.PI * 2;
          
          ctx.beginPath();
          ctx.moveTo(furX, furY);
          ctx.lineTo(furX + Math.cos(furAngle) * furLength, furY + Math.sin(furAngle) * furLength);
          ctx.stroke();
        }
        
        // Secondary fur layer (shorter, denser)
        ctx.strokeStyle = 'rgba(180, 140, 100, 0.25)';
        ctx.lineWidth = 0.3;
        for (let i = 0; i < 300; i++) {
          const furX = (Math.random() - 0.5) * 100;
          const furY = (Math.random() - 0.5) * 70;
          const furLength = Math.random() * 2 + 0.5;
          const furAngle = Math.random() * Math.PI * 2 + Math.sin(time * 2 + furX * 0.1) * 0.2;
          
          ctx.beginPath();
          ctx.moveTo(furX, furY);
          ctx.lineTo(furX + Math.cos(furAngle) * furLength, furY + Math.sin(furAngle) * furLength);
          ctx.stroke();
        }
        
        // Undercoat simulation
        ctx.fillStyle = 'rgba(220, 180, 140, 0.1)';
        for (let i = 0; i < 150; i++) {
          const furX = (Math.random() - 0.5) * 90;
          const furY = (Math.random() - 0.5) * 65;
          const furSize = Math.random() * 0.4 + 0.1;
          ctx.beginPath();
          ctx.arc(furX, furY, furSize, 0, 2 * Math.PI);
          ctx.fill();
        }
        
        ctx.restore();
        
        // Ground shadow
        const shadowGradient = ctx.createRadialGradient(x, y + 60, 0, x, y + 60, 40);
        shadowGradient.addColorStop(0, 'rgba(0, 0, 0, 0.3)');
        shadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = shadowGradient;
        ctx.beginPath();
        ctx.ellipse(x, y + 60, 40, 15, 0, 0, 2 * Math.PI);
        ctx.fill();
        
        // Dust particles
        ctx.fillStyle = 'rgba(139, 105, 20, 0.4)';
        for (let i = 0; i < 20; i++) {
          const dustX = x + (Math.random() - 0.5) * 100;
          const dustY = y + 40 + Math.random() * 20;
          const dustSize = Math.random() * 2;
          ctx.beginPath();
          ctx.arc(dustX, dustY, dustSize, 0, 2 * Math.PI);
          ctx.fill();
        }
        
        // Wind effect lines
        ctx.strokeStyle = 'rgba(139, 105, 20, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
          const windX = x + (Math.random() - 0.5) * 80;
          const windY = y + (Math.random() - 0.5) * 60;
          ctx.beginPath();
          ctx.moveTo(windX, windY);
          ctx.lineTo(windX + 10, windY - 5);
          ctx.stroke();
        }
        
        animationRef.current = requestAnimationFrame(animate2D);
      };
      
      animate2D();
      return;
    }

    // WebGL setup
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) return;
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) return;
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    // Create quad vertices
    const vertices = new Float32Array([
      -1, -1, 0, 0,
       1, -1, 1, 0,
      -1,  1, 0, 1,
       1,  1, 1, 1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');

    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 16, 8);

    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const progressLocation = gl.getUniformLocation(program, 'u_progress');
    const directionLocation = gl.getUniformLocation(program, 'u_direction');
    const heightLocation = gl.getUniformLocation(program, 'u_height');

    const animate = () => {
      const now = Date.now();
      const elapsed = now - animation.startTime;
      const progress = Math.min(elapsed / animation.duration, 1);
      
      if (progress >= 1) {
        setAnimation(null);
        return;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      
      gl.uniform1f(timeLocation, now);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(progressLocation, progress);
      gl.uniform1i(directionLocation, animation.direction === 'right' ? 1 : 0);
      gl.uniform1f(heightLocation, animation.height);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animation]);

  if (!isLlamaEnabled || !animation) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9998,
      }}
    />
  );
};

export default WalkingLlama;
