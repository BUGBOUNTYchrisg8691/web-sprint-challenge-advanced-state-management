import React from "react";

function Smurf(props) {
  return (
    <div>
      {props.smurf.name}
      {props.smurf.age} years old
      {props.smurf.height}
    </div>
  );
}

export default Smurf;
