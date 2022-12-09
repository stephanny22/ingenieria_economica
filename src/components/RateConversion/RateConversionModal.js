import { Modal } from "react-bootstrap";
import { capitalizeText, getPeriod, paymentType } from "../../utils";

export const RateConversionModal = ({
  show,
  handleClose,
  result,
  getValues,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Conversión de tasas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {`El interés es de ${result} ${capitalizeText(
          getValues("tasa_salida")
        )} ${getPeriod(getValues("periodo_salida"))} ${paymentType(
          getValues("pago_salida")
        )}.`}
      </Modal.Body>
    </Modal>
  );
};
