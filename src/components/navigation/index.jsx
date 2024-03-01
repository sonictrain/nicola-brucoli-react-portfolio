import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='mt-16'>
      <div className="hover:text-accent-200 hover:before:content-['>']">
        <NavLink
          to="/"
          className={
            ({ isActive }) =>
              isActive
                ? "text-accent-200 font-bold before:content-['>']"
                : ""
          }
          end>
          Home
        </NavLink>
      </div>
      <div className="hover:text-accent-200 hover:before:content-['>']">
        <NavLink
          to="skills"
          className={
            ({ isActive }) =>
              isActive
                ? "text-accent-200 font-bold before:content-['>']"
                : ""
          }
          end>
          Skills
        </NavLink>
      </div>
      <div className="hover:text-accent-200 hover:before:content-['>']">
        <NavLink
          to="projects"
          className={
            ({ isActive }) =>
              isActive
                ? "text-accent-200 font-bold before:content-['>']"
                : ""
          }
          end>
          Projects
        </NavLink>
      </div>
      <div className="hover:text-accent-200 hover:before:content-['>']">
        <NavLink
          to="contactForm"
          className={
            ({ isActive }) =>
              isActive
                ? "text-accent-200 font-bold before:content-['>']"
                : ""
          }
          end>
          Contacts
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;