import React from "react"
import Navbar from "./navbar"


const user_image="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/78607726_860942007684625_5799796198680297472_n.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=rnKzAoUlNAUAX-MrHuE&_nc_ht=scontent-maa2-1.xx&oh=db6fe4c7749615d49820ca12b365a6a1&oe=5E963F3B";
const user_name="Sumit";
const profession="Web Developer"
const dec="I'm a web Developer/web Designer as a Student based in Bangalore India.Currently Studying Information Science & Engineering at Sir.MVIT Bangalore.I have a passion to develope websites for Desktop and mobile devices.";
const desc_styles={"textAlign":"center"};
const Header = () =>
{
    return <div>
        <div>

            <div className="hero is-black profile is-fullheight">
                <Navbar/>
                <div className="hero-body">
                        <div className="container">
                            <div className="columns has-text-centered">
                                <div className="column">
                                    <center><figure className="image is-128x128">
                                    <img src={user_image} alt="" className="is-rounded"/>
                                    </figure></center>
                                
                                
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                <h1 className="has-text-centered title user_name">{user_name}</h1>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                <h1 className="has-text-centered title profession">{profession}</h1>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                <h1 className="has-text-centered title desc" style={desc_styles}>{dec}</h1>
                                </div>
                            </div>
                            
                        </div>
                </div>
            </div>
            
        </div>
    </div>
}

export default Header;