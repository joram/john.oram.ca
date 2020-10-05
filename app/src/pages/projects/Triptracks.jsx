import React from "react";
import BasePage from "../BasePage";
import icon from "../../static/triptracks.png";

function Triptracks() {
    let title = <>
      <img src={icon} alt={"icon"} />
      Triptracks
    </>;

    return (<BasePage title={title}>
        This is a project to help with mountaineering trips. Specifically concentrating on gps tracks.
        Currently the functionality is limited to browsing routes via a web interface, or a mobile app.
        This has been a testbed project for different geo databases, and graphql over lambda functions (works surprisingly well).
        <br/><br/>

        The future features list is extensive, and includes offline caching of routes and map tiles for areas you are interested (there is likely no internet access on the trip).
        Trip planning, including: shared packing lists, inviting partners, forecast alerts, and generated trip plan documents to leave with someone in case search and rescue needs to be called.
        <br/><br/>

        You can see the code here: <a href="https://github.com/joram/triptracks">https://github.com/joram/triptracks</a>
        <br/>
        and the website here: <a href="https://app.triptracks.io">app.triptracks.io</a>
    </BasePage>)
}

export default Triptracks