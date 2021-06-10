import React from 'react';
import PropTypes from 'prop-types';

function Button({ button, filter }) {
  return (
        <div className="buttons">
            {
                button.map((cat, i) => <button key={i} type="button" onClick={() => filter(cat)} className="btn">{cat}</button>)
            }
        </div>
  );
}

Button.propTypes = {
  button: PropTypes.any,
  filter: PropTypes.any,
};

export default Button;
