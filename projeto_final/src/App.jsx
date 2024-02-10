import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import isAuthenticated from './services/auth';
import adminGames from './components/games/adminGames';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/games" component={gameList} />
        <Route path="/admin/games" component={adminGames} />
        {/* Mais rotas... */}
      </Switch>
    </Router>
  );
}

export default App;