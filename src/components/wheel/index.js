import React, { useState } from 'react';
import './index.css';

const Wheel = (props) => {
  const items = props.options;
  const handleBan = props.ban;
  const [selectedItem, setSelected] = useState(null);
  const [spinning, setSpinning] = useState(null);

  const selectItem = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 4000);
    const item = Math.floor(Math.random() * items.length);
    setSelected(item);
    if (items[item].startsWith('Ban')) {
      setTimeout(
        () => handleBan(items[item].substr(items[item].indexOf(' ') + 1)),
        3800
      );
    }
  };

  const isSpinning = spinning ? 'spinning' : '';

  const wheelVars = {
    '--nb-item': items.length,
    '--selected-item': selectedItem,
  };

  return (
    <div className="wheel-container">
      <div
        className={`wheel ${isSpinning}`}
        style={wheelVars}
        onClick={selectItem}
      >
        {items.map((item, index) => (
          <div
            className="wheel-item"
            key={index}
            style={{ '--item-nb': index }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wheel;
