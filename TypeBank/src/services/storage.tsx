export const getLocalStorage = () => {
  return localStorage.getItem('typebank')
}

const typeBank = {
  login: false
}

export const createLocalStorage = (): void => {
  localStorage.setItem('typebank', JSON.stringify(typeBank))
}
