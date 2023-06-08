import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>
      <h3>{counter}</h3>
      <Button variant="contained" onClick={restar}>
        Restar
      </Button>
      <Button variant="contained" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
    </div>
  );
};

export default CounterPresentation;
