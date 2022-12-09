export const paymentType = (pay) => {
  return (pay === "i" && "Ordinaria") || (pay === "ia" && "Anticipada");
};
