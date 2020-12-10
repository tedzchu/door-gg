import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Wheel } from '../../components';
import './index.css';

const migadaTheme = new Audio('/migadaTheme.mp3');
const migadaBan = new Audio('/migadaBan.wav');

const Migada = () => {
  migadaTheme.play();
  const [victim, setVictim] = useState('FunkyPandaLover');
  const [roulette, setRoulette] = useState(true);
  const [options, setOptions] = useState([]);
  const [muted, setMute] = useState(false);
  const [banCommand, setBanCommand] = useState('');

  useEffect(() => {
    const updatedOptions = [];
    if (!roulette) {
      Array.from({ length: 3 }).forEach(() => {
        updatedOptions.push(`Ban ${victim}`);
        updatedOptions.push(`Spare ${victim}`);
      });
    } else {
      updatedOptions.push(`Ban ${victim}`);
      Array.from({ length: 5 }).forEach(() => {
        updatedOptions.push(`Spare ${victim}`);
      });
    }
    setOptions(updatedOptions);
  }, [victim, roulette]);

  const newVictim = (username) => {
    setVictim(username);
    setBanCommand('');
  };
  const handleBan = (username) => {
    setMute(true);
    setTimeout(() => {
      migadaBan.play();
      setBanCommand(`/timeout ${username} 600`);
    }, 500);
  };

  const toggleRoulette = () => setRoulette(!roulette);

  const toggleMute = () => setMute(!muted);
  if (muted) {
    migadaTheme.pause();
    migadaTheme.currentTime = 0;
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>RAUL ROYALE</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <iframe
            className="twitch-chat"
            title="Twitch Chat"
            frameBorder="0"
            scroll="no"
            src="https://www.twitch.tv/embed/migada/chat?darkpopout&parent=www.door.gg&parent=door.gg&parent=localhost"
          ></iframe>
        </Col>
        <Col>
          <Wheel options={options} ban={handleBan} />
        </Col>
        <Col>
          <input
            type="text"
            value={victim}
            onChange={(e) => newVictim(e.target.value)}
          ></input>
          <button onClick={toggleMute}>MUTE</button>
          <button
            onClick={toggleRoulette}
            className={`${roulette ? '' : 'hard-mode'}`}
          >
            HARD MODE
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{banCommand}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Migada;
