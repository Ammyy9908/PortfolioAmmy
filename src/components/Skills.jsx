import React from "react"
import SkillCard from "./skill_card"

const Skills = () =>
{
    return <div>
         <div className="hero is-black is-fullheight">
             <h1 className="has-text-centered has-text-white title" id="skills">Skills</h1>
                <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <SkillCard name="HTML5" icon="html5.png" level="65%"/>
                        </div>
                        <div className="column">
                            <SkillCard name="CSS3" icon="css.png" level="45%"/>
                        </div>
                        <div className="column">
                            <SkillCard name="Javascript" icon="javascript.png" level="65%"/>
                        </div>
                        <div className="column">
                            <SkillCard name="Jquery" level="80%"/>
                        </div>
                        
                    </div>
                    
                    <div className="columns">
                        <div className="column">
                            <SkillCard name="Ajax" icon="ajax.png" level="75%"/>
                        </div>
                        <div className="column">
                            <SkillCard name="Python3" icon="python.png" level="65%"/>
                        </div>
                        <div className="column">
                            <SkillCard name="Github" icon="github.png" level="65%"/>
                        </div>
                        <div className="column">
                            <SkillCard name="React" icon="react.png" level="55%"/>
                        </div>
                        
                    </div>
                   
                </div>
                </div>
            </div>
    </div>
}

export default Skills;

