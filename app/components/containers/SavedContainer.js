import React from 'react';
import helper from '../../utils/helper';
import Saved from './panels/Saved';

class SavedContainer extends React.Component {

    constructor() {

    super();

    }

    
    // getInitialState: function() {
    //     return {articles: []}
    // },

    // componentDidMount: function() {
    //     // Get the saved articles
    //     helpers.getArticles().then(function(response) {
    //         var component = this;
    //         if (response !== this.state.articles) {

    //             var articulo = response.map(function(arts, i) {

    //                 return <div className="well" key={i}>
    //                     <h4 className="articleHeadline">
    //                         <span className="label label-success">{i + 1}</span>
    //                         {arts.title}</h4>
    //                     <h5>{arts.date}</h5>
    //                     <a href={arts.url}>{arts.url}</a>

    //                     <input type="hidden" name="articleId" value={arts._id}/>
    //                     <br></br>
    //                     <button onClick={() => component.removeArticleClick(arts._id)} className="btn btn-default text-center btn-primary">Delete</button>
    //                 </div>;
    //             })

    //             this.setState({articles: articulo});
    //         }
    //     }.bind(this));
    // },

    // removeArticleClick: function(response) {
    //     helpers.deleteArticle(response)
    //     console.log(response);
    //     // update state of parent
    //     helpers.getArticles().then(function(response) {
    //         var component = this;
    //         if (response !== this.state.articles) {

    //             var articulo = response.map(function(arts, i) {

    //                 return <div className="well" key={i}>
    //                     <h4 className="articleHeadline">
    //                         <span className="label label-success">{i + 1}</span>
    //                         {arts.title}</h4>
    //                     <h5>{arts.date}</h5>
    //                     <a href={arts.url}>{arts.url}</a>

    //                     <input type="hidden" name="articleId" value={arts._id}/>
    //                     <br></br>
    //                     <button onClick={() => component.removeArticleClick(arts._id)} className="btn btn-default text-center btn-primary">Delete</button>
    //                 </div>;
    //             })

    //             this.setState({articles: articulo});
    //         }
    //     }.bind(this));

    // },
    
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Saved Articles</h3>
                            </div>
                            <div className="panel-body">
                                <Saved />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};

export default SavedContainer;