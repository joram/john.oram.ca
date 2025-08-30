import React from 'react';
import FilePlayer from "react-player/file";
import { Paper, Typography, Box } from "@mui/material";

function WaptaTraverse(props: any){
    return (
        <Paper sx={{ p: 3, backgroundColor: '#2d2d2d', color: 'white' }}>
            <Typography variant="h4" component="h1" sx={{ color: 'white', mb: 2 }}>
                Wapta Traverse
            </Typography>
            
            <Box component="ul" sx={{ mb: 3 }}>
                <Typography component="li">Touching the Wapta, Bow, Vulture, and Waputik glaciers.</Typography>
                <Typography component="li">Visiting the Bow, Balfour and Scott Duncan huts.</Typography>
            </Box>

            <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 3, mb: 2 }}>
                Preparation (training and gear)
            </Typography>
            <Typography paragraph>
                I prepared this trip with a training regiment from my dear sister. It was longer runs, mixed with leg/core exercises.
                Sady I was unable to keep up the training near the end, with life getting in hte way. The house got sick, and scheduling chaos got in the way.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 3, mb: 2 }}>
                Changing Plans
            </Typography>
            <Typography paragraph>
                Our original plan was to do the Peyto approach, but a SPAW (Special Public Avalanche Warning) was issued for the area.
                We decided to wait that day as the forecast was scheduled to update that night.
                The next day the forecast was "considerable" for the elevations we would be at, so we adjusted our plans to start at Bow Lake, and skip the first leg of the traverse.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 3, mb: 2 }}>
                Day 1: Bow Lake to Bow Hut
            </Typography>
            <Box sx={{ mb: 2 }}>
                <FilePlayer 
                    light={true} 
                    style={{ paddingLeft: "10px" }} 
                    controls={true} 
                    url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/Wapta+Traverse+-+Day+1+-+Bow+h264.mp4" 
                />
            </Box>
            <Typography paragraph>
                We started at Bow Lake, and skied up to Bow Hut. The weather was clear at first, and the skiing was good.
                Higher up, the weather turned, and we were in a whiteout for the last part of the approach.
                We arrived at the hut in the early afternoon, and spent the rest of the day relaxing and enjoying the views as they came and went with the cloud/fog.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 3, mb: 2 }}>
                Day 2: Bow Hut to Balfour Hut
            </Typography>
            <Box sx={{ mb: 2 }}>
                <FilePlayer 
                    light={true} 
                    style={{ paddingLeft: "10px" }} 
                    controls={true} 
                    url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/Wapta+Traverse+-+Day+2+-+Balfour+h264.mp4" 
                />
            </Box>
            <Typography paragraph>
                We set our alarms for 5:30, and were out the door by 8:30. The weather was clear, at first. We had a great view of the surrounding peaks.
                We roped up for the glacier travel, and made our way to the St. Nicholas - Olive col. The weather turned, and we were in a whiteout for the approach to the col.
                The crevasses forced us center on the glacier, and we had to cross some bridges to get back to the side as we approached the col.
                Once at the base of the col, we took our skis off, and strapped them to the packs.
                The wind was starting to pick up, and we were chilly, so we tackled the ice+scree quickly, and gained the col with relative ease.
            </Typography>
            <Typography paragraph>
                At the top of the col, we were touching the Vulture glacier, and found a spot out of the wind for a late lunch/snack.
                As we sat there, transitioning our setups for downhill, another party came up and joined us. They were doing the traverse as well, and we'd met them in the parking lot a few days earlier.
                We chatted for a bit, and then grouped up for the decent to the Balfour Hut.
                We needed one more transition to get over an extra role, and then it was gentle downhill roles to the hut.
            </Typography>
            <Typography paragraph>
                At the hut we realised that Arthur had gone to University with one of the folks in the other group. Small world.
                The other group gave loads of useful beta, as they were from the area and knew the surfaces well.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 3, mb: 2 }}>
                Day 3: Balfour Hut to Scott Duncan Hut
            </Typography>
            <Box sx={{ mb: 2 }}>
                <FilePlayer 
                    light={true} 
                    style={{ paddingLeft: "10px" }} 
                    url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/Wapta+Traverse+-+day+3+-+Scott+Duncan+h264.mp4" 
                />
            </Box>
            <Typography paragraph>
                At the suggestion of the other party, we did another 5:30am alarm, for an 8am departure in the dark.
                We had blue sky for the first part of the day, and the skiing was great, albeit breaking trail was tough, in knee deep powder.
                This was Justin and Curtis's first day taking lead on the trail breaking and route finding, and they did a great job.
            </Typography>
            <Typography paragraph>
                The route took us up a wide gulley, where a bergschrund forced us over to the right hand side, and under a cerac,
                We attempted to move to this point quickly, and after that had less time constraints, or objective hazards to worry about.
                The clouds that were forming off the peaks of mount Balfour rolled in and gave us another whiteout for the last part of the approach to the high col.
            </Typography>
            <Typography paragraph>
                Once over the col, we had a great view of the Waputik Icefield, and the Scott Duncan Hut, the sky cleared up, and we, after a snack, transitioned our equipment for the downhill.
                Here I realized that we could leave my gopro strapped to someone's back, and got some excellent footage of the descent.
            </Typography>
            <Typography paragraph>
                Once we got to the hut, we found that the door was completely snowed in, and we had to dig it out to get in. An entertaining end to a 9.5hr day.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 3, mb: 2 }}>
                Day 4: Scott Duncan Hut to Great Divide Lodge
            </Typography>
            <Box sx={{ mb: 2 }}>
                <FilePlayer 
                    light={true} 
                    style={{ paddingLeft: "10px" }} 
                    url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/Wapta+Traverse+-+day+3+-+Down+To+Car+h264.mp4" 
                />
            </Box>
            <Typography paragraph>
                We had another early start, because of all the logistics and driving we needed to do after getting back to the cars.
                We were out the door by 8:30, and had a great view of the surrounding peaks, and the high pressure front kept the sky's clear the whole day.
                The skiing was great, and we made good time to the car, skiing all sorts of terrain, from powder to crust, to ice, to slush.
            </Typography>

            <Typography variant="h6" component="h3" sx={{ color: 'white', mt: 3, mb: 2 }}>
                Future Edits
            </Typography>
            <Box component="ul" sx={{ mb: 3 }}>
                <Typography component="li">I packed way too much food. 4.5kg came back to Victoria with me. That's not counting the emergency dinner.</Typography>
                <Typography component="li">missing basic bandaids in the first aid kit.</Typography>
            </Box>

            <Typography variant="h6" component="h3" sx={{ color: 'white', mt: 3, mb: 2 }}>
                Special thanks
            </Typography>
            <Box component="ul">
                <Typography component="li">Caitlin (my wife) for taking care of family as i disappear into the mountains</Typography>
                <Typography component="li">My parents, for letting us use their place as a base of operations for Vancouver</Typography>
                <Typography component="li">Justin's mother (Karen), for letting us use her place as a base of operations for Canmore</Typography>
            </Box>
        </Paper>
    );
}

export default WaptaTraverse;
