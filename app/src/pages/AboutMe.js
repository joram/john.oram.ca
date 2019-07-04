import React from "react";
import {Icon, Divider, Segment} from "semantic-ui-react";
import BasePage from './BasePage'


class AboutMe extends React.Component {

  render(){
    let subtitle = <>
      <Segment basic>
        <a href="https://github.com/joram">
          <Icon name="github" size="large"/> GitHub
        </a>
        <Divider vertical inverted />
        <a href="https://www.linkedin.com/in/john-oram">
          <Icon name="linkedin" size="large"/> LinkedIn
        </a>
      </Segment>
    </>

    return <BasePage title="About Me" subtitle={subtitle} >
      todo: about me content
    </BasePage>
  }
}

export default AboutMe