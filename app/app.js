// Include the Main React Dependencies
// var React = require("react");
import React from "react";
import PropTypes from 'prop-types';

// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

// Grabs the Routes
// var routes = require("./config/routes");
import routes from "./config/routes";

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
