import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function FilterButtons({
  setResults,
  results
}) {
  const allCategories = ['all', ...new Set(results.map((result) => result.type))];
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'all') {
      setResults(results);
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
};

export default FilterButtons;
