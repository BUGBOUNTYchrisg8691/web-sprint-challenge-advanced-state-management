import React from "react";

function Smurf(props) {
  return (
    <div className="smurf-card">
      <h2>{props.smurf.name}</h2>
      <div className="details smurf-card-age">
        Age: {props.smurf.age} years old
      </div>
      <div className="details smurf-card-height">
        Height: {props.smurf.height}
      </div>
    </div>
  );
}

export default Smurf;
