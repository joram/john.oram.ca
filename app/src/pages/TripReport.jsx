import React, {useState} from "react";
import ReactMarkdown from 'react-markdown'
import {Container} from "semantic-ui-react";
import {useParams} from "react-router";


function TripReport(){
    let [markdown, setMarkdown] = useState("")
    let [currentFilepath, setFilepath] = useState("")
    let {year, slug} = useParams()
    let trip_name = slug.replaceAll("_", " ")
    let filepath = "../trip_reports/"+year+"::"+trip_name+".md"

    if(currentFilepath!==filepath){
        fetch(filepath)
        .then((r) => r.text())
        .then(md  => {
          setMarkdown(md)
          setFilepath(filepath)
        })
    }

    return <Container className="markdown">
        <ReactMarkdown >{markdown}</ReactMarkdown>
    </Container>
}

export default TripReport

