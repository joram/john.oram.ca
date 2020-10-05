import React from "react";
import {Grid, Card, Divider} from "semantic-ui-react"
import BasePage from "../BasePage";

let devops_description = "Working on an ops team of 4, we coordinated and ran <X> servers."
let lead_description = "Hired as a senior developer on the ops team, promoted to lead of the ops team " +
    "within two months. Built upon and maintained an ingress API and other core operational infrastructure." +
    "Functional Responsibilities:" +
    "Hiring and mentorship, " +
    "Infrastructure planning, development, and deployment, " +
    "Responsible for an API with 22 billion monthly invocations"


function Tutela() {
  return (<BasePage title="Tutela">
      The company uses an SDK with app partners to record telemetry, anonymized as much as possible,
      to come up with analytics used by the telcom industry.

      <Divider horizontal>Roles</Divider>
      <Card.Group>
          <Card
          header='Ops Team Lead'
          description={lead_description}
          extra='October 2019 - August 2020'
          />
          <Card
          header='Senior DevOps'
          description={devops_description}
          extra='August 2019 - October 2019'
          />
      </Card.Group>

     <Divider horizontal>Technologies Used</Divider>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>Java</Grid.Column>
          <Grid.Column>Python</Grid.Column>
          <Grid.Column>Docker</Grid.Column>
          <Grid.Column>RDS</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>Kubernetes</Grid.Column>
          <Grid.Column>Terraform</Grid.Column>
          <Grid.Column>Kinesis</Grid.Column>
        </Grid.Row>
      </Grid>

    </BasePage>)
}

export default Tutela
