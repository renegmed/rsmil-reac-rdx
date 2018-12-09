import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Photo(props){
    console.log("Photo]", props.posts);
    const post = props.post;
    return <figure className="figure">
                <img className="photo" src={post.imageLink} alt={post.description} />
                <figcaption><p> {post.description} </p></figcaption>
                <div className="button-container">
                    <button onClick = {() => {
                        props.onRemovePhoto(post);
                    }}> Remove </button>
                </div>
                    
               </figure>
} 

function mapStateToProps(state) {
    return {
        posts: state
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,  
}
export default connect(mapStateToProps)(Photo);
//export default Photo;