import React from "react"

const styles={"margin": "50px auto","padding": "10px"}
const Footer = () =>
{
    return <div><div class="hero is-black" id="footer">
        <div class="hero-body">
                <div class="columns has-text-centered" style={styles}>
                            <div class="column">
                               
                                <ul class="social">
                                    <li><a href="https://codepen.io/AmmySumit"><i className="fab fa-codepen has-text-white"></i></a></li>
                                    <li><a href="https://www.facebook.com/me.hack.sumit"><i className="fab fa-facebook has-text-white"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/sumit-kumar-220100194/"><i className="fab fa-linkedin has-text-white"></i></a></li>
                                    </ul>
                                    <br/>
                                <p id="year"></p>
                            </div>
                </div>
        </div>
    </div>
        
    </div>
}
export default Footer;