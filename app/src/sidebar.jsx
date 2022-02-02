import {Dropdown, Icon, Image, Menu} from "semantic-ui-react";
import React from "react";
import profile from "./static/profile.jpg"
import {Link} from "react-router-dom";

function SidebarAccordianSection(props) {
    let {title} = props
    return <Menu inverted>
        <Dropdown item text={title} size="tiny">
            <Dropdown.Menu>{props.children}</Dropdown.Menu>
        </Dropdown>
    </Menu>
}

class Sidebar extends React.Component {
    state = {
        activeTitle: "",
        trip_report_links: [],
    }

    componentDidMount() {
        this.trip_report_links()
    }

    handleClick(e, titleProps) {
        const {title} = titleProps
        const {activeTitle} = this.state
        const newTitle = activeTitle === title ? "" : title
        this.setState({activeTitle: newTitle})
    }

    trip_report_links(){

        fetch("/trip_reports/list.json").then(response => response.json()).then(trip_reports_json => {
            let trip_report_links = []
            trip_reports_json.filenames.forEach(filename => {
                let [year, pretty_name] = filename.replace(".md", "").split("::", 2)
                let slug = pretty_name.replaceAll(" ", "_")
                trip_report_links.push(<Dropdown.Item as={Link} to={"/trip/"+year+"/"+slug} key={filename}>{pretty_name}</Dropdown.Item>)
            })

            let state = this.state
            state.trip_report_links = trip_report_links
            this.setState(state)
        })
    }

    render(){
        let { isMobile } = this.props

        let style = {
            background: "#1b1c1d",
            width:"130px",
            height:"100vh",
        }
        if(isMobile){
            style["width"] = "100%"
            delete style["height"]
        }

        return <div style={style}>

            <Link to="/">
                <h3 style={{textAlign:"center"}}>
                    <div style={{color:"#fff"}}>
                        <br/>
                        <Icon name="user"/>
                        <span>John Oram</span>
                    </div>

                </h3>
                <Image src={profile} size='tiny' circular centered/>
            </Link>

            <Menu inverted vertical={!isMobile} style={{width:"100%"}}>

                <SidebarAccordianSection icon="newspaper outline" title="Work History" isMobile={isMobile}>
                    <Dropdown.Item as={Link} to="/work/certn">2020 - Certn</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/work/tutela">2019 - Tutela</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/work/sendwithus">2016 - Sendwithus</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/work/socoloco">2012 - Socoloco</Dropdown.Item>
                </SidebarAccordianSection>

                <SidebarAccordianSection icon="lab" title="Side Projects" isMobile={isMobile}>
                    <Dropdown.Item as={Link} to="/project/distillery">Distillery</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/project/moistlywet">Moistlywet</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/project/triptracks">Triptracks</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/project/recipes">Recipes</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/project/whatisthisapictureof">Whatisthisapictureof</Dropdown.Item>
                </SidebarAccordianSection>

                <SidebarAccordianSection icon="book" title="Trip Reports" isMobile={isMobile}>
                    {this.state.trip_report_links}
                    {/*<Dropdown.Header>2021</Dropdown.Header>*/}
                    {/*<Dropdown.Item as={Link} to="/trip/elkhorn">Elkhorn Mountain</Dropdown.Item>*/}
                    {/*<Dropdown.Item as={Link} to="/trip/warden_victoria">Warden & Victoria</Dropdown.Item>*/}
                    {/*<Dropdown.Item as={Link} to="/trip/ast">AST-1</Dropdown.Item>*/}
                    {/*<Dropdown.Header>2022</Dropdown.Header>*/}
                    {/*<Dropdown.Item as={Link} to="/trip/5040">5040 Peak</Dropdown.Item>*/}
                </SidebarAccordianSection>

            </Menu>
        </div>
    }
}

export default Sidebar;
