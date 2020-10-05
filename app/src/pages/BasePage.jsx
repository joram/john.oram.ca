import React from "react";
import {Header, HeaderContent, Divider, Container} from "semantic-ui-react";

class BasePage extends React.Component {

  render(){
    return (<div id="aboutme">

      <Divider horizontal inverted>
        <Header> {this.props.title} </Header>
      </Divider>

      {this.props.subtitle}

      <HeaderContent style={{maxWidth:"600px"}}>
        <Container textAlign="left">
          {this.props.children}
        </Container>
      </HeaderContent>
    </div>)
  }
}

export default BasePage