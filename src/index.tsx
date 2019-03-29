import React from "react";
import ReactDOM from "react-dom";
// import "@patternfly/react-core/dist/styles/base.css";
import App from '@app/index';
import { BrowserRouter as Router } from 'react-router-dom';

if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Router>
    <App appName="Sample UI" />
  </Router>,
  document.getElementById('sample-root') as HTMLElement
);
