import {Icon, Menu, Sidebar} from "semantic-ui-react";
import React from "react";
import projects from "./projects";
import {Image} from "semantic-ui-react";
import profile from "./static/profile.jpg"

class SidebarSection extends React.Component {
    render(){
        return <div >
                <Icon name={this.props.icon}  style={{float: "center"}}/>
                <span style={{float: "center"}}>
                    {this.props.title}
                </span>
        </div>
    }
}

class HomepageSidebar extends React.Component {

    change_url(e){
        let path = e.target.getAttribute("path");
        window.history.pushState('page2', 'Title', path);
    }

    render(){
        let projectItems = [];
        projects.forEach(function(project){
            projectItems.push(<Menu.Item as='a' key={project.name}>{project.name}</Menu.Item>)
        });

        return <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical width='thin' visible>
          <Menu.Item as='a' onClick={this.change_url.bind(this)} path={"/"}>
            <SidebarSection icon="chess pawn" title="About Me" />
            <br/>
            <Image src={profile} size='medium' circular />
          </Menu.Item>

          <Menu.Item>
            <SidebarSection icon="newspaper outline" title="Work History" />
            <Menu inverted vertical style={{width:"auto"}}>
              <Menu.Item as='a' onClick={this.change_url.bind(this)} path={"/work/sendwithus"} >Sendwithus</Menu.Item>
              <Menu.Item as='a' onClick={this.change_url.bind(this)} path={"/work/socoloco"} >Socoloco</Menu.Item>
            </Menu>
          </Menu.Item>

          <Menu.Item>
            <SidebarSection icon="lab" title="Side Projects" />
            <Menu inverted vertical style={{width:"auto"}}>
              {projectItems}
            </Menu>
          </Menu.Item>
        </Sidebar>
    }
}

export default HomepageSidebar;