import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'reactstrap';
import AlbumCard from '../Components/AlbumCard';
// import ArtistCard from '../Components/ArtistCard';
import { getAlbums } from '../helpers/data/axios';
import FilterButtons from '../Components/FilterButtons';
import SearchHeader from '../Components/SearchHeader';

function SearchResults({
  user,
  uid,
}) {
  // const [artists, setArtists] = useState([]);
  const [apiInput, setApiInput] = useState('');
  const [results, setResults] = useState([]);

  const grabApiSearch = () => {
    getAlbums(apiInput)
      .then((response) => setResults(response));
  };

  const handleApiInput = (e) => {
    setApiInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    grabApiSearch();
  };

  return (
    <>
    <SearchHeader/>
    <Form className="search-form"
      onSubmit={handleSubmit}>
        <div className="form-group">
          <h3
            id="search-title">
              Search by Artist, Release, Master, or Label
          </h3>
          { user
            ? ''
            : <h6>Please Sign In to Add to Your Collection</h6>
          }
          <input
            type="text"
            className="form-control"
            id="value"
            onChange={handleApiInput}
            required
            >
          </input>
        </div>
        <Button className="sign-in" type="submit">Search</Button>
      </Form>
      <div className='filter-btns'>
          <FilterButtons
            results={results}
            setResults={setResults}
            apiInput={apiInput}
            setApiInput={setApiInput}
          />
        </div>
      <div className='my-search'>
        {results.map((result) => (
          <AlbumCard
            key={result.id}
            firebaseKey={result.firebaseKey}
            title={result.title}
            notes={result.notes}
            country={result.country}
            cover_image={result.cover_image}
            barcode={result.barcode}
            year={result.year}
            format={result.format}
            type={result.type}
            user={user}
            uid={uid}
            id={result.id}
            results={results}
            setResults={setResults}
          />
        ))}
        </div>
        {/* <h2>Artist Collection</h2> */}
        {/* <div className='my-search'>
          {artists.map((result) => (
            <ArtistCard
              key={result.firebaseKey}
              firebaseKey={result.firebaseKey}
              title={result.title}
              notes={result.notes}
              cover_image={result.cover_image}
              id={result.id}
              user={user}
              uid={uid}
              results={results}
              setArtists={setArtists}
            />
          ))}
        </div> */}
    </>
  );
}

SearchResults.propTypes = {
  user: PropTypes.any,
  uid: PropTypes.any,
};

export default SearchResults;
