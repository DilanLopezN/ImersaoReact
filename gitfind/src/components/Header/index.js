import './style.css'

import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <>
      <header>
        <FaGithub size={26} color="white" />
        <h1>GitFind</h1>
      </header>
    </>
  )
}
