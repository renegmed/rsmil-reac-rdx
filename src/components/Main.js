import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

class Main extends Component { 

    render() {
        
        console.log("[Main]", this.props.posts);

        return ( 
        <div>
            <Route exact path = "/" render={ () => (  // multiple-line
                <div>
                    <Title title = {'Photowall'}/>
                    <PhotoWall posts={this.props.posts} /> 
                </div> 
            )} /> 

            {/* <Route path = "/AddPhoto" render = {({history}) => (
                <AddPhoto onAddPhoto = {(addedPost) => {
                    //console.log(addedPost);
                    this.addPhoto(addedPost);
                    history.push('/');
                }}/>
            )} />    */}
                  
        </div> 
        )
    }
}

export default Main;