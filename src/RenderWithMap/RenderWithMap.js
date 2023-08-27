import React, { Component } from "react";
import { glassesArr } from "./Data";

export default class RenderWithMap extends Component {
  state = { glasses: "", name: "", desc: "" };
  handleGlasses = () => {
    this.setState({
      name: (this.state.name = "vinhthoai"),
    });
  };
  renderListGlasses = () => {
    return glassesArr.map(({ url, name }, index) => {
      return (
        <div key={index} className="card text-left col-2 m-3 py-4">
          <button onClick={this.handleGlasses}>
            <img className="card-img-top" src={url} />
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
