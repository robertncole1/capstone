import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { getAlbums } from '../data/axios';

function ApiSearch() {
  const [apiInput, setApiInput] = useState('');
  const [results, setResults] = useState(null);

  async function getApiData() {
    await getAlbums(apiInput)
      .then((response) => setResults(response));
  }
  console.warn(results);
  return (
    <>
        <div className="formContainer">
          <form onSubmit={(e) => {
            e.preventDefault();
            getApiData();
          }}>
            <h2>Search</h2>
            <input
              type="text"
              placeholder="Enter Artist, Release, Label, or Master"
              value={apiInput}
              onChange={(e) => setApiInput(e.target.value)}
            />
            <br/>
            <Button className="mt-2" color="info" type="submit">Submit</Button>
            </form>
        </div>
    </>
  );
}

export default ApiSearch;
