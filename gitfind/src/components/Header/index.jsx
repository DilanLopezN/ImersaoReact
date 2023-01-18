import './style.css'

import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <>
      <header>
        <FaGithub size={26} color="#846dd8" />
        <h1>
          <span id="shadowGit">Git</span>find
        </h1>
      </header>
    </>
  )
}
