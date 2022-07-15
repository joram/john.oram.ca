import React from "react";
import {Card, Container, Divider} from "semantic-ui-react"
import BasePage from "../BasePage";
import ReactWordcloud from "react-wordcloud";

function BaseCompanyPage(props) {
    let {companyName, description, roles} = props
    let roleCards = []
    let technologiesUsed = {}
    roles.forEach(role => {
        let {company, jobTitle, description, startDate, endDate, technologies} = role
        roleCards.push(<Card
            key={company+jobTitle}
            header={jobTitle}
            description={description}
            extra={startDate+" - "+endDate}
        />)
        if(technologies !== undefined){
            technologies.forEach(name => {
                if(technologiesUsed[name] === undefined) {
                    technologiesUsed[name] = 0
                }
                technologiesUsed[name] += 1
            })
        }
    })
    console.log(technologiesUsed)
    let words = [];
    Object.keys(technologiesUsed).forEach(name => {
        let weight = technologiesUsed[name]
        words.push({
            text: name,
            value: weight,
          })
    })

    let options = {
      rotations: 1,
      rotationAngles: [0],
    };
  return (<BasePage title={companyName}>
      <center>{description}</center>
      <Divider horizontal>Roles</Divider>
      <Card.Group centered={true}>
          {roleCards}
      </Card.Group>
      <Divider horizontal>Technologies Used</Divider>
      <Container>
          <div style={{
            width: "fit-content",
            margin: "auto",
              height:"200px"
          }}>
          <ReactWordcloud rotationAngles={[0,0]} options={options} words={words} size={[500,200]} />

          </div>
      </Container>

    </BasePage>)
}

export default BaseCompanyPage
