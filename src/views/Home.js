import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import SearchHome from '../Components/SearchHome';
import { getPublicReleases } from '../helpers/data/axios';
import PublicCollectionCard from '../Components/PublicCollectionCard';

export default function Home() {
  const [publicAlbums, setPublicAlbums] = useState([]);

  useEffect(() => {
    getPublicReleases().then(setPublicAlbums);
  }, []);

  return (
    <>
      <Header/>
      <SearchHome/>
      <h2>Recently Added Releases</h2>
      <div className='my-collection'>
      {publicAlbums.map((publicAlbum) => (
        <PublicCollectionCard
          key={publicAlbum.firebaseKey}
          firebaseKey={publicAlbum.firebaseKey}
          title={publicAlbum.title}
          notes={publicAlbum.notes}
          country={publicAlbum.country}
          cover_image={publicAlbum.cover_image}
          barcode={publicAlbum.barcode}
          year={publicAlbum.year}
          format={publicAlbum.format}
          type={publicAlbum.type}
          id={publicAlbum.id}
          setPublicAlbums={setPublicAlbums}
          publicAlbums={publicAlbums}
        />
      ))}
      </div>
    </>
  );
}
