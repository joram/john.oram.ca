import {Icon, Menu, Sidebar as SemanticSidebar} from "semantic-ui-react";
import React from "react";
import {Image} from "semantic-ui-react";
import profile from "./static/profile.jpg"
import { Link } from "react-router-dom";


class Sidebar extends React.Component {

    render(){
        return <>
            <SemanticSidebar as={Menu} icon='labeled' inverted vertical width='thin' visible>

                <Menu.Item>
                    <Link to="/">
                        <SidebarSection icon="user" title="Profile" />
                        <br/>
                        <Image src={profile} size='large' circular />
                    </Link>
                </Menu.Item>

                <Menu.Item>
                    <SidebarSection icon="lab" title="Side Projects" />
                    <Menu inverted vertical style={{width:"auto"}}>
                        <Link to="/project/distillery"><Menu.Item> Distillery </Menu.Item></Link>
                        <Link to="/project/moistlywet"><Menu.Item> Moistlywet </Menu.Item></Link>
                        <Link to="/project/triptracks"><Menu.Item> Triptracks </Menu.Item></Link>
                    </Menu>
                </Menu.Item>

                <Menu.Item>
                    <SidebarSection icon="newspaper outline" title="Work History" />
                    <Menu inverted vertical style={{width:"auto"}}>
                        <Link to="/work/tutela"><Menu.Item>     Tutela     </Menu.Item></Link>
                        <Link to="/work/sendwithus"><Menu.Item> Sendwithus </Menu.Item></Link>
                        <Link to="/work/socoloco"><Menu.Item>   Socoloco   </Menu.Item></Link>
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
