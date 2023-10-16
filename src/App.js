import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'lilac'];

  // State to hold the selected color
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className={`App ${selectedColor ? 'viewport' : ''}`}>
      <ColorPicker
        colors={colors}
        onColorSelect={(color) => setSelectedColor(color)}
      />
    </div>
  );
}

export default App;
