import React, { Component } from "react";
import "../../App.css";
import Photo from "../../Picters/Photo.svg";
class MassagesSupport extends Component {
  state = {
    dataT: new Date().toLocaleString(),
  };

  render() {
    const { dataT } = this.state;
    const { text } = this.props;
    return (
      <div className="Chat-Massages">
        <div className="Time">
          <div className="Arrow-1"></div>
          <p>{dataT}</p>
          <div className="Arrow-1"></div>
        </div>
        <div className="Massages">
          <div className="Photo">
            <img src={Photo} alt="Logo" className="Photo" />
          </div>
          <div className="Massage">
            <div className="Name">
              <p>Amilia Luna</p>
              <p>19:38 AM</p>
            </div>
            <div className="Table">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MassagesSupport;
