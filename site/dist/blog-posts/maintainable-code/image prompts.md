# Image Prompts: Maintainable Code

Style guide for all images: clean, minimal flat illustration. Dark background (#0f1117), cool blue and slate tones with a single warm accent colour (amber or coral) used sparingly to draw the eye. No photorealism. No people. No stock-art clichés (no lightbulbs, no gears, no magnifying glasses). Labels and annotations in a monospace font where text is needed.

---

## 1. Hero: The Slow Collapse

**Placement:** Top of article, full-width.

**Prompt:**
A two-panel chart rendered as a clean technical illustration. Left panel: a smooth upward velocity curve labelled "early days," steady, confident, linear. Right panel: the same curve bending sharply downward in an exponential decay, the inflection point marked with a subtle vertical dashed line labelled "threshold crossed". The x-axis reads "time", the y-axis reads "shipping velocity". The decay curve continues off the bottom of the frame, implying there is no floor. Amber accent on the inflection point only. Dark background. Monospace axis labels.

---

## 2. The Compounding Problem

**Placement:** Beside the "slow collapse" section.

**Prompt:**
A visual metaphor for compounding complexity: a small snowball at the top of a steep slope, casting a long shadow that shows a much larger snowball at the bottom. The slope is rendered as a simple triangle with grid lines. The shadow is drawn precisely, not loosely; it should feel technical, not illustrative. No text. Dark background, cool blue tones, amber used only on the shadow outline.

---

## 3. Point of No Return

**Placement:** Beside the "full rebuilds" section.

**Prompt:**
A minimalist diagram of two diverging paths. On the left, a path with a small warning marker that branches into "refactor" and "rebuild"  both leading forward. On the right, the same junction but the "refactor" path is crossed out with a clean X, leaving only the "rebuild" path, which curves back before moving forward, indicating cost and delay. Labels in monospace. The X should be the amber accent. Dark background.

---

## 4. Incident Archaeology

**Placement:** Beside the "slower time to resolution" section.

**Prompt:**
A split-screen illustration. Left side: a clean, well-lit system diagram, with boxes connected by labelled arrows, a single red node clearly identified as the failure point, a clock showing a short time delta. Right side: the same system diagram but tangled, with arrows crossing each other, boxes with question marks, the failure point obscured behind overlapping connections, the clock showing a much longer time delta. The contrast should be stark and immediate. Monospace labels.

---

## 5. Telemetry Stack

**Placement:** Opening the "How bad is it?" section, full-width.

**Prompt:**
A vertical stack of three clean dashboard panels, rendered as simplified UI wireframes (not real screenshots). Top panel: an error rate chart with a spike. Middle panel: a structured log stream, a few lines of monospace text, key fields highlighted. Bottom panel: a distributed trace waterfall, horizontal bars of varying lengths, one bar amber to indicate a slow span. Each panel has a minimal label: "Errors", "Logs", "Traces". Connected by subtle vertical lines on the left suggesting they are layers of the same system. Dark background.

---

## 6. Coupling vs. Clean Boundaries

**Placement:** Beside the "structural causes" section.

**Prompt:**
Two architecture diagrams side by side. Left: five nodes connected by a dense web of crossing lines, every node connects to nearly every other. Label: "high coupling". Right: the same five nodes arranged in clear clusters, connected only at defined boundary points, lines clean and non-crossing. Label: "clear boundaries". Amber is used only on the crossing lines in the left diagram to emphasise the problem. Dark background, monospace labels.

---

## 7. Knowledge Silo

**Placement:** Beside the "siloed knowledge" section.

**Prompt:**
A simple org chart where one node is highlighted in amber; all the knowledge-connection lines (represented as arrows) radiate from that single node to the service boxes below. Every other node in the chart has no connections to the services. A subtle dashed outline around the single amber node suggests fragility: if removed, all connections disappear. No people icons. Use abstract rounded rectangles for nodes. Monospace labels for services: "payments", "auth", "billing".

---

## 8. Tech Debt: Intentional vs. Unintended

**Placement:** Beside the "pay down tech debt" section.

**Prompt:**
Two columns. Left column: a shortcut path through a maze, marked with a sticky note icon that reads "TODO: revisit by Q3," the shortcut is visible, documented, flagged. Right column: the same maze but the shortcut has no marking, the path looks like a normal route, and a small time-bomb icon sits at the end of it, undetected. Labels at the top: "Intentional Debt" and "Unintended Debt". Amber used only on the time-bomb. Dark background.

---

## 9. The Broken Review Loop

**Placement:** Beside the "AI-generated code breaks the assumption" section.

**Prompt:**
A flow diagram showing the traditional code review loop: "Engineer writes code" → "Engineer understands code" → "Reviewer reads code" → "Reviewer builds understanding" → "Merge". Below it, the same loop but with one node changed: "AI generates code" → "Engineer accepts code" → the "understands code" node is dim and marked with a question mark → "Reviewer reads code" → the "builds understanding" node is also dim and marked with a question mark → "Merge". The broken nodes are connected by dashed lines instead of solid. Amber on the question marks only. Monospace labels.

---

## 10. Canary Deployment / Blast Radius

**Placement:** Beside the "easily evaluate changes" section.

**Prompt:**
A network of identical nodes (representing users or requests). A small cluster in one corner, roughly 5% of the total, is highlighted with a subtle amber ring. An arrow points from a deployment box to only that small cluster, labelled "canary". The remaining 95% of nodes are untouched and grey. A dotted boundary separates the two groups. The image should convey controlled, limited exposure, not danger, but precision. Dark background, monospace labels.
