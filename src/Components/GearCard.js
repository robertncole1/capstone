/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Card, CardText, CardSubtitle, CardLink,
  CardTitle, CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';
import ModalExample from './Modal';
import { deleteGear } from '../helpers/data/axios';

const GearCard = ({
  gearDescription,
  gearName,
  gearImg,
  modelNum,
  firebaseKey,
  user,
  notes,
  setGear
}) => {
  const [editing, setEditing] = useState(false);

  // eslint-disable-next-line no-shadow
  const handleProjectsButton = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteGear(firebaseKey, user)
          .then(setGear);
        break;
      default:
        console.warn('No button clicked');
    }
  };

  return (
    <>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{gearName}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {gearDescription}</CardSubtitle>
            </CardBody>
            <img width="100%" className="img-container" src={gearImg} alt={gearName}/>
            <CardBody>
            <CardText>Model Number: {modelNum}</CardText>
            <CardText>Notes: {notes}</CardText>
            <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Edit</CardLink>
            <CardLink className="delete-link" onClick={() => handleProjectsButton('delete')}>Delete</CardLink>
            {
              editing && <ModalExample
              firebaseKey={firebaseKey}
              gearName={gearName}
              gearDescription={gearDescription}
              modelNum={modelNum}
              user={user}
              gearImg={gearImg}
              notes={notes}
              setGear={setGear}
              />
            }
            </CardBody>
        </Card>
    </>
  );
};

GearCard.propTypes = {
  gearDescription: PropTypes.string,
  gearName: PropTypes.string,
  notes: PropTypes.string,
  modelNum: PropTypes.string,
  firebaseKey: PropTypes.string,
  user: PropTypes.any,
  gearImg: PropTypes.string,
  setGear: PropTypes.func,
};

export default GearCard;
