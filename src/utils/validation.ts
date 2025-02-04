export const isNumber = (value: string): boolean => {
  return /^[1-9][0-9]*$/.test(value)
}
