import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  img {
    width: 42px;
    height: 42px;
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

export const Colum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  background-color: #15121f;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.div`
  width: 172px;
  height: 20px;
  background: #2d2d37;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
`
export const Menu = styled.a`
  font-family: 'Open Sans, sans-serif';
  font-weight: bold;
  margin-left: 1rem;
  font-size: 16px;
  line-height: 25px;
  color: white;
  text-decoration: none;
  margin-right: 12px;
`
export const MenuRight = styled.a`
  font-family: 'Open Sans, sans-serif';
  font-size: normal;
  font-size: 12px;
  line-height: 25px;
  color: white;
  text-decoration: none;
  margin-right: 12px;
`

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 2px solid white;
  margin-right: 8px;
`
export const Input = styled.input`
  background: transparent;
  flex: 1;
  color: white;
`
