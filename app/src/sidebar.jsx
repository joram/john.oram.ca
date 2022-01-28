import {Accordion, Icon, Image, Menu, Sidebar as SemanticSidebar} from "semantic-ui-react";
import React from "react";
import profile from "./static/profile.jpg"
import {Link} from "react-router-dom";

function SidebarAccordianSection(props){
    let {activeTitle, icon, title, handleClick} = props
    let active = activeTitle === title

    return <>
        <Accordion.Title
            active={active}
            title={title}
            onClick={handleClick}
        >
            <div style={{color:"#fff"}}>
                <Icon name={icon}/>
                <span>{props.title}</span>
                <Icon name='dropdown'/>
            </div>
        </Accordion.Title>
        <Accordion.Content active={active}>
            {props.children}
        </Accordion.Content>
    </>
}

class Sidebar extends React.Component {
    state = { activeTitle: "" }

    handleClick(e, titleProps) {
        const {title} = titleProps
        const {activeTitle} = this.state
        const newTitle = activeTitle === title ? "" : title
        this.setState({activeTitle: newTitle})
    }

    render(){
        let { activeTitle } = this.state
        return <SemanticSidebar visible animation="push" style={{background: "#1b1c1d", width:"200px", height:"100vh"}}>

            {/* Headshot/home link */}
            <Link to="/">
                <h2 style={{textAlign:"center"}}>
                    <div style={{color:"#fff"}}>
                        <br/>
                        <Icon name="user"/>
                        <span>John Oram</span>
                    </div>

                </h2>
                <Image src={profile} size='small' circular centered/>
                 <br/>
            </Link>

            <Accordion>

                <SidebarAccordianSection
                    icon="newspaper outline"
                    title="Work History"
                    activeTitle={activeTitle}
                    handleClick={this.handleClick.bind(this)}
                >
                    <Menu inverted style={{width:"auto"}} vertical>
                        <SidebarLink url="/work/certn" text="2020 - Certn"/>
                        <SidebarLink url="/work/tutela" text="2019 - Tutela"/>
                        <SidebarLink url="/work/sendwithus" text="2016 - Sendwithus"/>
                        <SidebarLink url="/work/socoloco" text="2012 - Socoloco"/>
                    </Menu>
                </SidebarAccordianSection>

                <SidebarAccordianSection
                    icon="lab"
                    title="Side Projects"
                    activeTitle={activeTitle}
                    handleClick={this.handleClick.bind(this)}
                >
                    <Menu inverted style={{width:"auto"}} vertical>
                        <SidebarLink url="/project/distillery" text="Distillery"/>
                        <SidebarLink url="/project/moistlywet" text="Moistlywet"/>
                        <SidebarLink url="/project/triptracks" text="Triptracks"/>
                        <SidebarLink url="/project/recipes" text="Recipes"/>
                        <SidebarLink url="/project/whatisthisapictureof" text="Whatisthisapictureof"/>
                    </Menu>
                </SidebarAccordianSection>

                <SidebarAccordianSection
                    icon="book"
                    title="Trip Reports"
                    activeTitle={activeTitle}
                    handleClick={this.handleClick.bind(this)}
                >
                    <Menu inverted style={{width:"auto"}} vertical>
                        <SidebarLink url="/trip/elkhorn" text="2021 - Elkhorn Mountain"/>
                        <SidebarLink url="/trip/warden_victoria" text="2021 - Warden & Victoria"/>
                        <SidebarLink url="/trip/ast" text="2021 - AST- 1"/>
                        <SidebarLink url="/trip/5040" text="2022 - 5040 Peak"/>
                    </Menu>
                </SidebarAccordianSection>

                <SidebarAccordianSection
                    icon="video"
                    title="Videos"
                    activeTitle={activeTitle}
                    handleClick={this.handleClick.bind(this)}
                >
                    <Menu  inverted style={{width:"auto"}} vertical>
                        <SidebarExternalLink url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/dumplings.mp4" text="Dumplings"/>
                        <SidebarExternalMultiLink
                            text="skiing Fernwood"
                            url1="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/GOPR6139.MP4"
                            url2="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/GOPR6140.MP4"
                            url3="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/GOPR6141.MP4"
                        />
                        <SidebarExternalLink url="https://s3.us-west-2.amazonaws.com/john.oram.ca/videos/GOPR5653+-+john.MP4" text="Goldstream Tressel"/>
                    </Menu>
                </SidebarAccordianSection>

            </Accordion>
    </SemanticSidebar>
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

export default Sidebar;
