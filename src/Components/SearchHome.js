import React from 'react';
import { Button } from 'reactstrap';

export default function SearchHome() {
  return (
    <div className="search-home">
      <h2>Search for Your Favorites and Add them to Your Collection</h2>
      <div className="search-home-botton">
        <Button className='sign-in' color='link' href="/search">Get Started</Button>
      </div>
    </div>
  );
}
