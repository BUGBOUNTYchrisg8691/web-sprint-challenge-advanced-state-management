import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSmurfs } from "./../store/actions";

import Smurf from "./Smurf";

function SmurfList() {
  const smurfs = useSelector((state) => state.smurfs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, []);

  return (
    <div>
      {smurfs.map((smurf) => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  );
}

export default SmurfList;
