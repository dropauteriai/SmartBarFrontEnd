import React from "react";

function Cards(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="justify-content-center mb-4 p-2 border border-3 border-secondary shadow rounded-3">
        <div className="d-inline-flex p-2">
          <div className="row">
          <i className="fa-solid fa-user p-2 border border-3 border-secondary text-white rounded-circle bg-primary" />
          <span className="text-white p-2 border border-secondary rounded-pill bg-primary">hello</span>
          
        </div>
        <div>{props.name}</div>
      </div>
    </div>
  );
}

export default Cards;
