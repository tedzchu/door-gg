import React, { useState, useEffect } from 'react';
import { Wheel } from '../components';

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
    <div>
      <Wheel options={options} />
    </div>
  );
};

export default Migada;
