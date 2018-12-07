import React, { Component } from 'react';

class List extends Component {

    // NOTE 'this' points to the component that is being rendered, i.e Main's List.
    // 
    render() {
        return ( 
        <ol>
            { this.props.tasks.map((task, index) => <li key= {index}> {task} </li>) } 
        </ol> 
        )
    }
} 

export default List;