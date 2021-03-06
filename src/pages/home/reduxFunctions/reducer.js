import update from "immutability-helper";
import HOME_CONSTANT from "./constant";

const initialState = {
  success: null,
  error: null,
  isFetching: false,
  trendingReposArr: null,
};

const requestingHome = (state, loading) =>
  update(state, {
    [loading]: {
      $set: true,
    },
  });

const handleFetchedScanned = (state, { payload }) =>
  update(state, {
    trendingReposArr: {
      $set: payload,
    },
    isFetching: {
      $set: false,
    },
  });

const setErrorAction = (state, { payload }) =>
  update(state, {
    error: {
      $set: payload,
    },
  });

const handleError = (state, { error }) => {
  return update(state, {
    isFetching: {
      $set: false,
    },
    error: {
      $set: error,
    },
  });
};

const clearError = (state) => {
  return update(state, {
    error: {
      $set: null,
    },
  });
};

const clearSuccessMessage = (state) =>
  update(state, {
    success: {
      $set: null,
    },
  });

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_CONSTANT.trendingReposRequested:
      return requestingHome(state, "isFetching");
    case HOME_CONSTANT.trendingReposError:
      return handleError(state, action);
    case HOME_CONSTANT.trendingReposSuccess:
      return handleFetchedScanned(state, action);

    case HOME_CONSTANT.setErrorSuccess:
      return setErrorAction(state, action);

    case HOME_CONSTANT.clearErrorMessageSuccess:
      return clearError(state, action);
    case HOME_CONSTANT.clearSuccessMessageSuccess:
      return clearSuccessMessage(state, action);

    default:
      return state;
  }
};
export default homeReducer;
