import Main from './Main';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        posts: state
    }
}

const App = connect(mapStateToProps)(Main);  // inject the state to Main component thus Main connected to Redux store

export default App;