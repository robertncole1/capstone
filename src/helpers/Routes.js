import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Collection from '../views/Collection';
import SearchResults from '../views/SearchResults';
import SingleView from '../views/SingleView';
import Home from '../views/Home';

function Routes({
  user,
  releases,
  artists,
  labels,
  masters,
  setMasters,
  setReleases,
  setLabels,
  setArtists,
  results,
  setResults
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {() => <Home
          results={results}
          setResults={setResults}
          user={user}
          />}/>
        <Route exact path='/collection' component={() => <Collection
          user={user}
          releases={releases}
          artists={artists}
          labels={labels}
          masters={masters}
          setMasters={setMasters}
          setReleases={setReleases}
          setLabels={setLabels}
          setArtists={setArtists}
          results={results}
          setResults={setResults}
      />}
        />
        <Route exact path='/search' component={ () => <SearchResults
          user={user}
          results={results}
          setResults={setResults}
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
  releases: PropTypes.array,
  masters: PropTypes.array,
  labels: PropTypes.array,
  artists: PropTypes.array,
  setArtists: PropTypes.func,
  setLabels: PropTypes.func,
  setReleases: PropTypes.func,
  setMasters: PropTypes.func,
  results: PropTypes.array,
  setResults: PropTypes.func,
};

export default Routes;
