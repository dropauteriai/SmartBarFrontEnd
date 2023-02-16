import React, { useState } from "react";

function Cards(props) {
  const [moreVisible, setMoreVisible] = useState(false);
  const handleOnMoreClick = () => {
    setMoreVisible()
  }

  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="justify-content-center mb-4 p-2 border border-2 border-secondary shadow rounded-3">
        <div className="d-flex p-2 mb-1 border-3 border-bottom">
          <div className="col p-1 position-relative me-4">
            <button className="d-flex align-items-center justify-content-center position-absolute top-0 start-100 border-0 bg-white rounded-pill">
              <i className=" fa-solid fa-ellipsis text-secondary fs-5" />
            </button>
            <i className="fa-regular fa-user p-1 me-3 text-black" />
            <div className="d-inline-flex text-wrap text-black p-2 rounded">
              {props.name}
            </div>
          </div>
        </div>
        <div className="p-2 border-bottom">
          <div className="list-group text-black" style={{ listStyle: "none" }}>
            <li className="mb-2">Vištiena su grybų padažu</li>
            <li className="mb-2">Cepelinai</li>
            <li className="mb-2">Heineken</li>
            <li className="mb-2">Kepta duona su sūriu</li>
            <li className="mb-2">Rinkinys prie alaus</li>
          </div>
        </div>
        <div className="row p-2 mt-2">
          <div className="col">
            <button className="p-1 border border-2 border-secondary rounded-pill bg-light">
              <i className="p-1 mx-3 fa-solid fa-plus text-secondary"></i>
            </button>
          </div>
          <div className="col">
            <div className="p-1 border border-2 border-secondary rounded">
              <i className="ms-2 me-2 fa-solid fa-money-bill-1-wave text-secondary" />
              <span className="text-black ms-2">3.66</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
