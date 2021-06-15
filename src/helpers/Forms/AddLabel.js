/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { AddLabel, updateLabel } from '../data/axios';

const LabelForm = ({
  title,
  cover_image,
  type,
  firebaseKey,
  notes,
  id,
  user,
  setLabels,
  setModal
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
      updateLabel(result, user).then(setLabels);
      setModal(false);
    } else {
      AddLabel(result, user).then(() => {
        history.push('/collection');
      });
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Add Label to Collecton</h2>
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

LabelForm.propTypes = {
  title: PropTypes.string,
  cover_image: PropTypes.string,
  firebaseKey: PropTypes.string,
  notes: PropTypes.string,
  type: PropTypes.string,
  uid: PropTypes.any,
  user: PropTypes.any,
  id: PropTypes.number,
  setLabels: PropTypes.func,
  setModal: PropTypes.func
};

export default LabelForm;
