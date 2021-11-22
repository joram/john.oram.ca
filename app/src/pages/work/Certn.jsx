import React from "react";
import {Grid, Card, Divider} from "semantic-ui-react"
import BasePage from "../BasePage";


let dev_description = "Architected from the ground up a new microservice as a stitch layer to NetSuite (accounting software). " +
    "Initially working solo, eventually gaining 2-3 team members, we fleshed out a resilient transaction tracking piece of infrastructure." +
    "Along side this project, building out the incident response program to handle high severity incidents using PagerDuty."

function Certn() {
  return (<BasePage title="Certn">
      The company runs automated background and credit checks.

      <Divider horizontal>Roles</Divider>
      <Card.Group>
          <Card
          header='Senior Backend Developer'
          description={dev_description}
          extra='August 2020 - today'
          />
      </Card.Group>

      <Divider horizontal>Technologies Used</Divider>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>Python</Grid.Column>
          <Grid.Column>RDS</Grid.Column>
          <Grid.Column>ECS</Grid.Column>
          <Grid.Column>EC2</Grid.Column>
        </Grid.Row>
      </Grid>

    </BasePage>)
}

export default Certn
