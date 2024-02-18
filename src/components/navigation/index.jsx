import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/" end>About</NavLink>
      </li>
      <li>
        <NavLink to="skills" end>Skills</NavLink>
      </li>
      <li>
        <NavLink to="projects" end>Projects</NavLink>
      </li>
      <li>
        <NavLink to="contacts" end>Contacts</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;