import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors, onColorSelect }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
    onColorSelect(color); // Call the callback with the selected color

    // Set a CSS variable for the selected color
    document.documentElement.style.setProperty('--selectedColor', color);
  };

  return (
    <div className="color-picker">
      <div className="color-bar">
        {showColorList && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
        )}
      </div>
      <button onClick={toggleColorList}>Select a color</button>
      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          {selectedColor}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
