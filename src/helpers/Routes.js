import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Collection from '../views/Collection';
import SearchResults from '../views/SearchResults';
import SingleView from '../views/SingleView';
import Home from '../views/Home';
import GearForm from './Forms/AddGear';
import Gear from '../views/Gear';

function Routes({
  user,
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {() => <Home
          user={user}
          />}/>
        <Route exact path='/collection' component={() => <Collection
          user={user}
      />}
        />
        <Route exact path='/gear' component={() => <Gear
          user={user}
      />}
        />
        <Route exact path='/search' component={ () => <SearchResults
          user={user}
      /> }
        />
         <Route path='/releases/:firebaseKey' component={ SingleView }
         />
        <Route exact path='/add-gear' component={ () => <GearForm
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
