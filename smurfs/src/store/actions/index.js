import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  POSTING_SMURF_START,
  POSTING_SMURF_FAILURE,
  ONCHANGE,
  CLEAR_FORM,
  POSTING_SMURF_SUCCESS,
  BASE_URL,
} from "./../../constants";

export function clearForm() {
  return { type: CLEAR_FORM };
}

export function onChange(e) {
  return { type: ONCHANGE, payload: e };
}

export function startFetch() {
  return { type: FETCHING_SMURF_START };
}

export function fetchSuccess(payload) {
  return { type: FETCHING_SMURF_SUCCESS, payload: payload };
}

export function fetchFailure(payload) {
  return { type: FETCHING_SMURF_FAILURE, payload: payload };
}

export function startPost() {
  return { type: POSTING_SMURF_START };
}

export function postSuccess(payload) {
  return { type: POSTING_SMURF_SUCCESS, payload: payload };
}

export function postFailure(payload) {
  return { type: POSTING_SMURF_FAILURE, payload: payload };
}
