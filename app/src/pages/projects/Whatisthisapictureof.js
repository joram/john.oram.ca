import React from "react";
import BasePage from "../BasePage";
import icon from "../../static/whatisthisapictureof.png";

function Whatisthisapictureof() {
    let title = <>
      <img src={icon} alt={"icon"} />
      Whatisthisapictureof
    </>;

    return (<BasePage title={title}>

        You can see the code here: <a href="https://github.com/joram/whatisthisapictureof">https://github.com/joram/whatisthisapictureof</a>
        <br/>
        and the website here: <a href="https://www.whatisthisapictureof.com">www.whatisthisapictureof.com</a>
    </BasePage>)
}

export default Whatisthisapictureof