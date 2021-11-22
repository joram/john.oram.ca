import React from "react";
import ReactMarkdown from 'react-markdown'
import {Container} from "semantic-ui-react";


class TripReport extends React.Component {
    state = {
        markdown: ""
    }

    constructor(props) {
      fetch(props.filepath)
        .then((r) => r.text())
        .then(markdown  => {
            console.log(props.filepath)
          this.setState({markdown:markdown})
        })
      super(props);
    }

    render(){
        return <Container>
            <ReactMarkdown >{this.state.markdown}</ReactMarkdown>
        </Container>
    }
}

export default TripReport

