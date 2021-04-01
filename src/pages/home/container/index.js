import {
  clearErrorMessage,
  clearSuccessMessage,
  fetchTrendingRepos
} from "../reduxFunctions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeComponent from "../components";

const mapStateToProps = (state) => ({
  error:  state.homeReducer.error,
  success:  state.homeReducer.success,
  trendingReposArr: state.homeReducer.trendingReposArr
 
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearErrorMessage,
      clearSuccessMessage,
      fetchTrendingRepos
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
