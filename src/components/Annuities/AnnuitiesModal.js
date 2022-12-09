import { Modal } from "react-bootstrap";
import { formatter } from "../../utils";

export const AnnuitiesModal = ({ show, handleClose, result, getValues }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Anualidades</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {getValues("tipoOperacion") === "cuota" &&
          `La cuota es de ${formatter.format(result)}.`}
        {getValues("tipoOperacion") === "anualidad" &&
          `La anualidad es de ${formatter.format(result)}.`}
        {getValues("tipoOperacion") === "periodo" &&
          `El número de periodos es de ${result}.`}
        {getValues("tipoOperacion") === "grace" &&
          `El tiempo de gracia es de ${result}.`}
      </Modal.Body>
    </Modal>
  );
};
