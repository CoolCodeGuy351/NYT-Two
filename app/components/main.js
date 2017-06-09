// Include React
// var React = require("react");
import React from "react";
import PropTypes from 'prop-types';

// Here we include all of the sub-components
// var Form = require("./form");
// import Form from "./form";

// Requiring our helper for making API calls
// var helpers = require("../utils/helper");
import helpers from "../utils/helper";

// Create the Main Component
class Main extends React.Component {

  constructor() {

    super();

    // this.state = {
    //   count: 0
    // };
    // // Since we're passing these methods to be used as callback functions,
    // // we should bind them to our component here
    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);
  }

 
  // Here we render the function
  render() {
    return (

      <div className="container">

        <div className="row">
          <div className="col">
            <div className="jumbotron">
              <h2>NYT Search</h2>
              <hr />
              <p>
                <em>Search & Save your favorite NYT Articles!</em>
              </p>
                {/*
                  Here we create a button click.
                  Note how we have an onClick event associate with our handleClick function.
                */}
            </div>
          </div>
      </div>

        {/*                       Search Menu                             */}

        <div className="row">
              <div className="col">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title text-center">Form</h3>
                  </div>
                  <div className="panel-body text-center">
                    <form>
                      <div className="form-group">
                        <h4 className="">
                          <strong>Topic</strong>
                        </h4>
                        {/*
                          Note how each of the form elements has an id that matches the state.
                          This is not necessary but it is convenient.
                          Also note how each has an onChange event associated with our handleChange event.
                        */}
                        <input
                          type="text"
                          className="form-control"
                          id="topic"
                          // onChange={this.handleChange}
                          required
                        />

                        <h4>
                          <strong>Start Year</strong>
                        </h4>
                        <input
                          type="text"
                          className="form-control"
                          id="start"
                          // onChange={this.handleChange}
                          required
                        />

                        <h4>
                          <strong>End Year</strong>
                        </h4>
                        <input
                          type="text"
                          className="form-control"
                          id="end"
                          // onChange={this.handleChange}
                          required
                        />
                        <button type="submit" class="btn btn-default">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        </div>

      {/*                        Results Section                           */}

      <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Search Results</h3>
              </div>
              <div className="panel-body text-center">
                <p><strong>Movie 1</strong> Movie 1 </p>
                <p><strong>Movie 2</strong> Movie 2 </p>
                <p><strong>Movie 3</strong> Movie 3 </p>
              </div>
            </div>

          </div>

      </div>


      {/*                        Saved Article Section Section                           */}

      <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Saved Articles</h3>
              </div>
              <div className="panel-body text-center">
                <p><strong>Movie 1</strong> Movie 1 </p>
                <p><strong>Movie 2</strong> Movie 2 </p>
                <p><strong>Movie 3</strong> Movie 3 </p>
              </div>
            </div>

          </div>

      </div>
      
      </div>
    );
  }
};

// Export the component back for use in other files

export default Main;

// OR

// ReactDOM.render(
//   <App />, document.getElementById("app"));

// OR

// module.exports = Main;
