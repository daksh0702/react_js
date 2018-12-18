import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

<div id="root" />;
const rootElement = document.getElementById("root");
const Message = props => <div>{props.msg}</div>;
const element = (
  <div className="container">
    <Message msg="Hello World!" />
    <Message msg="Goodbye World!" />
  </div>
);
ReactDOM.render(element, rootElement);
