import React, { Component } from "react";
import { glassesArr } from "./Data";

export default class RenderWithMap extends Component {
  renderListGlasses = () => {
    return glassesArr.map(({ url, name }, index) => {
      return (
        <div key={index} className="card text-left col-3">
          <img className="card-img-top" src={url} />
          <div className="card-body">
            <h6 className="card-title">{name}</h6>
            {/* <p className="card-text">{moTa}</p> */}
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListGlasses()}</div>
      </div>
    );
  }
}
