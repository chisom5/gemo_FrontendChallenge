import HOME_CONSTANT from "./constant";
import {
  makeGetRequest,
} from "./api";

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
export const fetchAllScans = (history, storgeIviteId) => {
  const actionType = "allScans";
  return async (dispatch) => {
    try {
      dispatch(homeActionsRequested(actionType));
      const res = await makeGetRequest(
        `/scans` 
      );

      if (res.status !== 200) {
        dispatch(homeActionsError(actionType, res.data.msg));
      } else {
        console.log(res.data, "res");
        dispatch(homeActionsSuccess(actionType, res.data.data));
      }
    } catch (error) {
      // console.log(error);
      if (error.response) {
        if (error.response.status === 401) {
          history.push(`/?inviteId=${storgeIviteId}`);
          sessionStorage.removeItem("PEP_XX_Token");
        } else {
          return dispatch(
            homeActionsError(actionType, error.response.data.msg)
          );
        }
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
