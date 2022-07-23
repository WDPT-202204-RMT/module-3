import React from "react";
import Button from "./Button";
/* 
let React = {component:{}}
let {component} = React
 */

class Navbar extends React.Component {
  render() {
    //this.props.alert();
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Button />
        <Button />
      </div>
    );
  }
}

export default Navbar;
