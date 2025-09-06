import React from "react";
import { Typography, Box } from "@mui/material";
import BasePage from "../BasePage";

function Distillery() {
    const title = (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
            <img src="../../../public/static/distillery.png" alt="icon" style={{ width: '32px', height: '32px' }} />
            <Typography variant="h4" component="h1" sx={{ color: 'white' }}>
                Distillery
            </Typography>
        </Box>
    );

    return (
        <BasePage title={title}>
            <Typography paragraph>
                A distillery is a simple device that splits a mixture of liquid based on the differing evaporation temperatures of the materials.
                I've been working on a distillery that is controlled by: a raspberry pi, 8 temperature probes, 3 float sensors, 2 Liquid pumps, and 2 valves.
            </Typography>
            
            <Typography paragraph>
                A web interface updated via a web-socket, showing the realtime temperature of the system, and allowing the user to manually control valves and pumps.
                Once it's been put through its paces manually, we'll move to PID loops to automate the valves as well.
            </Typography>

            <Typography paragraph>
                You can see the code here: <a href="https://github.com/joram/distillery" style={{ color: '#61dafb' }}>https://github.com/joram/distillery</a>
            </Typography>
        </BasePage>
    );
}

export default Distillery;