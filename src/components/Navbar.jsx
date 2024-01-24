import { NavLink } from 'react-router-dom';

export const Navbar = () => {
 return (
 <nav>
       <ul className="navbar">
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
             <NavLink to="/saved">Sparade pins</NavLink>
             <NavLink to="/inspiration">Inspiration</NavLink>
          </li>
       </ul>
 </nav>
 );
};