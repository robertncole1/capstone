/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addAlbum, updateRelease } from '../data/axios';

const AlbumsForm = ({
  title,
  cover_image,
  firebaseKey,
  notes,
  country,
  year,
  barcode,
  format,
  id,
  type,
  user,
  setReleases,
  setModal,
  publicCollection,
}) => {
  const [result, setResult] = useState({
    title: title || '',
    cover_image: cover_image || '',
    notes: notes || '',
    country: country || '',
    year: year || '',
    barcode: barcode || '',
    format: format || '',
    type: type || '',
    id: id || '',
    uid: user.uid || null,
    publicCollection: publicCollection || false,
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setResult((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'publicCollection' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (result.firebaseKey) {
      updateRelease(result, user).then(setReleases);
      setModal(false);
    } else {
      addAlbum(result, user).then(() => {
        history.push('/collection');
      });
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Add Album to Collecton</h2>
        <FormGroup>
          <Label for="notes">Notes:</Label>
          <Input
            name='notes'
            id='notes'
            value={result.notes}
            type="textarea"
            placeholder='Enter Notes About Album'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input
            type='checkbox'
            name='publicCollection'
            id='publicCollection'
            checked={result.publicCollection}
            onChange={handleInputChange}
                />
            Make Album Public to Everyone?
        </Label>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

AlbumsForm.propTypes = {
  title: PropTypes.string,
  cover_image: PropTypes.string,
  firebaseKey: PropTypes.string,
  notes: PropTypes.string,
  country: PropTypes.string,
  year: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
  barcode: PropTypes.string,
  id: PropTypes.number,
  user: PropTypes.any,
  publicCollection: PropTypes.bool,
  setReleases: PropTypes.func,
  setModal: PropTypes.func
};

export default AlbumsForm;
