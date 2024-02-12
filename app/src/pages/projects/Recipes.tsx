import React from "react";
import BasePage from "../BasePage";

function Recipes() {
    let title = <>
      <img src="../../../public/static/recipes.png" alt={"icon"} />
      Recipes
    </>;

    return (<BasePage title={title}>
        This is a simple website I threw together to try and agreggate multiple recipe sites,
        with some additional personally desired features.
        <ul>
            <li>No life story before the recipe</li>
            <li>ingredients list visible beside the instructions</li>
        </ul>
        With this project I experimented with a DB-less infrastructure. Since all the data is static,
        it's store it in the docker image as a set of json files, loaded into memory at startup.

        <br/><br/>
        You can see the code here: <a href="https://github.com/joram/recipes">https://github.com/joram/recipes</a>
        <br/>
        and the website here: <a href="https://recipes.oram.ca">recipes.oram.ca</a>
    </BasePage>)
}

export default Recipes