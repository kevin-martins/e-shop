export const average = (ratings: number[]): number => {
  return ratings.reduce((acc, curr) => curr += acc, 0) / ratings.length
}

export const normalisePrice = (price: number): number => {
  return price / 100 
}

export const priceToEuro = (price: number): string => {
  return price.toString().replace('.', ',')
}