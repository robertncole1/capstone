/* eslint-disable camelcase */
import React from 'react';
import {
  Card, CardText, CardSubtitle,
  CardTitle, CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';

const PublicCollectionCard = ({
  title,
  type,
  country,
  cover_image,
  barcode,
  year,
  format,
}) => (
    <>
    <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Country: {country}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {year}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Format: {format}</CardSubtitle>
        </CardBody>
        <img width="100%" className="img-container" src={cover_image} alt={title}/>
        <CardBody>
          <CardText>Barcodes: {barcode}</CardText>
        </CardBody>
      </Card>
    </>
);

PublicCollectionCard.propTypes = {
  title: PropTypes.string,
  country: PropTypes.string,
  cover_image: PropTypes.string,
  barcode: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
  year: PropTypes.string,
};

export default PublicCollectionCard;
