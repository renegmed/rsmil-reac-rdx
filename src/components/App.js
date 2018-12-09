import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../redux/actions';

function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removePost}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);  // inject the state to Main component thus Main connected to Redux store

export default App;