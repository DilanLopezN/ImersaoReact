export const getLocalStorage = () => {
  return localStorage.getItem('')
}

const typeBank = {
  login: false
}

export const createLocalStorage = (): void => {
  localStorage.setItem('typebank', JSON.stringify(typeBank))
}
