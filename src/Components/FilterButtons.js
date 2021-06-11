import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { getAlbums } from '../helpers/data/axios';

function FilterButtons({
  setResults,
  results,
  apiInput,
}) {
  const allCategories = ['Back to Search Results', ...new Set(results.map((result) => result.type))];
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'Back to Search Results') {
      getAlbums(apiInput)
        .then(setResults);
      console.warn(apiInput);
      console.warn(setButtons);
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
  setApiInput: PropTypes.func,
};

export default FilterButtons;
