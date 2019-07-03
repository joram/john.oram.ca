import {Icon, Menu, Sidebar as SemanticSidebar} from "semantic-ui-react";
import React from "react";
import {Image} from "semantic-ui-react";
import profile from "./static/profile.jpg"
import { Link } from "react-router-dom";


class Sidebar extends React.Component {

    render(){
        return <>
            <SemanticSidebar as={Menu} animation='overlay' icon='labeled' inverted vertical width='thin' visible>

                <Menu.Item>
                    <Link to="/">
                        <SidebarSection icon="chess pawn" title="About Me" />
                        <br/>
                        <Image src={profile} size='medium' circular />
                    </Link>
                </Menu.Item>

                <Menu.Item>
                    <SidebarSection icon="lab" title="Side Projects" />
                    <Menu inverted vertical style={{width:"auto"}}>
                        <Link to="/project/distillery"><Menu.Item as='a'>Distillery</Menu.Item></Link>
                        <Link to="/project/moistlywet"><Menu.Item as='a'>Moistlywet</Menu.Item></Link>
                        <Link to="/project/triptracks"><Menu.Item as='a'>Triptracks</Menu.Item></Link>
                    </Menu>
                </Menu.Item>

                <Menu.Item>
                    <SidebarSection icon="newspaper outline" title="Work History" />
                    <Menu inverted vertical style={{width:"auto"}}>
                        <Link to="/work/sendwithus"><Menu.Item as='a'>Sendwithus</Menu.Item></Link>
                        <Link to="/work/socoloco"><Menu.Item as='a'>Socoloco</Menu.Item></Link>
                    </Menu>
                </Menu.Item>

            </SemanticSidebar>
        </>
    }
}


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


export default Sidebar;