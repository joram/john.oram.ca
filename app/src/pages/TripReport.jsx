import React, {useState} from "react";
import ReactMarkdown from 'react-markdown'
import {Container} from "semantic-ui-react";
import {useParams} from "react-router";


function TripReport(){
    let [markdown, setMarkdown] = useState("")
    let [currentSlug, setCurrentSlug] = useState("")
    let [currentYear, setCurrentYear] = useState("")
    let {year, slug} = useParams()

    if(currentSlug!==slug && year!==currentYear){
        let trip_name = slug.replaceAll("_", " ")
        let filepath = "/trip_reports/"+year+"::"+trip_name+".md"
        fetch(filepath)
        .then((r) => r.text())
        .then(md  => {
          setMarkdown(md)
          setCurrentSlug(slug)
          setCurrentYear(year)
        })
    }

    return <Container className="markdown">
        <ReactMarkdown >{markdown}</ReactMarkdown>
    </Container>
}

export default TripReport

