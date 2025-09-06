import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown'
import { Box, Paper } from "@mui/material";
import {useParams} from "react-router";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
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

    return (
        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            <Paper 
                className="markdown" 
                sx={{ 
                    p: 3, 
                    backgroundColor: '#3d3e3f',
                    color: 'white',
                    '& table': {
                        width: '100%',
                        borderCollapse: 'collapse',
                    },
                    '& th': {
                        borderBottom: 'solid 3px #ccc',
                        padding: '8px',
                        textAlign: 'left',
                    },
                    '& td': {
                        borderBottom: 'solid 1px #ccc',
                        padding: '8px',
                    },
                }}
            >
                <ReactMarkdown
                    remarkPlugins={ [remarkGfm]}
                    rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeRaw]}
                >{markdown}</ReactMarkdown>
            </Paper>
        </Box>
    );
}

function TripReport(){
    return <Markdown folderName="trip_reports"/>
}

function CourseNotes(){
    return <Markdown folderName="course_notes"/>
}

export {TripReport, CourseNotes}
