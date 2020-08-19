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
                        <SidebarSection icon="user" title="John Oram" />
                        <br/>
                        <Image src={profile} size='large' circular />
                    </Link>
                </Menu.Item>

                <Menu.Item>
                    <SidebarSection icon="lab" title="Side Projects"  style={{textAlign:"left"}} />
                    <Menu inverted vertical style={{width:"auto"}}>
                        <SidebarLink url="/project/distillery" text="Distillery"/>
                        <SidebarLink url="/project/moistlywet" text="Moistlywet"/>
                        <SidebarLink url="/project/triptracks" text="Triptracks"/>
                        <SidebarLink url="/project/whatisthisapictureof" text="Whatisthisapictureof"/>
                    </Menu>
                </Menu.Item>

                <Menu.Item>
                    <SidebarSection icon="newspaper outline" title="Work History" />
                    <Menu inverted vertical style={{width:"auto"}} >
                        <SidebarLink url="/work/certn" text="2020 - Certn"/>
                        <SidebarLink url="/work/tutela" text="2019 - Tutela"/>
                        <SidebarLink url="/work/sendwithus" text="2016 - Sendwithus"/>
                        <SidebarLink url="/work/socoloco" text="2012 - Socoloco"/>
                    </Menu>
                </Menu.Item>

            </SemanticSidebar>
        </>
    }
}


class SidebarLink extends React.Component {
    render() {
        return <Link to={this.props.url}>
            <Menu.Item style={{textAlign:"left"}}>
                {this.props.text}
            </Menu.Item>
        </Link>
    }
}
class SidebarSection extends React.Component {
    render(){
        return <div  style={{textAlign:"left"}}>
                <Icon name={this.props.icon}  style={{float: "center"}}/>
                <span style={{float: "center"}}>
                    {this.props.title}
                </span>
        </div>
    }
}


export default Sidebar;
