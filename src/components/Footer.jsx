import { NavLink } from "react-router";
import "../styles/Footer.scss"

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="mt-10 pt-4 px-4 sm:px-6 border-t-1 border-gray-100">
        <ul className='flex flex-row justify-between gap-4 text-xs text-gray-500'>
          <li>
            <a className='hover-underline hover:text-gold' href="mailto:estevao.prolim@gmail.com" target='_nlank'>estevao.prolim@gmail.com</a>
          </li>
          <li>
            <a className='hover-underline hover:text-gold' href="https://wa.me/491751443857" target='blank'>+49 0175 1443857</a>
          </li>
        </ul>
        <div className='pattern-divider mt-4'></div>
      </footer>
    </div>
  )
}