import React, { Component } from "react";
import Header from "../../../components/header";
import ListItem from "../../../components/listItem";
import "../../style.scss";

class HomeComponent extends Component {
  render() {
    return (
      <div className="init__container">
        <Header />
        <div className="mini__container">
          <section className="main__content">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            {/* {chatsText.map((chat, i) => {
            return <ListItem chatsContent={chat} key={i} />;
          })} */}
          </section>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
