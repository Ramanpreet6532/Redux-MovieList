import './App.css';
import { connect } from 'react-redux';
import updateMovies from './store/actions/updateMovies';
import fetchUsers from './store/actions/fetchUsers';

function App(props) {
  return (
    <div className="app">
      <h2>REDUX MOVIELIST APP</h2>

      <span style={{ color: 'green', marginTop: '10px' }}>
        Your Current Movie is:
     </span><b> {props.movies.name}</b>

      <div style={{ marginTop: '10px' }}><button onClick={props.updateMovies}>Select New Movie</button></div>

      <div style={{ marginTop: '10px' }}>

        {props.users.length === 0 ? <p>THERE ARE NO USERS</p> :
          (
            <div>
              <table >
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
                {props.users.map(user => (

                  <tr>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
                }
              </table>
            </div>
          )
        }
      </div>

      <div style={{ marginTop: '10px' }}><button onClick={props.fetchUsers}>Fetch Users</button></div>

    </div>
  );
};

const MapStateToProps = state => {
  return {
    movies: state.movies,
    users: state.users
  };
};

const MapDispatchToProps = dispatch => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(App);
