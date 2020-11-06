import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { postSmurfs, onChange, clearForm } from "./../store/actions";

function SmurfForm() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSmurf = {
      ...form,
      height: `${form.height}cm`,
    };
    dispatch(postSmurfs(newSmurf));
    dispatch(clearForm());
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => dispatch(onChange(e))}
        />
      </label>
      <label>
        Age
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={(e) => dispatch(onChange(e))}
        />
      </label>
      <label>
        Height
        <input
          type="text"
          name="height"
          value={form.height}
          onChange={(e) => dispatch(onChange(e))}
        />
      </label>
      <button>Add Smurf</button>
    </form>
  );
}

export default SmurfForm;
