import React from 'react';
import { NavLink } from 'react-router-dom';

// Navigation component. Styles apply for hover and active status.
function Navigation() {
  return (
    <nav className='mt-16'>
      {/* HOME */}
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
      {/* SKILLS */}
      <div className="hover:text-accent-200 hover:before:content-['>']">
        <NavLink
          to="/skills"
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
      {/* PROJECTS */}
      <div className="hover:text-accent-200 hover:before:content-['>']">
        <NavLink
          to="/projects"
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
      {/* CONTACTS */}
      <div className="hover:text-accent-200 hover:before:content-['>']">
        <NavLink
          to="/contact"
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