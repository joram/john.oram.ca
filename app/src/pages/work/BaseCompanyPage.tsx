import React from "react";
import {Card, Divider} from "semantic-ui-react"
import BasePage from "../BasePage";

function splitList(items: any[], chunkSize: number) {
    let chunks = [];
    for (let i = 0; i < items.length; i += chunkSize) {
        const chunk = items.slice(i, i + chunkSize)
        chunks.push(chunk)
    }
    return chunks
}

function Technologies({technologiesUsed}: {technologiesUsed: string[]}){
    technologiesUsed = technologiesUsed.filter((v: any, i: any, a: any) => a.indexOf(v) === i)

    let i=0;
    let rows: React.JSX.Element[] = []
    splitList(technologiesUsed, 5).forEach(techUsed => {
        rows.push(<div key={"tech_row_"+i}>
            <center>{techUsed.join(", ")}</center>
        </div>)
        i += 1
    })
    return <>
        <Divider horizontal>Technologies Used</Divider>
        {rows}
    </>
}


function BaseCompanyPage({companyName, description, roles}: {companyName:string, description:string, roles:any}) {
    let roleCards: any[] = []
    let technologiesUsed: any[] = []
    roles.forEach((role: any) => {
        let {company, jobTitle, description, startDate, endDate, technologies} = role
        roleCards.push(<Card
            key={company+jobTitle}
            header={jobTitle}
            description={description}
            extra={startDate+" - "+endDate}
        />)
        if(technologies !== undefined){
            technologiesUsed = technologiesUsed.concat(technologies)
        }
    })


  return (<BasePage title={companyName} subtitle="" >
      <center>{description}</center>
      <Divider horizontal>Roles</Divider>
      <Card.Group centered={true}>
          {roleCards}
      </Card.Group>
      <Technologies technologiesUsed={technologiesUsed}/>

    </BasePage>)
}

export default BaseCompanyPage
