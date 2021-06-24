/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Card, CardTitle, CardBody, CardSubtitle, CardText, Button, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import ModalExample from './Modal';

const AlbumCard = ({
  setResults,
  firebaseKey,
  title,
  country,
  cover_image,
  barcode,
  type,
  year,
  user,
  uid,
  format,
  id,
  notes,
}) => {
  const [editing, setEditing] = useState(false);

  // eslint-disable-next-line no-shadow
  const handleProjectsButton = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('No button clicked');
    }
  };

  return (
    <>
    { type === 'artist' && <Card>
              { cover_image === 'https://img.discogs.com/6c5b98990fbff2daf939300d206a3d6a6bd159f0/images/spacer.gif'
                ? <CardImg className="img-container" src="https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg" alt={title}></CardImg>
                : <CardImg className="img-container" src={cover_image} alt={title}></CardImg>
              }
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
            <CardText>Artist ID: {id}</CardText>
            { user
              ? <Button onClick={() => handleProjectsButton('edit') }>Add Artist to Collection</Button>
              : ''
            }
            { editing && <ModalExample
                  title={title}
                  cover_image={cover_image}
                  firebaseKey={firebaseKey}
                  notes={notes}
                  type={type}
                  uid={uid}
                  user={user}
                  id={id}
                  setResults={setResults}/>
            }
            </CardBody>
        </Card>
    }
    { type === 'release' && <Card>
    <CardImg className="img-container" src={cover_image} alt={title}></CardImg>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Country: {country}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {year}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Format: {format.join(', ')}</CardSubtitle>
          <CardText>Barcodes: {barcode.slice(0, 2).join(', ')}</CardText>
          <CardText>Release ID: {id}</CardText>
          { user
            ? <Button onClick={() => handleProjectsButton('edit') }>Add Release to Collection</Button>
            : ''
          }
            { editing && <ModalExample
                title={title}
                cover_image={cover_image}
                firebaseKey={firebaseKey}
                notes={notes}
                country={country}
                year={year}
                uid={uid}
                user={user}
                format={format.join(', ')}
                barcode={barcode.slice(0, 2).join(', ')}
                type={type}
                id={id}
                setResults={setResults}
              />
            }
        </CardBody>
      </Card>
    }
    { type === 'label' && <Card>
          { cover_image === 'https://img.discogs.com/6c5b98990fbff2daf939300d206a3d6a6bd159f0/images/spacer.gif'
            ? <CardImg className="img-container" src="https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg" alt={title}></CardImg>
            : <CardImg className="img-container" src={cover_image} alt={title}></CardImg>
          }
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
        <CardText>Release ID: {id}</CardText>
          { user
            ? <Button onClick={() => handleProjectsButton('edit')}>Add Label to Collection</Button>
            : ''
          }
            { editing && <ModalExample
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
                setResults={setResults}
                />
            }
        </CardBody>
      </Card>
    }
    { type === 'master' && <Card>
      <CardImg className="img-container" src={cover_image} alt={title}></CardImg>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Country: {country}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {year}</CardSubtitle>
          <CardText>Master ID: {id}</CardText>
          { user
            ? <Button onClick={() => handleProjectsButton('edit')}>Add Master to Collection</Button>
            : ''
          }
          { editing && <ModalExample
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
                setResults={setResults}
              />
            }
        </CardBody>
      </Card>
    }
    </>
  );
};

AlbumCard.propTypes = {
  setResults: PropTypes.func,
  firebaseKey: PropTypes.string,
  title: PropTypes.string,
  country: PropTypes.string,
  cover_image: PropTypes.string,
  barcode: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.number,
  user: PropTypes.any,
  uid: PropTypes.any,
  notes: PropTypes.string,
};

export default AlbumCard;
