const ColorSwitch = ({ onChangeColor, onClick }) => {
    return (
      <button onClick={(e) => { onChangeColor(); onClick && onClick(e); }}>Alterar Cor</button>
    );
  };
  
  export default ColorSwitch;  