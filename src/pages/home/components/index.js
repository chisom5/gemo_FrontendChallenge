import React, { Component } from "react";
import Header from "../../../components/header";
import ListItem from "../../../components/listItem";
import "../../style.scss";

class HomeComponent extends Component {
  componentDidMount() {
    this.props.fetchTrendingRepos(1);
  }
  render() {
    return (
      <div className="init__container">
        <Header />
        <div className="mini__container">
          <section className="main__content">
            {this.props.trendingReposArr &&
              this.props.trendingReposArr.items.map((chat, i) => {
                return <ListItem listContent={chat} key={i} />;
              })}
          </section>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
