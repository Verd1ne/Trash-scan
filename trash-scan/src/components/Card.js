import React from "react";
import CardTemplate from "../images/CardTemplate.png"

export default function Card(props) {
  return (
    <div className="column">
      <div class="card" style={{backgroundImage:`url(${CardTemplate})`}}>
        <div class="card-content card-height">
          <div class="media">
            <div class="media-content has-text-centered">
              <h2 class="is-size-3 has-text-weight-bold">{props.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
