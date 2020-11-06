import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  POSTING_SMURF_START,
  POSTING_SMURF_FAILURE,
  ONCHANGE,
  CLEAR_FORM,
  POSTING_SMURF_SUCCESS,
} from "./../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: "",
  form: {
    name: "",
    height: "",
    age: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case POSTING_SMURF_START:
      return {
        ...state,
        isPosting: true,
      };
    case POSTING_SMURF_SUCCESS:
      return {
        ...state,
        isPosting: false,
      };
    case POSTING_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPosting: false,
      };
    case ONCHANGE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    case CLEAR_FORM:
      return {
        ...state,
        form: initialState.form,
      };
    default:
      return state;
  }
};
