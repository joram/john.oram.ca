import React from "react";
import {Grid, Card} from "semantic-ui-react"
import BasePage from "../BasePage";

import {Icon} from "react-icons-kit";
import {firefox} from "react-icons-kit/fa";

let lead_description = ""


function Tutela() {
  return (<BasePage title="Tutela">
      <Grid>
        <Grid.Row columns={7}>
          <Grid.Column>
            <Icon icon={firefox} />
            Golang
          </Grid.Column>
          <Grid.Column>
            <i className="icon-java"></i>
            Java
	  </Grid.Column>
          <Grid.Column>
            <i className="icon-docker"></i>
            Docker
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
            Terraform
	  </Grid.Column>
          <Grid.Column>Kinesis</Grid.Column>
        </Grid.Row>
      </Grid>
      <Card.Group>
          <Card
          header='Ops Team Lead'
          description={lead_description}
          extra='July 2017 - April 2019'
          />
      </Card.Group>
    </BasePage>)
}

export default Tutela
