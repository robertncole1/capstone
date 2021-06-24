/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardSubtitle, CardLink,
  CardTitle, CardBody, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import ModalExample from './Modal';
import {
  deleteArtist, deleteLabel, deleteMaster, deleteRelease
} from '../helpers/data/axios';

const CollectionCard = ({
  firebaseKey,
  title,
  type,
  country,
  cover_image,
  barcode,
  year,
  user,
  uid,
  format,
  setMasters,
  setReleases,
  setLabels,
  setArtists,
  id,
  publicCollection,
  notes
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  // eslint-disable-next-line no-shadow
  const handleProjectsButton = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/releases/${firebaseKey}`);
        break;
      case 'delete-label':
        deleteLabel(firebaseKey, user)
          .then(setLabels);
        break;
      case 'delete-artist':
        deleteArtist(firebaseKey, user)
          .then(setArtists);
        break;
      case 'delete-master':
        deleteMaster(firebaseKey, user)
          .then(setMasters);
        break;
      case 'delete-release':
        deleteRelease(firebaseKey, user)
          .then(setReleases);
        break;
      default:
        console.warn('No button clicked');
    }
  };

  return (
    <>
    { type === 'artist' && <Card>
      <CardImg alt={title} src={cover_image} top></CardImg>
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
            <CardText>Notes: {notes}</CardText>
            <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Edit</CardLink>
            <CardLink className="delete-link" onClick={() => handleProjectsButton('delete-artist')}>Delete</CardLink>
            {
              editing && <ModalExample
                title={title}
                cover_image={cover_image}
                firebaseKey={firebaseKey}
                notes={notes}
                user={user}
                uid={uid}
                type={type}
                id={id}
                setArtists={setArtists}
              />
            }
            </CardBody>
        </Card>
    }
    { type === 'release' && <Card>
    <CardImg alt={title} src={cover_image} top></CardImg>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Country: {country}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {year}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Format: {format}</CardSubtitle>
          <CardText>Barcodes: {barcode}</CardText>
          <CardText>Notes: {notes}</CardText>
          <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Edit</CardLink>
          <CardLink className="delete-link" onClick={() => handleProjectsButton('view')}>View</CardLink>
          <CardLink className="delete-link" onClick={() => handleProjectsButton('delete-release')}>Delete</CardLink>
          {
              editing && <ModalExample
              title={title}
              cover_image={cover_image}
              firebaseKey={firebaseKey}
              notes={notes}
              country={country}
              year={year}
              publicCollection={publicCollection}
              uid={uid}
              user={user}
              format={format}
              barcode={barcode}
              type={type}
              id={id}
              setReleases={setReleases}
            />
            }
        </CardBody>
      </Card>
    }
    { type === 'label' && <Card>
      <CardImg alt={title} src={cover_image} top></CardImg>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
        <CardText>Notes: {notes}</CardText>
        <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Edit</CardLink>
        <CardLink className="delete-link" onClick={() => handleProjectsButton('delete-label')}>Delete</CardLink>
        {
              editing && <ModalExample
              title={title}
              cover_image={cover_image}
              firebaseKey={firebaseKey}
              notes={notes}
              uid={uid}
              user={user}
              country={country}
              year={year}
              type={type}
              id={id}
              setLabels={setLabels}
              />
            }
        </CardBody>
      </Card>
    }
    { type === 'master' && <Card>
    <CardImg alt={title} src={cover_image} top></CardImg>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
          <CardText>Notes: {notes}</CardText>
          <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Edit</CardLink>
        <CardLink className="delete-link" onClick={() => handleProjectsButton('delete-master')}>Delete</CardLink>
        {
              editing && <ModalExample
              title={title}
              cover_image={cover_image}
              firebaseKey={firebaseKey}
              notes={notes}
              country={country}
              year={year}
              uid={uid}
              user={user}
              type={type}
              id={id}
              setMasters={setMasters}
              />
            }
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
  barcode: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.number,
  user: PropTypes.any,
  uid: PropTypes.any,
  format: PropTypes.string,
  year: PropTypes.string,
  notes: PropTypes.string,
  publicCollection: PropTypes.bool,
  setArtists: PropTypes.func,
  setLabels: PropTypes.func,
  setReleases: PropTypes.func,
  setMasters: PropTypes.func,
};

export default CollectionCard;
