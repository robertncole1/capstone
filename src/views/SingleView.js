/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import {
  Container, Row, Col
} from 'reactstrap';
import { getNumForSale, getPrice, getSingleAlbum } from '../helpers/data/axios';

export default function SingleView() {
  const [album, setAlbum] = useState({});
  const [result, setResult] = useState([]);
  const [sale, setSale] = useState([]);
  const { firebaseKey } = useParams();

  const handleGetPrice = (a) => {
    getPrice(a.id)
      .then((priceArray) => setResult(priceArray));
  };

  useEffect(() => {
    getSingleAlbum(firebaseKey)
      .then((a) => {
        setAlbum(a);
        getNumForSale(a.id)
          .then((saleArray) => setSale(saleArray));
        handleGetPrice(a);
      });
  }, []);

  return (
    <div className="single-album">
    <Container>
        <Row>
          <Col>
            <img width="100%" className="single-img" src={album.cover_image} alt={album.title}/>
          </Col>
          <Col>
            <h3>{album.title}</h3>
            <h6>Country: {album.country}</h6>
            <h6>Year: {album.year}</h6>
            <p>Barcode: {album.barcode}</p>
            <p>Notes: {album.notes}</p>
            <div className="marketplace-data">
              <h6>MarketPlace Information:</h6>
              { result > 1 && <p>Lowest Selling Price: ${result}</p> }
              { result === null && <p>None for Sale</p> }
              { sale > 0 && <p>Number for Sale: {sale}</p> }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
