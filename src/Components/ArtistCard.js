/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Card, CardLink,
  CardTitle, CardBody, CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import ArtistForm from '../helpers/Forms/AddArtist';

const ArtistCard = ({
  setResults,
  firebaseKey,
  title,
  cover_image,
  id,
  user,
  notes
}) => {
  const [editing, setEditing] = useState(false);

  // useEffect(() => {
  //   getPrice()
  //     .then((PriceArray) => {
  //       setPrice(PriceArray);
  //     });
  // }, []);

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
    <Card>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
      </CardBody>
      { cover_image === 'https://img.discogs.com/6c5b98990fbff2daf939300d206a3d6a6bd159f0/images/spacer.gif'
        ? <img width="100%" className="img-container" src="https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg" alt={title}/>
        : <img width="100%" className="img-container" src={cover_image} alt={title}/>
      }
      <CardBody>
        <CardText>Artist ID: {id}</CardText>
        <CardLink className="delete-link" onClick={() => handleProjectsButton('edit')}>Add</CardLink>
        { cover_image === '' && <CardText>No Image Found</CardText> }
        {
          editing && <ArtistForm
          title={title}
          cover_image={cover_image}
          firebaseKey={firebaseKey}
          notes={notes}
          user={user}
          id={id}
          setResults={setResults}
          />
        }
      </CardBody>
      </Card>
  );
};

ArtistCard.propTypes = {
  setResults: PropTypes.func,
  firebaseKey: PropTypes.string,
  title: PropTypes.string,
  country: PropTypes.string,
  cover_image: PropTypes.string,
  barcode: PropTypes.array,
  year: PropTypes.string,
  id: PropTypes.number,
  notes: PropTypes.string,
  user: PropTypes.any
};

export default ArtistCard;
