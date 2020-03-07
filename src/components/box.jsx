import React from "react"

const image_style={"width":"400px","height":"400px"}

const Box =(props)=>
{
    return <div>
        <div className="columns has-text-centered">
                        <div className="column">
                        <figure className="image">
                                            <img src={props.image} alt=""/>
                        </figure>
                            
                        </div>
                        <div className="column">
                            <h1 className="title is-size-1">{props.title}</h1>
<h3 className="subtitle is-size-3 has-text-centered">{props.desc}</h3>
                            <a href={props.url} className="button is-primary is-rounded is-large">Visit</a>
                        </div>
        </div>
    </div>
}

export default Box;