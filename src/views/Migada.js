import React, { useState, useEffect } from 'react';
import { Wheel } from '../components';

const Migada = () => {
  const [victim, setVictim] = useState('FunkyPandaLover');
  const [fiftyFifty, setFiftyFifty] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const updatedOptions = [];
    if (fiftyFifty) {
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
  }, []);

  return (
    <div>
      <Wheel options={options} />
    </div>
  );
};

export default Migada;
