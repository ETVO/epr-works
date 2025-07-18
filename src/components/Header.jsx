import { NavLink } from "react-router";

export default function Header() {
  let defaultStyle = 'text-base hover-underline leading-normal';
  let activeStyle = defaultStyle + ' font-bold';
  return (
    <>
      <span className="transition-opacity xs:opacity-0 text-[.65rem] font-light text-gold text-center block mb-[-.5rem]">
        <span className="font-extralight">←</span> scroll <span className="font-extralight">→</span>
        </span>
      <div className="Header overflow-x-scroll mb-6 sm:mb-0 sm:overflow-x-hidden">
        <header className="flex min-w-90 justify-between items-center py-4 px-4 sm:px-6">
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
              <NavLink to="/résumé" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Résumé</NavLink>
            </li>
            <li>
              <NavLink to="/extras" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Extras</NavLink>
            </li>
          </ul>
        </header>
      </div>
    </>
  )
}