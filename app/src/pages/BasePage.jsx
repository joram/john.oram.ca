import React from "react";
import {Header, HeaderContent, Divider, Container} from "semantic-ui-react";

class BasePage extends React.Component {

  render(){
    return (<>

      <Divider horizontal inverted>
        <Header> {this.props.title} </Header>
      </Divider>

      {this.props.subtitle}

      <Container style={{maxWidth:"600px"}}>
        <Container textAlign="left">
          {this.props.children}
        </Container>
      </Container>
    </>)
  }
}

export default BasePage