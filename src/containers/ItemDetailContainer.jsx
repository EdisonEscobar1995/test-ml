import { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner, Row, Col, Container } from 'react-bootstrap';
import ProductDetail from '../components/ProductDetail';

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  const getDetail = useCallback(async () => {
    if (id) {
      try {
        const response = await axios.get('/api/items/' + id);
        if (response.data.status !== 404) {
          setData(response.data);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error('Error en getDetail = ', error);
      }
    }
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setData({});
    setError(false);
    getDetail();
  }, [getDetail]);

  return (
    <>
      {loading && (
        <div className='loading-spinner'>
          <Spinner
            animation='border'
            role='status'
            variant='secundary'
          />
        </div>
      )}
      {Object.keys(data).length > 0 && <ProductDetail data={data} />}
      {error && (
        <Container>
          <Row style={{ minHeight: 'calc(100vh - 100px)' }}>
            <Col>
              <strong style={{ fontSize: '1.5rem' }}>
                {`Item '${id}' no encontrado`}
              </strong>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
