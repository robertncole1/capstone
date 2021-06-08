/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardSubtitle, CardLink,
  CardTitle, CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';

const CollectionCard = ({
  firebaseKey,
  title,
  type,
  country,
  cover_image,
  barcode,
  year,
  format,
  user,
  id,
  notes
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  // eslint-disable-next-line no-shadow
  const handleProjectsButton = (type) => {
    switch (type) {
      case 'edit':
        console.warn(user.uid);
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/releases/${firebaseKey}`);
        break;
      default:
        console.warn('No button clicked');
    }
  };

  const editView = () => (
    <>
      <CardLink onClick={() => handleProjectsButton('edit')}>
        {editing ? 'Close Form' : 'Edit Card'}
      </CardLink>
      <CardLink className="delete-link" onClick={() => handleProjectsButton('delete')}>Delete</CardLink>
    </>
  );

  return (
    <>
    { type === 'artist' && <Card>
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
            </CardBody>
            <img width="100%" className="img-container" src={cover_image} alt={title}/>
            <CardBody>
            <CardText>Artist ID: {id}</CardText>
            <CardText>Notes: {notes}</CardText>
            <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Add</CardLink>
            <CardLink className="delete-link" onClick={() => handleProjectsButton('view')}>View</CardLink>
            { editView() }
            </CardBody>
        </Card>
    }
    { type === 'release' && <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Country: {country}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {year}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Format: {format}</CardSubtitle>
        </CardBody>
        <img width="100%" className="img-container" src={cover_image} alt={title}/>
        <CardBody>
          <CardText>Barcodes: {barcode}</CardText>
          <CardText>Release ID: {id}</CardText>
          <CardText>Notes: {notes}</CardText>
          <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Add</CardLink>
          <CardLink className="delete-link" onClick={() => handleProjectsButton('view')}>View</CardLink>
          { editView() }
        </CardBody>
      </Card>
    }
    { type === 'label' && <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
        </CardBody>
        <img width="100%" className="img-container" src={cover_image} alt={title}/>
        <CardBody>
        <CardText>Release ID: {id}</CardText>
        <CardText>Notes: {notes}</CardText>
        <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Add</CardLink>
        <CardLink className="delete-link" onClick={() => handleProjectsButton('view')}>View</CardLink>
        { editView() }
        </CardBody>
      </Card>
    }
    { type === 'master' && <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Country: {country}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {year}</CardSubtitle>
        </CardBody>
        <img width="100%" className="img-container" src={cover_image} alt={title}/>
        <CardBody>
          <CardText>Master ID: {id}</CardText>
          <CardText>Notes: {notes}</CardText>
          <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Add</CardLink>
        <CardLink className="delete-link" onClick={() => handleProjectsButton('view')}>View</CardLink>
        { editView() }
        </CardBody>
      </Card>
    }
    </>
  );
};

CollectionCard.propTypes = {
  firebaseKey: PropTypes.string,
  title: PropTypes.string,
  country: PropTypes.string,
  cover_image: PropTypes.string,
  barcode: PropTypes.array,
  type: PropTypes.string,
  id: PropTypes.number,
  user: PropTypes.any,
  format: PropTypes.string,
  year: PropTypes.string,
  notes: PropTypes.string,
};

export default CollectionCard;
