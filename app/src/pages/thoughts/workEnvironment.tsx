import React from "react";
import BasePage from "../BasePage";


function WorkEnvironment() {
  return <BasePage title={"Work Environment Thoughts"} subtitle="">
    ## Work to reduce cognitive load
    ### consider your workflow (how you work)
    #### What to consider:
      - Split up your services different IDEs, helps to focus on one thing at a time
      - consider the mental map you use of which windows you put where on your desktop. is there a flow to it? is it consistent or always changing?
      - what parts of your workflow are repetitive? can you automate them? (e.g. using a script to open all your windows at once)

    ## Write bug-free code; fast
    ### consider your code
    #### What to consider:

      - Error hard and early
      In undesirable states, error hard. i.e. if a list/dict is required to have exactly one item needed/visited raise an exception.
      This means that if that case is ever hit, it will be obvious that something is wrong. This is better than having a bug that is hard to find.

  </BasePage>
}

export default WorkEnvironment
