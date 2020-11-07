import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "./../store/actions";
import { BASE_URL } from "./../constants";

import Smurf from "./Smurf";

function SmurfList() {
  const smurfs = useSelector((state) => state.smurfs);
  const dispatch = useDispatch();

  const fetchSmurfs = () => (dispatch) => {
    dispatch(actions.startFetch());
    axios
      .get(BASE_URL)
      .then((res) => {
        dispatch(actions.fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actions.fetchFailure(err.message));
      });
  };

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, []);

  return (
    <div>
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}

export default SmurfList;
