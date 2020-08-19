import React from "react";
import BasePage from "../BasePage";
import {Card, Divider, Grid} from "semantic-ui-react";


function Socoloco() {
  return <BasePage title={"Socoloco"}>
      The company had many products: diggit, begiving, gobid, and guildtrip.
      They were all ecommerce products white labeled off a single codebase.

      <Divider horizontal>Roles</Divider>
      <Card.Group>
          <Card
          header='Team Lead'
          description={""}
          extra='October 2019 - August 2020'
          />
          <Card
          header='Junior Developer'
          description={""}
          extra='October 2019 - August 2020'
          />
          <Card
          header='QA'
          description={""}
          extra='August 2019 - October 2019'
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