import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../redux/actions';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    // state.posts and state.comments must match in reducer.js function names  
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));  // inject the state to Main component thus Main connected to Redux store

export default App;