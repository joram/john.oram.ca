import React from "react";
import ReactMarkdown from 'react-markdown'
import BasePage from './BasePage'
import {Container} from "semantic-ui-react";


class TripReport extends React.Component {
    markdown_filepath;
    state = {
        markdown: ""
    }

    componentDidMount() {
      fetch(this.props.markdown_filepath)
        .then((r) => r.text())
        .then(markdown  => {
          this.setState({markdown:markdown})
        })
    }

    render(){
        return <Container>
            <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
        </Container>
    }
}

export default TripReport

