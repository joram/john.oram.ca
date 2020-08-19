import React from "react";
import {Grid, Card, Divider} from "semantic-ui-react"
import BasePage from "../BasePage";


let dev_description = "Developed the Sendwithus product, including a delivery pipeline with unreliable downstream " +
    "services. Core tasks included: Contribute to, and monitor a resilient distributed system Building an on-call " +
    "team, including its procedures and infrastructure. Designing new services or refactoring major components to " +
    "add functionality or scalability Promoting a healthy work environment for architecture and system design " +
    "discourse.";

let lead_description = "Ran a team of 3-6 devs who developed two products: Sendwithus and Dyspatch. Core tasks " +
    "included: Refactoring old and designing new microservices Supporting API ~500 million calls/month Coordinating " +
    "and constructing a Cassandra Cluster writing 2-3 billion records with a <30ms p95 response time Building out, " +
    "coordinating and documenting devops procedures and an on-call rotation Hiring, performance reviews, and " +
    "participating in company direction discussions.";



function Sendwithus() {
  return (<BasePage title="Sendwithus">
      The company has two products: Sendwithus and Dispatch. <br/> The former is an email template management,
      rendering and delivery SaaS product, Dispatch is an enterprise email template management and workflow SaaS
      product. Sendwithus, was the only product the company had for my first two years. After that, the company
      dedicated most development effort to build out Dyspatch.

      <Divider horizontal>Roles</Divider>
      <Card.Group>
          <Card
          header='Backend Team Lead'
          description={lead_description}
          extra='July 2017 - April 2019'
          />
          <Card
          header='Backend Developer'
          description={dev_description}
          extra='January 2016 - July 2017'
          />
      </Card.Group>

      <Divider horizontal>Technologies Used</Divider>
      <Grid>
        <Grid.Row columns={6}>
          <Grid.Column>Golang</Grid.Column>
          <Grid.Column>Python</Grid.Column>
          <Grid.Column>Docker</Grid.Column>
          <Grid.Column>Redshift</Grid.Column>
          <Grid.Column>Cassandra</Grid.Column>
          <Grid.Column>RDS</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={7}>
          <Grid.Column>Kubernetes</Grid.Column>
          <Grid.Column>Terraform</Grid.Column>
          <Grid.Column>GRPC</Grid.Column>
          <Grid.Column>Protobuf</Grid.Column>
          <Grid.Column>OpenTracing</Grid.Column>
          <Grid.Column>SQS</Grid.Column>
          <Grid.Column>Kinesis</Grid.Column>
        </Grid.Row>
      </Grid>

    </BasePage>)
}

export default Sendwithus