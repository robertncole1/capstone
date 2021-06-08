import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Collection from '../views/Collection';
import SearchResults from '../views/SearchResults';
import SingleView from '../views/SingleView';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/collection' component={() => <Collection
          user={user}
      />}
        />
        <Route exact path='/search' component={ () => <SearchResults
          user={user}
      /> }
        />
         <Route path='/releases/:firebaseKey' component={ SingleView }
         />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};

export default Routes;
