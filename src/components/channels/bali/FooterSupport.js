import React, { Component } from "react";
import "../style/footer.scss";

class FooterSupport extends Component {
  render() {
    const { onKeyPress, OnChange, value } = this.props;
    return (
      <div className="Footer">
        <input
          type="text"
          className="Footer-Input"
          placeholder="Message in #General"
          onKeyPress={onKeyPress}
          onChange={OnChange}
          value={value}
        />
        <button className="Over"></button>
        <button className="Micro"></button>
        <button className="Smile"></button>
      </div>
    );
  }
}

export default FooterSupport;
