import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../Components/AlbumCard';
import ArtistCard from '../Components/ArtistCard';
import { getAlbums, getArtist } from '../helpers/data/axios';

function SearchResults({ user, uid }) {
  const [results, setResults] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getAlbums()
      .then((albumArray) => {
        setResults(albumArray);
      });
  }, []);

  useEffect(() => {
    getArtist()
      .then((ArtistArray) => {
        setArtists(ArtistArray);
      });
  }, []);

  return (
    <>
      <h2>General Search Results</h2>
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
        <h2>Artist Collection</h2>
        <div className='my-search'>
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
        </div>
    </>
  );
}

SearchResults.propTypes = {
  user: PropTypes.any,
  uid: PropTypes.any,
};

export default SearchResults;
