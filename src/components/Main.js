import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import Single from './Single'

class Main extends Component { 

    componentDidMount() {
        this.props.startLoadingPosts();
        this.props.startLoadingComments();
    }
    render() {
        
        //console.log("[Main]", this.props);

        return ( 
        <div>
            <h1>
                <Link to="/"> Photowall </Link>
            </h1>
            <Route exact path = "/" render={ () => (  // multiple-line
                <div> 
                    <PhotoWall {...this.props} /> 
                </div> 
            )} /> 

            <Route path = "/AddPhoto" render = {(params) => (
                <AddPhoto {...this.props} onHistory={params.history}/>
            )} />   

            {/* other is important otherwise overwrites one another */}
            <Route path="/single/:id" render = { (params) => (                
                <Single {...this.props} {...params} /> 
            )} />  
        </div> 
        )
    }
}

export default Main;