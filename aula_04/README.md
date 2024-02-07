# Atividade 1 - Um bug apareceu na festa

Você faz parte da equipe de desenvolvimento da empresa FestTech, responsável por criar componentes para uma aplicação que gerencia festas e eventos. Um dos componentes, chamado ColorSwitch, está apresentando um comportamento inesperado, e é sua missão investigar e corrigir esse bug.

**Objetivo:**

O objetivo desta atividade é conectar o botão do componente **`ColorSwitch`** ao manipulador de eventos **`onChangeColor`** recebido do componente pai.

**Instruções:**

1. **Componente `ColorSwitch`:**
   ```const ColorSwitch = ({ onChangeColor }) => {
      return (
         <button>Alterar Cor</button>
      );
    };
    
    export default ColorSwitch;```
2. **Componente `App`:**
   ```import { useState } from 'react';
    import ColorSwitch from './ColorSwitch';
    
    function App() {
    
      const [clicks, setClicks] = useState(0);
    
      function handleClickOutside() {
        setClicks(c => c + 1);
      }
    
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
      return (
        <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
          <h1>Contador de Cliques: {clicks}</h1>
          <ColorSwitch onChangeColor={handleChangeColor} />
        </div>
      );
    };
    
    export default App;```
3. **Comportamento esperado**
    - Ao clicar no botão do **`ColorSwitch`**, **APENAS** a cor de background deve alterar;
    - O contador deve ser incrementado toda vez que o usuário clicar fora do botão.
