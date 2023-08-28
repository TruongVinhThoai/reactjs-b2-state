import React, { Component } from "react";

export default class GlassesState extends Component {
  // state = {
  //   id: "",
  //   glasses: "",
  //   name: "",
  //   desc: "",
  // };
  handleChangeGlasses = (Glasses) => {
    this.setState({
      id: Glasses.id,
      glasses: Glasses.glasses,
      name: Glasses.name,
      desc: Glasses.desc,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="py-5">
          {/* <p>{this.state.id}</p>
          <p>{this.state.glasses}</p>
          <p>{this.state.name}</p>
          <p>{this.state.desc}</p> */}
          <button
            onClick={() => {
              this.handleChangeGlasses(this.state);
            }}
          >
            <img style={{ width: `400px` }} src="./img/model.jpg" />
          </button>
        </div>
      </div>
    );
  }
}
