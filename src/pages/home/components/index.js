import React, { Component } from "react";
import { Pagination, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
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
          {/* show loader */}
          {this.props.isFetching &&
          // <div style={{marginBottom: '0.4rem'}}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24, marginBottom: '0.5rem' }} spin />}/>
            // </div>
          }

          {this.props.trendingReposArr !== null && (
            <>
              <Pagination
                className="paginated"
                current={this.state.current}
                onChange={this.onChange}
                showSizeChanger ={false}
                total={
                  this.props.trendingReposArr !== null &&
                  this.props.trendingReposArr.total_count
                }
              />
              <section className="main__content">
                {this.props.trendingReposArr &&
                  this.props.trendingReposArr.items.map((chat, i) => {
                    return <ListItem listContent={chat} key={i} />;
                  })}
              </section>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default HomeComponent;
