import HOME_CONSTANT from "./constant";
import axios from "axios";
import baseUrl from "../../../config/baseUrl";

const homeActionsSuccess = (actionType, payload) => ({
  type: HOME_CONSTANT[`${actionType}Success`],
  payload,
});

const homeActionsRequested = (actionType) => ({
  type: HOME_CONSTANT[`${actionType}Requested`],
});

const homeActionsError = (actionType, error) => ({
  type: HOME_CONSTANT[`${actionType}Error`],
  error,
});

// clear error message
export const clearErrorMessage = () => (dispatch) => {
  const actionType = "clearErrorMessage";
  dispatch(homeActionsSuccess(actionType));
};

// clear success message
export const clearSuccessMessage = () => (dispatch) => {
  const actionType = "clearSuccessMessage";
  dispatch(homeActionsSuccess(actionType));
};

// set error
export const handleSetError = (payload) => (dispatch) => {
  const actionType = "setError";
  dispatch(homeActionsSuccess(actionType, payload));
};

// reservtion dashbord top chart data
export const fetchTrendingRepos = (params) => {
  const actionType = "trendingRepos";
  return async (dispatch) => {
    try {
      dispatch(homeActionsRequested(actionType));
      const res = await axios.get(`${baseUrl}/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${params}`)
      if (res.status !== 200) {
        dispatch(homeActionsError(actionType, res.data.msg));
      } else {
        console.log(res.data, "res");
        dispatch(homeActionsSuccess(actionType, res.data));
      }
    } catch (error) {
      if (error.response) {
        return dispatch(homeActionsError(actionType, error.response.data.msg));
      } else if (error.request) {
        // console.log(error.request)
        return dispatch(homeActionsError(actionType, "Network error"));
      } else {
        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};
