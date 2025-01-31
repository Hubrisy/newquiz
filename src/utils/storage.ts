export const setToSessionStorage = (key: string, value: string) => {
  try {
    sessionStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

export const getFromSessionStorage = (key: string): string => {
  try {
    const value = sessionStorage.getItem(key)

    if (value) {
      return value
    }
  } catch (e) {
    console.error(e)
  }

  return ""
}
