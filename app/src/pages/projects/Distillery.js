import React from "react";
import BasePage from "../BasePage";
import icon from "../../static/distillery.png";


function Distillery() {
    let title = <>
      <img src={icon} alt={"icon"} />
      Distillery
    </>;

    return (<BasePage title={title}>
        A distillery is a simple device that splits a mixture of liquid based on the differing evaporation temperatures of the materials.
        I've been working on a distillery that is controlled by: a raspberry pi, 8 temperature probes, 3 float sensors, 2 Liquid pumps, and 2 valves.
        <br/><br/>
        A web interface updated via a web-socket, showing the realtime temperature of the system, and allowing the user to manually control valves and pumps.
        Once it's been put through its paces manually, we'll move to PID loops to automate the valves as well.
        <br/>
        <br/>

        You can see the code here: <a href="https://github.com/joram/distillery">https://github.com/joram/distillery</a>
    </BasePage>)
}

export default Distillery