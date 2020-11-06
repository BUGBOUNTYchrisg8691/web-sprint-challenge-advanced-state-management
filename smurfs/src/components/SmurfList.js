import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSmurfs } from "./../store/actions";

import Smurf from "./Smurf";

function SmurfList() {
  const smurfs = useSelector((state) => state.smurfs);
  const dispatch = useDispatch();
  const isPosting = useSelector((state) => state.isPosting);

  useEffect(() => {
    console.log(isPosting);
    dispatch(fetchSmurfs());
  }, [isPosting]);

  return (
    <div>
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}

export default SmurfList;
