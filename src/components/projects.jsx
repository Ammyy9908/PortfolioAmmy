import React from "react"
import Box from "./box"

const Projects = () =>
{
    return <div>
       <div className="hero is-black is-medium"><br/><br/>
       <h1 className="has-text-centered title is-size-1" id="projects">Projects</h1>
                <div className="hero-body">
                    <Box image="ipad.png" title="TrueWalls" desc="This is an Image Gallery built in PHP & MYSQL" url="https://truewallssammy.000webhostapp.com/"/>
                    <Box image="mac.png" title="PhonePe Redesign" desc="This is PhonePe website Redesign made with Bulma CSS Framework." url="https://pythonkiller990.github.io/PhonePe/"/>
                    <Box image="mac2.png" title="Splash Extensiom" desc="THis is an Google Chrome Extension, a personal dashboard Like Momentum Extension." url="https://github.com/pythonKiller990/Splash"/>
                    <Box image="mac3.png" title="Weather App" desc="This is a GUI Signle window GUI Weather application made with Python3" url="https://github.com/Ammyy9908/WeatherGUI"/>
                </div>
            </div>
            </div>
}

export default Projects;