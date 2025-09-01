import React from "react";
import { Card, CardContent, CardHeader, Divider, Typography, Box } from "@mui/material";
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
        rows.push(
            <Box key={"tech_row_"+i} sx={{ textAlign: 'center', mb: 1 }}>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    {techUsed.join(", ")}
                </Typography>
            </Box>
        )
        i += 1
    })
    return <>
        <Divider sx={{ my: 3, borderColor: 'white' }}>
            <Typography variant="h6" sx={{ color: 'white' }}>Technologies Used</Typography>
        </Divider>
        {rows}
    </>
}

function BaseCompanyPage({companyName, description, roles}: {companyName:string, description:string, roles:any}) {
    let roleCards: any[] = []
    let technologiesUsed: any[] = []
    roles.forEach((role: any) => {
        let {company, jobTitle, description, startDate, endDate, technologies} = role
        roleCards.push(
            <Card key={company+jobTitle} sx={{ backgroundColor: '#3d3e3f', color: 'white', mb: 2 }}>
                <CardHeader 
                    title={jobTitle} 
                    sx={{ color: 'white' }}
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                        {description}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#cccccc' }}>
                        {startDate+" - "+endDate}
                    </Typography>
                </CardContent>
            </Card>
        )
        if(technologies !== undefined){
            technologiesUsed = technologiesUsed.concat(technologies)
        }
    })

  return (
    <BasePage title={companyName} subtitle="">
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 3, color: 'white' }}>
            {description}
        </Typography>
        
        <Divider sx={{ my: 3, borderColor: 'white' }}>
            <Typography variant="h6" sx={{ color: 'white' }}>Roles</Typography>
        </Divider>
        
        <Box sx={{ mb: 3 }}>
            {roleCards}
        </Box>
        
        <Technologies technologiesUsed={technologiesUsed}/>
    </BasePage>
  )
}

export default BaseCompanyPage;
