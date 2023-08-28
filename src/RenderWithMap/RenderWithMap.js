import React, { Component } from "react";
import { glassesArr } from "./Data";

export default class RenderWithMap extends Component {
  renderListGlasses = () => {
    return glassesArr.map((item, index) => {
      return (
        <div key={index} className="card text-left col-2 m-3 py-4">
          <button
            onClick={() => {
              return {
                id: item.id,
                glasses: item.url,
                name: item.name,
                desc: item.desc,
              };
            }}
          >
            <img className="card-img-top" src={item.url} />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="py-5">
          <img style={{ width: `400px` }} src="./img/model.jpg" />
        </div>
        <div className="row">{this.renderListGlasses()}</div>
      </div>
    );
  }
}
