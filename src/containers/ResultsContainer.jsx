import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner, Row, Col, Container } from 'react-bootstrap';
import Results from '../components/Results';

export const ResultsContainer = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  const getItems = useCallback(async () => {
    if (query) {
      try {
        const response = await axios.get("/api/items?q=" + query);
        if (response.data.status !== 404) {
          setData(response.data);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error('Error en getItems = ', error);
      }
    }
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setData({});
    setError(false);
    getItems();
  }, [getItems]);

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
      {Object.keys(data).length > 0 && <Results data={data} />}
      {error && (
        <Container>
          <Row style={{ minHeight: 'calc(100vh - 100px)' }}>
            <Col>
              <strong style={{ fontSize: '1.5rem' }}>
                {`Búsqueda no encontrada.`}
              </strong>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
};
