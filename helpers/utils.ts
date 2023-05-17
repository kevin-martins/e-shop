export const average = (ratings: number[]): number => {
  const somme = ratings.reduce((acc, curr) => curr += acc, 0)
  return somme / ratings.length
}