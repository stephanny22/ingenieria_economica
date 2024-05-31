const decimales = 5;

const conversion_efectiva = (interes, periodo) =>
  (parseFloat(interes) / (12 / parseFloat(periodo))).toFixed(decimales);
const conversion_nominal = (interes, periodo) =>
  (parseFloat(interes) * (12 / parseFloat(periodo))).toFixed(decimales);
const conversion_ordinaria = (ia) => (ia / (1 - ia)).toFixed(decimales);
const conversion_anticipada = (i) =>
  (parseFloat(i) / (1 + parseFloat(i))).toFixed(decimales);
const equivalencia_tasas = (interes, periodo_a, periodo_b) =>
  (
    Math.pow(
      Math.pow(1 + parseFloat(interes), 12 / parseFloat(periodo_a)),
      1 / (12 / parseFloat(periodo_b))
    ) - 1
  ).toFixed(decimales);

export const conversion_interes = (datos) => {
  const { entrada, conversion } = datos;
  let aux = 0.0;

  if (entrada.tipo_tasa === "j")
    aux = conversion_efectiva(entrada.interes, entrada.periodo);
  else aux = parseFloat(entrada.interes);

  if (entrada.tipo_interes === "ia") aux = conversion_ordinaria(aux);

  if (entrada.periodo !== conversion.periodo)
    aux = equivalencia_tasas(aux, entrada.periodo, conversion.periodo);

  if (conversion.tipo_interes === "ia") aux = conversion_anticipada(aux);

  if (conversion.tipo_tasa === "j")
    aux = conversion_nominal(aux, conversion.periodo);

  return aux;
};
