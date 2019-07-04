import React from "react";
import {Header, HeaderContent, Divider} from "semantic-ui-react";

class BasePage extends React.Component {

  render(){
    return (<div id="aboutme">

      <Divider horizontal inverted>
        <Header> {this.props.title} </Header>
      </Divider>

      {this.props.subtitle}

      <HeaderContent>
        {this.props.children}
      </HeaderContent>
    </div>)
  }
}

export default BasePage