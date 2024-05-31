const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const arrayRandomColors = () => {
  let aux = [];
  for (let i = 0; i < 7; i++) {
    aux.push(randomColor());
  }
  return aux;
};

export const randomVariant = () => {
  let variants = ["beam", "bauhaus", "ring", "marble"];
  return variants[Math.floor(Math.random() * variants.length)];
};
