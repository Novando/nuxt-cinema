export const shortStr = (val: string, len = 64) => {
  return `${val.slice(0, len)}...`
}