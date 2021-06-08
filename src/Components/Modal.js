/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody
} from 'reactstrap';
import AlbumsForm from '../helpers/Forms/AddAlbum';
import ArtistForm from '../helpers/Forms/AddArtist';
import LabelForm from '../helpers/Forms/AddLabel';
import MasterForm from '../helpers/Forms/AddMaster';

const ModalExample = ({
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
  notes
}) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
        { type === 'artist' && <ArtistForm
              title={title}
              cover_image={cover_image}
              firebaseKey={firebaseKey}
              notes={notes}
              id={id}
              uid={uid}
              user={user}
              type={type}
              setResults={setResults}
            />
        }
        { type === 'release' && <AlbumsForm
              title={title}
              cover_image={cover_image}
              firebaseKey={firebaseKey}
              notes={notes}
              country={country}
              format={format}
              year={year}
              uid={uid}
              user={user}
              type={type}
              id={id}
              barcode={barcode}
              setResults={setResults}
            />
        }
        { type === 'label' && <LabelForm
              title={title}
              cover_image={cover_image}
              firebaseKey={firebaseKey}
              notes={notes}
              uid={uid}
              user={user}
              type={type}
              id={id}
              setResults={setResults}
            />
        }
        { type === 'master' && <MasterForm
              title={title}
              cover_image={cover_image}
              firebaseKey={firebaseKey}
              notes={notes}
              uid={uid}
              user={user}
              type={type}
              id={id}
              setResults={setResults}
            />
        }
        </ModalBody>
      </Modal>
    </div>
  );
};

ModalExample.propTypes = {
  setResults: PropTypes.func,
  firebaseKey: PropTypes.string,
  title: PropTypes.string,
  country: PropTypes.string,
  cover_image: PropTypes.string,
  barcode: PropTypes.array,
  type: PropTypes.string,
  format: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.number,
  user: PropTypes.any,
  uid: PropTypes.any,
  notes: PropTypes.string,
};

export default ModalExample;
