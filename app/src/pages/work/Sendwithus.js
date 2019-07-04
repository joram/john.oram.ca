import React from "react";
import {Grid, Card} from "semantic-ui-react"
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import BasePage from "../BasePage";


let dev_description = "Developed the Sendwithus product, including a delivery pipeline with unreliable downstream services.\n" +
    "Core tasks included:\n" +
    "Contribute to, and monitor a resilient distributed system\n" +
    "Building an on-call team, including its procedures and infrastructure.\n" +
    "Designing new services or refactoring major components to add functionality or scalability\n" +
    "Promoting a healthy work environment for architecture and system design discourse.\n";

let lead_description = "Ran a team of 3-6 devs who developed two products: Sendwithus and Dyspatch.\n" +
    "Core tasks included:\n" +
    "Refactoring old and designing new microservices\n" +
    "Supporting API ~500 million calls/month\n" +
    "Coordinating and constructing a Cassandra Cluster writing 2-3 billion records with a <30ms p95 response time\n" +
    "Building out, coordinating and documenting devops procedures and an on-call rotation\n" +
    "Hiring, performance reviews, and participating in company direction discussions.\n";



function Sendwithus() {
  return (<BasePage title="Sendwithus">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Icon icon={home} />
            <i className="icon-go"></i>
            Golang
          </Grid.Column>
          <Grid.Column>
            <i className="icon-python"></i>
            Python
          </Grid.Column>
          <Grid.Column>
            <i className="icon-docker"></i>
            Docker
          </Grid.Column>
          <Grid.Column>
            Redshift
            <i className="icon-database"></i>
          </Grid.Column>
          <Grid.Column>
              Cassandra
              <i className="icon-cassandra" style={{float:"right"}}></i>
          </Grid.Column>
          <Grid.Column>
            <i className="icon-postgres"></i>
            RDS
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <i className="fa-cubes"></i>
            Kubernetes
          </Grid.Column>
          <Grid.Column>
            <i className="icon-terraform"></i>
            Terraform</Grid.Column>
          <Grid.Column>GRPC</Grid.Column>
          <Grid.Column>Protobuf</Grid.Column>
          <Grid.Column>OpenTracing</Grid.Column>
          <Grid.Column>SQS</Grid.Column>
          <Grid.Column>Kinesis</Grid.Column>
        </Grid.Row>
      </Grid>
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
    </BasePage>)
}

export default Sendwithus