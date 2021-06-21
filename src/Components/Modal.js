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
import GearForm from '../helpers/Forms/AddGear';

const ModalExample = ({
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
  publicCollection,
  setReleases,
  setMasters,
  setLabels,
  setArtists,
  gearName,
  gearDescription,
  modelNum,
  gearImg,
  setGear,
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
              setArtists={setArtists}
              setModal={setModal}
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
              publicCollection={publicCollection}
              barcode={barcode}
              setReleases={setReleases}
              setModal={setModal}
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
              setLabels={setLabels}
              setModal={setModal}
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
              setMasters={setMasters}
              setModal={setModal}
            />
        }
        { gearName && <GearForm
            firebaseKey={firebaseKey}
            gearName={gearName}
            gearDescription={gearDescription}
            modelNum={modelNum}
            gearImg={gearImg}
            notes={notes}
            user={user}
            setGear={setGear}
            setModal={setModal}
          />
        }
        </ModalBody>
      </Modal>
    </div>
  );
};

ModalExample.propTypes = {
  setReleases: PropTypes.func,
  setArtists: PropTypes.func,
  setLabels: PropTypes.func,
  setMasters: PropTypes.func,
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
  publicCollection: PropTypes.bool,
  uid: PropTypes.any,
  notes: PropTypes.string,
  gearName: PropTypes.string,
  gearDescription: PropTypes.string,
  modelNum: PropTypes.string,
  gearImg: PropTypes.string,
  setGear: PropTypes.func,
};

export default ModalExample;
