import React from 'react';

class Search extends React.Component {

    constructor() {

    super();

    }
      // Here we set a generic state associated with the text being searched for
    // getInitialState: function() {
    //     return {term: "", startYear: "", endYear: ""};
    // },

    // handleChange: function(event) {

    //     var newState = {};
    //     newState[event.target.id] = event.target.value;
    //     this.setState(newState);

    // },
    // setTerm: function(term) {
    //     this.setState({
    //         queryTerm: term + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101"
    //     });
    // },

    // handleSubmit: function(event) {

    //     event.preventDefault();

    //     this.props.setTerm(this.state.term + "&begin_date=" + this.state.startYear + "0101" + "&end_date=" + this.state.endYear + "0101");

    //     this.setState({term: "", startYear: "", endYear: ""});
    // },

    // Here we descibe this component's render method
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Search</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <h4 className="">
                                            <strong>Term</strong>
                                        </h4>
                                        
                                        <input type="text" className="form-control" id="term" required/>
                                        <h4>
                                            <strong>Start Year</strong>
                                        </h4>
                                       
                                        <input type="text" className="form-control" id="startYear" required/>

                                        <h4>
                                            <strong>End Year</strong>
                                        </h4>
                                        
                                        <input type="text" className="form-control" id="endYear" required/>
                                        <br></br>
                                        <button className="btn btn-primary btn-lg" id="load" data-loading-text="<i className='fa fa-circle-o-notch fa-spin'></i> Processing Order">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Results</h3>
                            </div>
                            <div className="panel-body">

                                
                                <div>Hello World!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

// Export the component back for use in other files
export default Search;