import React from "react";

function Cards(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="justify-content-center mb-4 p-2 border border-3 border-secondary shadow rounded-3">
        <div className="d-flex p-2 mb-1 border-3 border-bottom">
          <div className="col mb-2">
          <i className="fa-solid fa-user p-2 me-4  border-secondary text-secondary rounded-circle bg-primary" />
          <span className="text-secondary p-2 border border-3 border-secondary rounded-pill bg-primary">{props.name}</span>
          </div>
        </div>
        <div className="p-2 border-bottom">
          <div className="list-group" style={{listStyle:"none"}}>
            <li className="mb-2">Vištiena su grybų padažu</li>
            <li className="mb-2">Cepelinai</li>
            <li className="mb-2">Heineken</li>
            <li className="mb-2">Kepta duona su sūriu</li>
            <li className="mb-2">Rinkinys prie alaus</li>
          </div>
        </div>
        <div className="row p-2 mt-2">
          <div className="col text-center">
            <button className="p-2 border border-secondary rounded-circle">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="col ">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
