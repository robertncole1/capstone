/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addGear, updateGear } from '../data/axios';

const GearForm = ({
  gearDescription,
  gearName,
  gearImg,
  notes,
  modelNum,
  firebaseKey,
  user,
  setModal,
  setGear
}) => {
  const [result, setResult] = useState({
    gearName: gearName || '',
    gearDescription: gearDescription || '',
    gearImg: gearImg || '',
    notes: notes || '',
    modelNum: modelNum || '',
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
      updateGear(result, user).then(setGear);
      setModal(false);
    } else {
      addGear(result, user).then(() => {
        history.push('/gear');
      });
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Add Gear to Collecton</h2>
        <FormGroup>
          <Label for="gearName">Gear Name:</Label>
          <Input
            name='gearName'
            id='gearName'
            value={result.gearName}
            type='test'
            placeholder='Enter Gear Name'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gearImg">Gear Image:</Label>
          <Input
            name='gearImg'
            id='gearImg'
            value={result.gearImg}
            type='url'
            placeholder='Enter Gear Image'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gearDescription">Gear Description:</Label>
          <Input
            name='gearDescription'
            id='gearDescription'
            value={result.gearDescription}
            type='text'
            placeholder='Enter Gear Description'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="modelNum">Model Number:</Label>
          <Input
            name='modelNum'
            id='modelNum'
            value={result.modelNum}
            type='text'
            placeholder='Enter Model Number'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes:</Label>
          <Input
            name='notes'
            id='notes'
            value={result.notes}
            type='textarea'
            placeholder='Enter Notes About Artist'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

GearForm.propTypes = {
  gearDescription: PropTypes.string,
  gearName: PropTypes.string,
  notes: PropTypes.string,
  modelNum: PropTypes.string,
  firebaseKey: PropTypes.string,
  user: PropTypes.any,
  gearImg: PropTypes.string,
  setModal: PropTypes.func,
  setGear: PropTypes.func,
};

export default GearForm;
