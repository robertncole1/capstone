import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { getAlbums } from '../helpers/data/axios';

function FilterButtons({
  setResults,
  results,
  apiInput,
}) {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const allCategories = ['Back to Search Results', ...new Set(results.map((result) => result.type))];
    setButtons(results.length ? allCategories : []);
  }, [results]);

  const filter = (button) => {
    if (button === 'Back to Search Results') {
      getAlbums(apiInput)
        .then(setResults);
      return;
    }
    const filteredData = results.filter((result) => result.type === button);
    setResults(filteredData);
  };

  return (
      <>
      <Button button={buttons} filter={filter} />
      </>
  );
}

FilterButtons.propTypes = {
  setResults: PropTypes.func,
  results: PropTypes.array,
  apiInput: PropTypes.string,
};

export default FilterButtons;
