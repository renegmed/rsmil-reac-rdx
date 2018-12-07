import React, { Component } from 'react';
import ReactDOM from 'react-dom';
  
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

class Title extends Component {
    render() {
        return (    
            <h1> {this.props.title} </h1>
        )
    }
}

class Main extends Component {
    render() {
        return <div>
                 <Title title = {'Today\'s Task List'}/>
                 <List tasks = {['Mow the lawn', 'walk the dog']}/>
                 <List tasks = {['hose the driveway', 'finish the laundry']}/>
               </div>
        
    }
}
ReactDOM.render(<Main />, document.getElementById('root'));