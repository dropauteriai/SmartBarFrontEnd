import React from "react";

function Cards(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="justify-content-center mb-4 p-2 border border-3 border-secondary shadow rounded-3">
        <div className="d-flex p-2 mb-5 border-2 border-bottom border-secondary">
          <div className="col">
          <i className="fa-solid fa-user p-2 me-4 border border-3 border-secondary text-secondary rounded-circle bg-primary" />
          <span className="text-secondary p-2 border border-secondary rounded-pill bg-primary">{props.name}</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Cards;
