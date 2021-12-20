import React from "react";
import BasePage from "../BasePage";
import icon from "../../static/moistlywet.png";


function Moistlywet() {
    let title = <>
      <img src={icon} alt={"icon"} />
      Moistlywet
    </>;

    return (<BasePage title={title}>
        This project is to auto-water plants. We started it because a friend/coworker had never soldered before, and plants/gardening was another shared interest.
        During a lunch hour a week, we'd have "soldering club", where those of us with side projects, circuitry related or not, would meet, discuss progress and blockers, and, of course, solder.
        The setup is relatively simple, with three components: a web-interface, an api, and a small micro-controller with a builtin wifi chip.
        The micro-controller periodically reads the moisture of the soil, and reports the results to the API. In the response, the API decides how much watering, if any must be done, and how long until the micro-controller should poll again.
        The web interface shows the datapoints on a graph, and allows the user to adjust the min and max moisture levels.
        <br/>
        <br/>

        You can see the code here: <a href="https://github.com/joram/moistlywet">https://github.com/joram/moistlywet</a>
        <br/>
        and the website here: <a href="https://app.moistlywet.com">app.moistlywet.com</a>
    </BasePage>
  )

}

export default Moistlywet