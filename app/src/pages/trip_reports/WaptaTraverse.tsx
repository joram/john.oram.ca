import React, {CSSProperties} from 'react';

import FilePlayer from "react-player/file";
import {Segment} from "semantic-ui-react";

let style: CSSProperties = {
    paddingLeft: "10px",
}

function WaptaTraverse(props: any){
    return <Segment>
        <h1>Wapta Traverse</h1>
        <ul>
            <li>Touching the Wapta, Bow, Vulture, and Waputik glaciers.</li>
            <li>Visiting the Bow, Balfour and Scott Duncan huts.</li>
        </ul>

        <h2>Preparation (training and gear)</h2>
        I prepared this trip with a training regiment from my dear sister. It was longer runs, mixed with leg/core exercises.
        Sady I was unable to keep up the training near the end, with life getting in hte way. The house got sick, and scheduling chaos got in the way.

        <h2>Changing Plans</h2>
        Our original plan was to do the Peyto approach, but a SPAW (Special Public Avalanche Warning) was issued for the area.
        We decided to wait that day as the forecast was scheduled to update that night.
        The next day the forecast was "considerable" for the elevations we would be at, so we adjusted our plans to start at Bow Lake, and skip the first leg of the traverse.

        <h2>Day 1: Bow Lake to Bow Hut</h2>
        <FilePlayer light={true} style={style} controls={true} url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/Wapta+Traverse+-+Day+1+-+Bow+h264.mp4" />
        <span>
        We started at Bow Lake, and skied up to Bow Hut. The weather was clear at first, and the skiing was good.
        Higher up, the weather turned, and we were in a whiteout for the last part of the approach.
        We arrived at the hut in the early afternoon, and spent the rest of the day relaxing and enjoying the views as they came and went with the cloud/fog.
        </span>


        <h2>Day 2: Bow Hut to Balfour Hut</h2>
        <FilePlayer light={true} style={style} controls={true} url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/Wapta+Traverse+-+Day+2+-+Balfour+h264.mp4" />
        <span>
        We set our alarms for 5:30, and were out the door by 8:30. The weather was clear, at first. We had a great view of the surrounding peaks.
        We roped up for the glacier travel, and made our way to the St. Nicholas - Olive col. The weather turned, and we were in a whiteout for the approach to the col.
        The crevasses forced us center on the glacier, and we had to cross some bridges to get back to the side as we approached the col.
        Once at the base of the col, we took our skis off, and strapped them to the packs.
        The wind was starting to pick up, and we were chilly, so we tackled the ice+scree quickly, and gained the col with relative ease.
        </span>
        <span>
        At the top of the col, we were touching the Vulture glacier, and found a spot out of the wind for a late lunch/snack.
        As we sat there, transitioning our setups for downhill, another party came up and joined us. They were doing the traverse as well, and we'd met them in the parking lot a few days earlier.
        We chatted for a bit, and then grouped up for the decent to the Balfour Hut.
        We needed one more transition to get over an extra role, and then it was gentle downhill roles to the hut.
        </span>
        <span>
        At the hut we realised that Arthur had gone to University with one of the folks in the other group. Small world.
        The other group gave loads of useful beta, as they were from the area and knew the surfaces well.
        </span>

        <h2>Day 3: Balfour Hut to Scott Duncan Hut</h2>
        <FilePlayer light={true} style={style} url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/Wapta+Traverse+-+day+3+-+Scott+Duncan+h264.mp4" />
        <span>
        At the suggestion of the other party, we did another 5:30am alarm, for an 8am departure in the dark.
        We had blue sky for the first part of the day, and the skiing was great, albeit breaking trail was tough, in knee deep powder.
        This was Justin and Curtis's first day taking lead on the trail breaking and route finding, and they did a great job.
        </span>
        <span>
        The route took us up a wide gulley, where a bergschrund forced us over to the right hand side, and under a cerac,
        We attempted to move to this point quickly, and after that had less time constraints, or objective hazards to worry about.
        The clouds that were forming off the peaks of mount Balfour rolled in and gave us another whiteout for the last part of the approach to the high col.
        </span>
        <span>
        Once over the col, we had a great view of the Waputik Icefield, and the Scott Duncan Hut, the sky cleared up, and we, after a snack, transitioned our equipment for the downhill.
        Here I realized that we could leave my gopro strapped to someone's back, and got some excellent footage of the descent.
        </span>
        <span>
        Once we got to the hut, we found that the door was completely snowed in, and we had to dig it out to get in. An entertaining end to a 9.5hr day.
        </span>

        <h2>Day 4: Scott Duncan Hut to Great Divide Lodge</h2>
        <FilePlayer light={true} style={style} url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/Wapta+Traverse+-+day+3+-+Down+To+Car+h264.mp4" />
        <span>
        We had another early start, because of all the logistics and driving we needed to do after getting back to the cars.
        We were out the door by 8:30, and had a great view of the surrounding peaks, and the high pressure front kept the sky's clear the whole day.
        The skiing was great, and we made good time to the car, skiing all sorts of terrain, from powder to crust, to ice, to slush.
        </span>

        <h3>Future Edits</h3>
        <ul>
            <li>I packed way too much food. 4.5kg came back to Victoria with me. That's not counting the emergency dinner.</li>
            <li>missing basic bandaids in the first aid kit. </li>
        </ul>

        <h3>Special thanks</h3>
        <ul>
            <li>Caitlin (my wife) for taking care of family as i disappear into the mountains</li>
            <li>My parents, for letting us use their place as a base of operations for Vancouver</li>
            <li>Justin's mother (Karen), for letting us use her place as a base of operations for Canmore</li>
        </ul>
    </Segment>
}

export default WaptaTraverse
