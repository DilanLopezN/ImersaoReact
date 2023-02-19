interface TypeBank {
  login: boolean
}

const typeBank = {
  login: false
}

export const getLocalStorage = () => {
  return localStorage.getItem('typebank')
}

export const createLocalStorage = (): void => {
  localStorage.setItem('typebank', JSON.stringify(typeBank))
}

export const changeLocalStorage = (value: string) => {
  localStorage.setItem('typebank', value)
}
