/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import {
  Card, CardLink,
  CardTitle, CardBody, CardSubtitle, CardText
} from 'reactstrap';
import { getPrice, getSingleAlbum } from '../helpers/data/axios';
// import AlbumPrice from './viewPrice';

export default function SingleView() {
  const [album, setAlbum] = useState({});
  const [result, setResult] = useState([]);
  const { firebaseKey } = useParams();
  // const [editing, setEditing] = useState(false);

  useEffect(() => {
    getSingleAlbum(firebaseKey)
      .then(setAlbum);
  }, []);

  const handleGetPrice = () => {
    getPrice(album.id)
      .then((price) => setResult(price));
  };

  return (
    <Card key={album.firebaseKey}>
      <CardBody>
        <CardTitle tag="h5">{album.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Country: {album.country}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {album.year}</CardSubtitle>
      </CardBody>
      <img width="100%" className="img-container" src={album.cover_image} alt={album.title}/>
      <CardBody>
        <CardText>Barcode: {album.barcode}</CardText>
        <CardText>Notes: {album.notes}</CardText>
        <CardLink className="delete-link" onClick={() => handleGetPrice()}>View Price</CardLink>
        { result > 1 && <CardText>Lowest Selling Price: ${result}</CardText> }
      </CardBody>
      </Card>
  );
}
