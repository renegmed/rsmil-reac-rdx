import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

class Main extends Component { 

    render() {
        
        console.log("[Main]", this.props);

        return ( 
        <div>
            <Route exact path = "/" render={ () => (  // multiple-line
                <div>
                    <Title title = {'Photowall'}/>
                    <PhotoWall {...this.props} /> 
                </div> 
            )} /> 

            <Route path = "/AddPhoto" render = {({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )} />   
                  
        </div> 
        )
    }
}

export default Main;