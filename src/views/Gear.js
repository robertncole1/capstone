import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGear } from '../helpers/data/axios';
import GearCard from '../Components/GearCard';

function Gear({ user }) {
  const [gear, setGear] = useState([]);

  useEffect(() => {
    getGear(user)
      .then((gearArray) => {
        setGear(gearArray);
      });
  }, []);

  return (
    <>
      <div className='my-collection-section'>
        <h2>My Gear</h2>
        <div className='my-collection'>
          {gear.map((result) => (
            <GearCard
              key={result.firebaseKey}
              firebaseKey={result.firebaseKey}
              gearName={result.gearName}
              gearDescription={result.gearDescription}
              modelNum={result.modelNum}
              gearImg={result.gearImg}
              notes={result.notes}
              setGear={setGear}
              gear={gear}
              user={user}
            />
          ))}
          </div>
      </div>
    </>
  );
}

Gear.propTypes = {
  user: PropTypes.any,
};

export default Gear;
