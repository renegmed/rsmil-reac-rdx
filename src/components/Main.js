import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import Single from './Single'

class Main extends Component { 

    // we use Component state when we are dealing with state that is not global to the application, short-lived
    // as opposed to state stored in redux store.
    state = { loading: true };   

    componentDidMount() {
        this.props.startLoadingPosts().then( () => {
            this.setState({loading: false});
        });
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
                <Single loading={this.state.loading} {...this.props} {...params} /> 
            )} />  
        </div> 
        )
    }
}

export default Main;