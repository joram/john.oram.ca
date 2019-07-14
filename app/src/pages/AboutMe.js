import React from "react";
import {Icon, Divider, Segment, Container} from "semantic-ui-react";
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
      <Container>
        I'm a software developer with many professional interests and side hobbies.
        My primary professional interest is in secure, scalable and resilient end to end systems.
        This can be from all the way from system architecture, load balancing across databases, all the way to
        dev team processes, on-call rotations, and culture.
      </Container>
      <br/>

      <Container>
        My work experience speaks to my ability to organize a team, and architect distributed systems.
      </Container>
      <br/>

      <Container>
        My side projects, a subset documented here, show my desire to learn, experiment, and put my skills to use.
        Solving problems, even those that don't need such overly engineered solutions.
      </Container>
    </BasePage>
  }
}

export default AboutMe