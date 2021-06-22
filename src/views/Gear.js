import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGear } from '../helpers/data/axios';
import GearCard from '../Components/GearCard';
import GearHeader from '../Components/GearHeader';
import Footer from '../Components/Footer';

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
    <GearHeader/>
      <div className='my-collection-section'>
      { gear.length < 1
            && <h6>No Gear Added to your Collection.</h6>
        }
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
      <Footer/>
    </>
  );
}

Gear.propTypes = {
  user: PropTypes.any,
};

export default Gear;
