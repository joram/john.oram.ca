import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import {
  minionworks_dev,
  socoloco_dev,
  socoloco_lead,
  swu_dev,
  swu_lead,
  tutela_devops,
  tutela_lead,
  certn_dev,
  certn_staff,
  intlabs_dev,
  veilstream_cto,
} from "../pages/work/allRoles";

const companyColors: Record<string, string> = {
  "Minionworks Games": "#6C5CE7",
  "Socoloco": "#00B894",
  "Sendwithus/Dyspatch": "#0984E3",
  "Tutela": "#E17055",
  "Certn": "#FDCB6E",
  "Intlabs": "#A29BFE",
  "VeilStream": "#55EFC4",
};

const companyLinks: Record<string, string> = {
  "Socoloco": "/work/socoloco",
  "Sendwithus/Dyspatch": "/work/sendwithus",
  "Tutela": "/work/tutela",
  "Certn": "/work/certn",
  "Intlabs": "/work/intlabs",
  "VeilStream": "/work/veilstream",
};

const allRoles = [
  minionworks_dev,
  socoloco_dev,
  socoloco_lead,
  swu_dev,
  swu_lead,
  tutela_devops,
  tutela_lead,
  certn_dev,
  certn_staff,
  intlabs_dev,
  veilstream_cto,
];

function RoleCard({ role, color, isLeft, link }: {
  role: typeof allRoles[0];
  color: string;
  isLeft: boolean;
  link?: string;
}) {
  const cardBox = (
    <Box sx={{
      backgroundColor: '#3d3e3f',
      borderRadius: 2,
      p: 1.5,
      ...(isLeft
        ? { borderRight: `3px solid ${color}` }
        : { borderLeft: `3px solid ${color}` }),
      transition: 'transform 0.15s, box-shadow 0.15s',
      ...(link ? {
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: `0 4px 12px ${color}55`,
        },
      } : {}),
    }}>
      <Typography variant="caption" sx={{ color, display: 'block', fontWeight: 'bold' }}>
        {role.startDate} – {role.endDate}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 'bold', lineHeight: 1.3, mt: 0.25 }}>
        {role.company}
      </Typography>
      <Typography variant="body2" sx={{ color: '#cccccc', fontSize: '0.78rem' }}>
        {role.jobTitle}
      </Typography>
    </Box>
  );

  if (link) {
    return (
      <Link to={link} style={{ textDecoration: 'none', display: 'block' }}>
        {cardBox}
      </Link>
    );
  }
  return cardBox;
}

function Dot({ color }: { color: string }) {
  return (
    <Box sx={{
      width: 14,
      height: 14,
      borderRadius: '50%',
      backgroundColor: color,
      boxShadow: `0 0 8px ${color}`,
      flexShrink: 0,
    }} />
  );
}

function CareerRoadmap() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    // Single column layout for mobile: line on left, cards on right
    return (
      <Box sx={{ position: 'relative', my: 4, pl: 3 }}>
        <Box sx={{
          position: 'absolute',
          left: 14,
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: 'rgba(255,255,255,0.15)',
        }} />
        {allRoles.map((role) => {
          const color = companyColors[role.company] || '#ffffff';
          const link = companyLinks[role.company];
          return (
            <Box key={role.company + role.jobTitle} sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
              <Box sx={{ flexShrink: 0, zIndex: 1 }}>
                <Dot color={color} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <RoleCard role={role} color={color} isLeft={false} link={link} />
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  }

  // Desktop: alternating left/right layout
  return (
    <Box sx={{ position: 'relative', my: 4 }}>
      <Box sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.15)',
        zIndex: 0,
      }} />
      {allRoles.map((role, index) => {
        const color = companyColors[role.company] || '#ffffff';
        const isLeft = index % 2 === 0;
        const link = companyLinks[role.company];
        return (
          <Box
            key={role.company + role.jobTitle}
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 40px 1fr',
              alignItems: 'center',
              mb: 1.5,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {isLeft ? (
              <>
                <RoleCard role={role} color={color} isLeft={true} link={link} />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Dot color={color} />
                </Box>
                <Box />
              </>
            ) : (
              <>
                <Box />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Dot color={color} />
                </Box>
                <RoleCard role={role} color={color} isLeft={false} link={link} />
              </>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default CareerRoadmap;
