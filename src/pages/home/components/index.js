import React, { Component } from "react";
import { Pagination } from "antd";
import Header from "../../../components/header";
import ListItem from "../../../components/listItem";
import "../../style.scss";

class HomeComponent extends Component {
  state = {
    current: 1,
  };
  componentDidMount() {
    this.props.fetchTrendingRepos(1);
  }
  onChange = (page) => {
    this.setState(
      {
        current: page,
      },
      () => {
        this.props.fetchTrendingRepos(page);
      }
    );
  };

  render() {
    return (
      <div className="init__container">
        <Header />
        <div className="mini__container">
          <Pagination
            className="paginated"
            current={this.state.current}
            onChange={this.onChange}
            total={
              this.props.trendingReposArr &&
              this.props.trendingReposArr.total_count
            }
          />
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
