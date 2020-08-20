import React from "react";
import BasePage from "../BasePage";
import icon from "../../static/whatisthisapictureof.png";

function Whatisthisapictureof() {
    let title = <>
      <img src={icon} alt={"icon"} />
      Whatisthisapictureof
    </>;

    return (<BasePage title={title}>
        Upload a picture and have a trained ML model guess what the image is of. This was a small side project
        to base a talk around. The talk was for startup slam 2020, a local conference in Victoria BC. This was my
        second talk. The talk was targeting juniors, and intending to explain scaling
        complexities of production systems.

        <br/><br/>
        You can see the code here: <a href="https://github.com/joram/whatisthisapictureof">https://github.com/joram/whatisthisapictureof</a>
        <br/>
        and the website here: <a href="https://www.whatisthisapictureof.com">www.whatisthisapictureof.com</a>
    </BasePage>)
}

export default Whatisthisapictureof