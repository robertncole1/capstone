/* eslint-disable camelcase */
import React from 'react';
import {
  Card, CardSubtitle,
  CardTitle, CardBody, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';

const PublicCollectionCard = ({
  title,
  type,
  country,
  cover_image,
  year,
  format,
}) => (
    <>
    <Card>
    <CardImg alt={title} src={cover_image} top></CardImg>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Type: {type}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Country: {country}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {year}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Format: {format}</CardSubtitle>
        </CardBody>
      </Card>
    </>
);

PublicCollectionCard.propTypes = {
  title: PropTypes.string,
  country: PropTypes.string,
  cover_image: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
  year: PropTypes.string,
};

export default PublicCollectionCard;
