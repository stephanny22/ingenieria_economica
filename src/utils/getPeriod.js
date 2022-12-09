export const getPeriod = (key) => {
  switch (key) {
    case "1":
      return "Mensual";
    case "2":
      return "Bimestral";
    case "3":
      return "Trimestral";
    case "4":
      return "Cuatrimestral";
    case "6":
      return "Semestral";
    case "12":
      return "Anual";
    default:
      return null;
  }
};
