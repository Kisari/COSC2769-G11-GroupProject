import React from "react";
import Form from "react-bootstrap/Form";

const FormInput = ({ label, placeholder, type, helperText }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} required />
      {helperText && <Form.Text className="text-muted">helperText</Form.Text>}
    </Form.Group>
  );
};

export default FormInput;
