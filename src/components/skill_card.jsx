import React from "react";

const SkillCard=(props)=>{
    return <div><div class="card hoveredcard is-dark">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src={props.icon} alt="Placeholder"/>
          </figure>
        </div>
        <div class="media-content">
<p class="title is-4 has-text-black">{props.name}</p>
          
        </div>
      </div>
  
      <div class="content">
<p className="subtitle has-text-black is-size-1">{props.level}</p>
       
      </div>
    </div>
  </div></div>
}

export default SkillCard;