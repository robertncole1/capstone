import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'reactstrap';
import AlbumCard from '../Components/AlbumCard';
// import ArtistCard from '../Components/ArtistCard';
import { getAlbums } from '../helpers/data/axios';

function SearchResults({ user, uid }) {
  const [results, setResults] = useState([]);
  // const [artists, setArtists] = useState([]);
  const [apiInput, setApiInput] = useState('');

  const grabApiSearch = () => {
    getAlbums(apiInput)
      .then((response) => setResults(response));
  };

  // useEffect(() => {
  //   getAlbums(apiInput)
  //     .then((albumArray) => {
  //       setApiInput(albumArray);
  //     });
  // }, []);

  // useEffect(() => {
  //   getArtist()
  //     .then((ArtistArray) => {
  //       setArtists(ArtistArray);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiInput('');
    grabApiSearch();
  };

  const handleApiInput = (e) => {
    setApiInput(e.target.value);
  };

  return (
    <>
    <Form className="search-form"
      onSubmit={handleSubmit}>
        <div className="form-group">
          <h2
            id="search-title">
              Search by Artist, Release, Master, or Label
          </h2>
          <input
            type="text"
            className="form-control"
            id="value"
            onChange={handleApiInput}>
          </input>
        </div>
        <Button type="submit">Search</Button>
      </Form>
      <div className='my-search'>
        {results.map((result) => (
          <AlbumCard
            key={result.firebaseKey}
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
