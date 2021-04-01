import {
  clearErrorMessage,
  clearSuccessMessage,
  fetchAllScans
} from "../reduxFunctions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeComponent from "../components";

const mapStateToProps = (state) => ({
  error: state.globalReducer.error || state.homeReducer.error,
  success: state.globalReducer.success || state.homeReducer.success,
  // recentScanData: state.homeReducer.recentScanData,
  // isScanning: state.homeReducer.isScanning
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearErrorMessage,
      clearSuccessMessage,
      fetchAllScans
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
