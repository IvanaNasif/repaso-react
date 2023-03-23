import { useState } from "react";
import Card from "./Card";

const Formulario = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const cleanValue = e.target.value.trim();
    setInputValue(cleanValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      console.error('no se puede enviar un valor vacio')
      return
    }
    console.log("enviando...", inputValue);
    props.onAgregar(inputValue)
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Agregar</button>
      </form>
    </Card>
  );
};

export default Formulario;