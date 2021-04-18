import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Formulario() {
  const [personas, setPersonas] = useState([]);
  const [nombre, setNombre] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setNombre(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersonas([...personas, nombre]);
  };

  return (
    <div>
      <Form
        className="formulario"
        style={{ width: "25rem" }}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            required
            onChange={handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group> */}
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <ul className="mt-4">
          {personas.map((persona) => (
            <li>{persona}</li>
          ))}
        </ul>
      </Form>
    </div>
  );
}
