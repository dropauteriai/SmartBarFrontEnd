import React from "react";

function Cards(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="justify-content-center mb-4 p-2 border border-3 border-secondary shadow rounded-3">
        <div className="d-flex p-2 mb-1 border-3 border-bottom">
          <div className="col mb-2 position-relative me-5">
            <button className="d-flex align-items-center justify-content-center position-absolute top-0 start-100 border bg-white rounded-pill">
              <i className=" fa-solid fa-ellipsis text-secondary fs-5"/>
            </button>
            <i className=" d-flex align-items-center justify-content-centerfa-solid fa-user p-2 me-4 border-secondary text-secondary rounded-pill bg-primary" />
            <span className="text-secondary p-2 border border-3 border-secondary rounded-pill bg-primary fw-bold">
              {props.name}
            </span>
          </div>
        </div>
        <div className="p-2 border-bottom">
          <div
            className="list-group fw-bold text-secondary"
            style={{ listStyle: "none" }}
          >
            <li className="mb-2">Vištiena su grybų padažu</li>
            <li className="mb-2">Cepelinai</li>
            <li className="mb-2">Heineken</li>
            <li className="mb-2">Kepta duona su sūriu</li>
            <li className="mb-2">Rinkinys prie alaus</li>
          </div>
        </div>
        <div className="row p-2 mt-2">
          <div className="col">
            <button className="p-1 d-flex align-items-center justify-content-center border border-secondary rounded-pill bg-primary">
              <i className="p-1 mx-3 fa-solid fa-plus text-secondary"></i>
            </button>
          </div>
          <div className="col">
            <div className="p-1 border border-secondary rounded-pill">
              <i className="ms-2 me-2 fa-solid fa-money-bill-1-wave text-secondary" />
              <span className="text-secondary ms-2 me-2 fw-bold">3.66</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
