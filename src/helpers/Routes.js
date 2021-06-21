import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Collection from '../views/Collection';
import SearchResults from '../views/SearchResults';
import SingleView from '../views/SingleView';
import Home from '../views/Home';
import GearForm from './Forms/AddGear';
import Gear from '../views/Gear';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

function Routes({
  user,
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {() => <Home
          user={user}
          />}/>
        <PrivateRoute exact path='/collection' user={user} component={() => <Collection
          user={user}
      />}
        />
        <PrivateRoute exact path='/gear' user={user} component={() => <Gear
          user={user}
      />}
        />
        <Route exact path='/search' component={ () => <SearchResults
          user={user}
      /> }
        />
         <Route path='/releases/:firebaseKey' component={ SingleView }
         />
        <PrivateRoute exact path='/add-gear' user={user} component={ () => <GearForm
          user={user}
      /> }
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};

export default Routes;
