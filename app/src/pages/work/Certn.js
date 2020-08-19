import React from "react";
import {Grid, Card, Divider} from "semantic-ui-react"
import BasePage from "../BasePage";


let lead_description = ""


function Certn() {
  return (<BasePage title="Certn">
      The company runs automated background and credit checks.

      <Divider horizontal>Roles</Divider>
      <Card.Group>
          <Card
          header='Senior Backend Developer'
          description={lead_description}
          extra='August 2020 - today'
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

    </BasePage>)
}

export default Certn
