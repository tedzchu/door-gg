import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Wheel } from '../../components';
import './index.css';

const Migada = () => {
  const victim = 'FunkyPandaLover';
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const updatedOptions = [];
    Array.from({ length: 3 }).forEach(() => {
      updatedOptions.push(`Ban ${victim}`);
      updatedOptions.push(`Spare ${victim}`);
    });
    setOptions(updatedOptions);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <iframe
            className="twitch-chat"
            title="Twitch Chat"
            scroll="no"
            src="https://www.twitch.tv/embed/it_door/chat?darkpopout&parent=www.door.gg"
          ></iframe>
        </Col>
        <Col md={6}>
          <Wheel options={options} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Migada;
