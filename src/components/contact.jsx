import React from "react"


const style1={"margin": "100px auto","fontFamily": "'Kaushan Script'","fontSize": "5em"};
const style2={"fontWeight": "100","fontSize": "3em"};
const style3={"margin": "25px auto"};
const style4={"marginRight": "10px auto"};
const Contact =()=>
{
    return <div>
        <div class="hero is-black">
                <div class="hero-body has-text-centered">
                    <h1 class="title" style={style1} id="contact">Contact</h1>
                    <h1 class="title" style={style2}>I can help.</h1>
                    <h2 class="subtitle has-text-primary" style={style3} id="work">I’m currently available for web work.</h2>
                    <h3 class="subtitle">If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</h3>
                    <a href="mailto:sb78639@gmail.com" class="button is-large is-primary has-text-white" id="mail"><i class="fas fa-envelope" style={style4} id="mailicon"></i> Message Me</a>
                </div>
    </div>
    </div>
}

export default Contact;