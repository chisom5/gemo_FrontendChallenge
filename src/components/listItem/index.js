import React from "react";

const ListItem = (props) => {
  return (
    <div className="list__container">
      <div className="list__avatar">
        <img src={props.listContent.owner.avatar_url} alt="owner avatar" />
      </div>

      <section className="list__content">
        <h2>{props.listContent.name}</h2>
        <p>{props.listContent.description}</p>
        <span className="list__content_otherdescription">
            <div className='stargazers'>{props.listContent.stargazers_count}</div>
            <div>{props.listContent.open_issues_count}</div>
            <p></p>
        </span>
      </section>
    </div>
  );
};

export default ListItem;
