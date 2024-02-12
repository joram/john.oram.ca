import React from "react";
import {Container, Divider, Header} from "semantic-ui-react";

function BasePage({title, subtitle, children}: {title: any, subtitle?: any, children?: any}){
  return <>

    <Divider horizontal inverted>
      <Header> {title} </Header>
    </Divider>

    {subtitle}

    <Container style={{maxWidth:"600px"}}>
      <Container textAlign="left">
        {children}
      </Container>
    </Container>
  </>
}

export default BasePage
