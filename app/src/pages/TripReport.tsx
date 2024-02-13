import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown'
import {Container} from "semantic-ui-react";
import {useParams} from "react-router";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function Markdown({folderName}: {folderName: string}){
    let [markdown, setMarkdown] = useState("")
    let {year, slug} : any = useParams()

    useEffect(() => {
        const deslugged = slug.replace(/_/g, " ")
        const filename = `${year}::${deslugged}.md`
        const path = `/${folderName}/${filename}`
        console.log("getting", path)
        fetch(path).then((response) => response.text()).then((text) => {
            setMarkdown(text)
        })
    })

    return <Container className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm, rehypeRaw]}>{markdown}</ReactMarkdown>
    </Container>
}

function TripReport(){
    return <Markdown folderName="trip_reports"/>
}

function CourseNotes(){
    return <Markdown folderName="course_notes"/>
}

export {TripReport, CourseNotes}
