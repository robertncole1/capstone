/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addAlbum } from '../data/axios';

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
  setResults
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
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setResult((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (result.firebaseKey) {
      console.warn('shit');
    } else {
      addAlbum(result, user).then((ReleasesArray) => setResults(ReleasesArray));
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Add Album to Collecton</h2>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            name='title'
            id='title'
            value={result.title}
            readOnly="readOnly"
            type='text'
            placeholder=''
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
            placeholder=''
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="year">Year:</Label>
          <Input
            name='year'
            id='year'
            value={result.year}
            readOnly="readOnly"
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="format">Format:</Label>
          <Input
            name='format'
            id='format'
            value={result.format}
            readOnly="readOnly"
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="barcode">Barcodes:</Label>
          <Input
            name='barcode'
            id='barcode'
            value={result.barcode}
            readOnly="readOnly"
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="country">Country:</Label>
          <Input
            name='country'
            id='country'
            value={result.country}
            readOnly="readOnly"
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="id">Album ID:</Label>
          <Input
            name='id'
            className='form-id'
            id='id'
            value={result.id}
            readOnly="readOnly"
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </FormGroup>

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
  barcode: PropTypes.array,
  id: PropTypes.number,
  uid: PropTypes.any,
  user: PropTypes.any,
  setResults: PropTypes.func
};

export default AlbumsForm;
