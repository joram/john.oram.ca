import {Icon, Menu, Image} from "semantic-ui-react";
import React, {CSSProperties, useState} from "react";
import {Link} from "react-router-dom";

function Sidebar({isMobile}: {isMobile: boolean}) {
    let [activeItem, setActiveItem] = useState("search")
    let [showSidebar, setShowSidebar] = useState(!isMobile)

    function handleItemClick(e: any, {name}: any){
        setActiveItem(name)
    }

    function MenuItem({path, slug, label}: {path?: string, slug?: string, label: string}){
        if(!slug) slug = label
        if(!path) path = "/"
        const fullPath = `${path}${slug}`


        return <Menu.Item
            as={Link}
            to={fullPath}
            name={slug}
            active={activeItem === slug}
            onClick={handleItemClick}
        >
            {label}
        </Menu.Item>
    }

    const style = {
        display: showSidebar ? "block" : "none",
        backgroundColor:"#1b1c1d",
        overflowX:"hidden",
        flex:"1",
    }

    return <span id="nav">
        <Link to="/">
            <h3 style={{textAlign:"center"}}>
                <div>
                    <br/>
                    <Icon name="user"/>
                    <span>John Oram</span>
                </div>
            </h3>
            <Image src="/static/profile.jpg" size='tiny' circular centered/>
        </Link>
        <Icon style={{
            marginLeft:"10px",
            marginBottom:"10px",
            display: isMobile ? "block" : "none",
          }}
          name="bars"
          size="large"
          color="grey"
          onClick={() => setShowSidebar(!showSidebar)}
        />

        <div style={style as CSSProperties} >
            <Menu borderless compact={!isMobile} vertical inverted pointing>
            <Menu.Item>
                Work
                <Menu.Menu>
                    <MenuItem path="/work/" slug="socoloco" label="Socoloco" />
                    <MenuItem path="/work/" slug="sendwithus" label="Sendwithus" />
                    <MenuItem path="/work/" slug="tutela" label="Tutela" />
                    <MenuItem path="/work/" slug="certn" label="Certn" />
                    <MenuItem path="/work/" slug="intlabs" label="Intlabs" />
                    <MenuItem path="/work/" slug="all_roles" label="All Roles" />
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Work Opinions</Menu.Header>
                <Menu.Menu>
                    <MenuItem path="/opinion/" slug="seo" label="SEO" />
                    <MenuItem path="/opinion/" slug="guiding_principals" label="Guiding Principals" />
                    <MenuItem path="/opinion/" slug="work_environment" label="Work Environment" />
                </Menu.Menu>
            </Menu.Item>


            <Menu.Item>
                Projects
                <Menu.Menu>
                    <MenuItem path="project/" slug="distillery" label="Distillery" />
                    <MenuItem path="project/" slug="moistlywet" label="Moistlywet" />
                    <MenuItem path="project/" slug="triptracks" label="Triptracks" />
                    <MenuItem path="project/" slug="recipes" label="Recipes" />
                    {/*<MenuItem path="project/" slug="whatisthisapictureof" label="What is this a picture of" />*/}
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Courses</Menu.Header>
                <Menu.Menu>
                    <MenuItem path={"/course/"} slug="2021/AST1" label="AST1" />
                    <MenuItem path={"/course/"} slug="2024/Wilderness_First_Aid" label="Wilderness First Aid" />
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Trips</Menu.Header>
                <Menu.Menu>
                    <MenuItem path="/trip/" slug="2014/Bugaboos" label='Bugaboos (2014)' />
                    <MenuItem path="/trip/" slug="2016/Bugaboos" label='Bugaboos (2016)' />
                    <MenuItem path="/trip/" slug="2016/Maniacs_Temptation" label='Maniacs Temptation' />
                    <MenuItem path="/trip/" slug="2021/Elkhorn" label='Elkhorn' />
                    <MenuItem path="/trip/" slug="2021/Red_Pillar" label='Red Pillar' />
                    <MenuItem path="/trip/" slug="2021/Warden_and_Victoria_Peak" label='Warden and Victoria Peak' />
                    <MenuItem path="/trip/" slug="2022/5040_Peak" label='5040 Peak (2022)' />
                    <MenuItem path="/trip/" slug="2022/Bedwell_Lake" label='Bedwell Lake' />
                    <MenuItem path="/trip/" slug="2022/Marble_Meadows" label='Marble Meadows' />
                    <MenuItem path="/trip/" slug="2023/Elfin_Lakes" label='Elfin Lakes' />
                    <MenuItem path="/trip/" slug="2023/Rainier" label='Rainier' />
                    <MenuItem path="/trip/" slug="2023/Redwall" label='Redwall' />
                    <MenuItem path="/trip/" slug="2024/5040_Peak" label='5040 Peak (2024)' />
                </Menu.Menu>
            </Menu.Item>
        </Menu>
        </div>
    </span>

}

export default Sidebar