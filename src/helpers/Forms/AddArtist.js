/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addArtist, updateArtist } from '../data/axios';

const ArtistForm = ({
  title,
  cover_image,
  firebaseKey,
  notes,
  type,
  id,
  user,
  setResults,
}) => {
  const [result, setResult] = useState({
    title: title || '',
    cover_image: cover_image || '',
    notes: notes || '',
    type: type || '',
    id: id || '',
    uid: user.uid || null,
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setResult((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (result.firebaseKey) {
      updateArtist(result, user).then(setResults);
    } else {
      addArtist(result, user).then(() => {
        history.push('/collection');
      });
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Add Artist to Collecton</h2>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            name='title'
            id='title'
            value={result.title}
            readOnly="readOnly"
            type='text'
            placeholder='Enter a Title'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="cover_image">Image:</Label>
          <Input
            name='cover_image'
            id='cover_image'
            value={result.cover_image}
            readOnly="readOnly"
            type='text'
            placeholder='Enter a Image'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="id">Album ID:</Label>
          <Input
            name='id'
            id='id'
            value={result.id}
            readOnly="readOnly"
            type='text'
            placeholder='Enter a ID'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="notes">Notes:</Label>
          <Input
            name='notes'
            id='notes'
            value={result.notes}
            type='text'
            placeholder='Enter Notes About Artist'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

ArtistForm.propTypes = {
  title: PropTypes.string,
  cover_image: PropTypes.string,
  firebaseKey: PropTypes.string,
  notes: PropTypes.string,
  user: PropTypes.any,
  type: PropTypes.string,
  id: PropTypes.number,
  setResults: PropTypes.func
};

export default ArtistForm;
