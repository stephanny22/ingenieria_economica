import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const RateConversionInterest = ({ register, errors }) => {
  return (
    <Form>
          <h4 className="mb-3" style={{ textAlign: 'center', color: 'green'}}>Tasa dada:</h4>
      <Form.Group className="mb-3">
        <Form.Label>Interés</Form.Label>
<input
  type="number"
  className={`form-control ${
    errors.interes_entrada ? "is-invalid" : undefined
  }`}
  placeholder="Digite el interés en %"
  min="0.001"
  max="100"
  step="0.001"
  {...register("interes_entrada", {
    valueAsNumber: true,
    required: "El interés es obligatorio.",
    min: {
      value: 0.001,
      message: "El interés debe ser mayor o igual a 0.001"
    },
    max: {
      value: 100,
      message: "El interés debe ser menor o igual a 100."
    },
  })}
/>        <Form.Text className="text-muted">
        minimo:0.001, máximo:100        
        </Form.Text>
      </Form.Group>
      <Form.Label>Capitalización de tasa de interés</Form.Label>

<select
className={`form-select ${
errors.periodo_entrada ? "is-invalid" : undefined
}`}
{...register("periodo_entrada", {
required: "La capitlización de la tasa es obligatorio.",
})}
>
<option value="">Capitalización de la tasa</option>
<option value="12">Anual</option>
<option value="6">Semestral</option>
<option value="4">Cuatrimestral</option>
<option value="3">Trimestral</option>
<option value="2">Bimestral</option>
<option value="1">Mensual</option>

</select>
      <Form.Group className="mb-3">
      <Form.Label>Tipo de tasa de interés</Form.Label>

        <Form.Select className={`form-select ${
        errors.tasa_entrada ? "is-invalid" : undefined
        }`}
        {...register("tasa_entrada", {
        required: "El tipo de tasa es obligatorio.",
        })}>
          <option value="">Tipo de tasa</option>
          <option value="j">Nominal</option>
          <option value="j">Vencida</option>
          <option value="j">Convertible</option>
          <option value="j">Capitalizable</option>
          <option value="i">Efectiva</option>
          <option value="i">Periódica</option>
    </Form.Select>

    <Form.Label>Forma de pago</Form.Label>
    <Form.Select className={`form-select ${
        errors.pago_entrada ? "is-invalid" : undefined
        }`}
        {...register("pago_entrada", {
        required: "La forma de pago a los intereses es obligatoria.",
        })}>
          <option value="">Forma de pago</option>
          <option value="ia">Anticipada</option>
          <option value="i">Ordinaria</option>
    </Form.Select>

      </Form.Group>

    </Form>
    
  );
};


