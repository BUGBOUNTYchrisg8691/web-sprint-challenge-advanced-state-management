import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import * as actions from "./../store/actions";
import { BASE_URL } from "./../constants";

function SmurfForm() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const error = useSelector((state) => state.error);

  const postSmurfs = (smurf) => (dispatch) => {
    dispatch(actions.startPost());
    axios
      .post(BASE_URL, smurf)
      .then((res) => {
        dispatch(actions.postSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actions.postFailure(err.message));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSmurf = {
      ...form,
      height: `${form.height}cm`,
      age: Number(form.age),
    };
    dispatch(postSmurfs(newSmurf));
    dispatch(actions.clearForm());
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <div>`${error}`</div>}
      <label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => dispatch(actions.onChange(e))}
        />
      </label>
      <label>
        Age
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={(e) => dispatch(actions.onChange(e))}
        />
      </label>
      <label>
        Height
        <input
          type="text"
          name="height"
          value={form.height}
          onChange={(e) => dispatch(actions.onChange(e))}
        />
      </label>
      <button>Add Smurf</button>
    </form>
  );
}

export default SmurfForm;
