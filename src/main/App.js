import React, { lazy, Suspense, Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Spin, Result, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./App.scss";

const Home = lazy(() => import("../pages/home/container"));

const LoadingMessage = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <div className="spin">
      <Spin
        size="small"
        indicator={
          <LoadingOutlined style={{ fontSize: 24, color: "#00A3A1" }} spin />
        }
      />
    </div>
  </div>
);

const FourZeroFour = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  </div>
);

class Main extends Component {
  render() {
    return (
      <Router basename="/">
        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={FourZeroFour} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
export default Main;
