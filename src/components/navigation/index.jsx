import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div>
        <NavLink to="/" end>Home</NavLink>
      </div>
      <div>
        <NavLink to="skills" end>Skills</NavLink>
      </div>
      <div>
        <NavLink to="projects" end>Projects</NavLink>
      </div>
      <div>
        <NavLink to="contactForm" end>Contacts</NavLink>
      </div>
    </>
  );
}

export default Navigation;