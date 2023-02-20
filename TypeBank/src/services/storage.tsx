interface ITypeBank {
  login: boolean
}

const typeBank = {
  login: false
}

export const getLocalStorage = (): string | null => {
  return localStorage.getItem('typebank')
}

export const createLocalStorage = (): void => {
  localStorage.setItem('typebank', JSON.stringify(typeBank))
}

export const changeLocalStorage = (typebank: ITypeBank): void => {
  localStorage.setItem('typebank', JSON.stringify(typeBank))
}
