import {Button, Icon, Image, Menu, Sidebar as SemanticSidebar} from "semantic-ui-react";
import React from "react";
import profile from "./static/profile.jpg"
import {Link} from "react-router-dom";


class Sidebar extends React.Component {

    state = {
        mode: "professional"
    }

    setMode(mode){
        let state = this.state
        state.mode = mode
        this.setState(state)
    }
    render(){

        let professional_menus = <>
            <Menu.Item>
                <SidebarSection icon="lab" title="Side Projects"  style={{textAlign:"left"}} />
                <Menu inverted vertical style={{width:"auto"}}>
                    <SidebarLink url="/project/distillery" text="Distillery"/>
                    <SidebarLink url="/project/moistlywet" text="Moistlywet"/>
                    <SidebarLink url="/project/triptracks" text="Triptracks"/>
                    <SidebarLink url="/project/recipes" text="Recipes"/>
                    <SidebarLink url="/project/whatisthisapictureof" text="Whatisthisapictureof"/>
                </Menu>
            </Menu.Item>

            <Menu.Item>
                <SidebarSection icon="newspaper outline" title="Work History"  style={{textAlign:"left"}}  />
                <Menu inverted vertical style={{width:"auto"}} >
                    <SidebarLink url="/work/certn" text="2020 - Certn"/>
                    <SidebarLink url="/work/tutela" text="2019 - Tutela"/>
                    <SidebarLink url="/work/sendwithus" text="2016 - Sendwithus"/>
                    <SidebarLink url="/work/socoloco" text="2012 - Socoloco"/>
                </Menu>
            </Menu.Item>
        </>

        let personal_menus = <>
            <Menu.Item>
                <SidebarSection icon="book" title="Trip Reports"  style={{textAlign:"left"}} />
                <Menu inverted vertical style={{width:"auto"}}>
                    <SidebarLink url="/trip/elkhorn" text="Elkhorn Mountain"/>
                    <SidebarLink url="/trip/warden_victoria" text="Warden & Victoria Peaks"/>
                    <SidebarLink url="/trip/ast1" text="AST1"/>
                    <SidebarLink url="/trip/5040" text="5040 Peak"/>
                </Menu>
            </Menu.Item>

            <Menu.Item>
                <SidebarSection icon="video" title="Videos"  style={{textAlign:"left"}} />
                <Menu inverted vertical style={{width:"auto"}}>
                    <SidebarExternalLink url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/dumplings.mp4" text="Dumplings"/>
                    <SidebarExternalMultiLink
                        text="skiing Fernwood"
                        url1="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/GOPR6139.MP4"
                        url2="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/GOPR6140.MP4"
                        url3="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/GOPR6141.MP4"
                    />
                    <SidebarExternalLink url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/GOPR5653+-+john.MP4" text="Goldstream Tressel"/>
                </Menu>
            </Menu.Item>
        </>

        let menus = <></>
        if(this.state.mode==="professional"){ menus = professional_menus }
        if(this.state.mode==="personal"){ menus = personal_menus }

        return <>
            <SemanticSidebar as={Menu} icon='labeled' inverted vertical visible animation="push">

                <Menu.Item>
                    <Link to="/">
                        <h2><SidebarSection icon="user" title="John Oram" /></h2>
                        <br/>
                        <Image src={profile} size='small' circular centered/>
                    </Link>
                </Menu.Item>

                <Button.Group vertical inverted>
                    <Button active={this.state.mode==="professional"} onClick={() => {this.setMode("professional")}}>Professional</Button>
                    <Button active={this.state.mode==="personal"} onClick={() => {this.setMode("personal")}}>Personal</Button>
                </Button.Group>
                <br/>
                <br/>

                {menus}

            </SemanticSidebar>
        </>
    }
}

class SidebarExternalLink extends React.Component {
    render() {
        return <a href={this.props.url}>
            <Menu.Item style={{textAlign:"left"}}>
                {this.props.text}
            </Menu.Item>
        </a>
    }
}
class SidebarExternalMultiLink extends React.Component {
    render() {
        return <Menu.Item style={{textAlign:"left"}}>
           <a href={this.props.url1}>{this.props.text} (1)</a>
           <a href={this.props.url2}>(2)</a>
           <a href={this.props.url3}>(3)</a>
        </Menu.Item>
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
        return <div style={this.props.style} >
                <Icon name={this.props.icon}  style={{float: "center"}}/>
                <span style={{float: "center"}}>
                    {this.props.title}
                </span>
        </div>
    }
}


export default Sidebar;
