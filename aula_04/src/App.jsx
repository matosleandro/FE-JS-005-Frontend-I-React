import { useState } from 'react';
import ColorSwitch from './components/ColorSwitch';

function App() {

  const [clicks, setClicks] = useState(0);

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  function handleBackgroundClick() {
    setClicks(c => c + 1);
  }

  function handleButtonClick(e) {
    // Impede a propagação do evento para o background
    e.stopPropagation(); 
  }

  return (
    <div style={{ width: '100%', height: '100%' }} onClick={handleBackgroundClick}>
      <h1>Contador de Cliques: {clicks}</h1>
      <ColorSwitch onChangeColor={handleChangeColor} onClick={handleButtonClick} />
    </div>
  );
};

export default App;
