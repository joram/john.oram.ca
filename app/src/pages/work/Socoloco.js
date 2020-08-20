import React from "react";
import BasePage from "../BasePage";
import {Card, Divider, Grid} from "semantic-ui-react";


function Socoloco() {

    let lead_dev = <>
        Promoted to lead developer in charge of a team of 4 developers.
        <br/>
        Functional Responsibilities:
        <ul>
            <li>Develop the 4 product lines</li>
            <li>Sprint and backlog coordination</li>
            <li>Requirements gathering from non-technical stakeholders</li>
            <li>Human resources for hiring and onboarding</li>
        </ul>
    </>

    let dev = <>
        Initially hired as a QA, the role soon expanded to include development and maintenance of feature sets for several product lines.
        <br/>
        Functional Responsibilities:
        <ul>
            <li>Feature Development</li>
            <li>Release deployment with minimal interruption</li>
            <li>Coordinate co-op students, onboarding, pair coding, code reviews, and periodic check ins</li>
        </ul>

    </>

  return <BasePage title={"Socoloco"}>
      The company had many products: diggit, begiving, gobid, and guildtrip.
      They were all ecommerce products white labeled off a single codebase.

      <Divider horizontal>Roles</Divider>
      <Card.Group>
          <Card
          header='Lead Web Developer'
          description={lead_dev}
          extra='October 2019 - August 2020'
          />
          <Card
          header='Full Stack Web Developer'
          description={dev}
          extra='August 2019 - August 2020'
          />
      </Card.Group>

      <Divider horizontal>Technologies Used</Divider>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>Python</Grid.Column>
          <Grid.Column>RDS</Grid.Column>
          <Grid.Column>EC2</Grid.Column>
        </Grid.Row>
      </Grid>

  </BasePage>
}

export default Socoloco