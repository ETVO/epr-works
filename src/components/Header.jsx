import { NavLink } from "react-router";

export default function Header() {
  let defaultStyle = 'text-base hover-underline leading-normal';
  let activeStyle = defaultStyle + ' font-bold';
  return (
    <div className="Header">
      <header className="flex justify-between items-center py-4 px-4 sm:px-6">
        <ul className="flex flex-row gap-6">
          <li>
            <NavLink to="/" className={defaultStyle}>EPR Works</NavLink>
          </li>
        </ul>
        <ul className="flex flex-row gap-6">
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Resume</NavLink>
          </li>
          <li>
            <NavLink to="/extras" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Extras</NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}