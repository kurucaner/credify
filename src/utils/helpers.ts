export const generateStars = (length: number, maskCharacter?: string) => {
  return new Array(length).fill(maskCharacter || "*").join("");
};
