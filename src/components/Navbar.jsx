import { NavLink } from 'react-router-dom';
import navLogo from '../assets/logos/2gcc.png';

export const Navbar = () => {
 return (
 <nav>
       <ul className="navbar">
          <li className="flex1">
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">
            <img src={navLogo} className="navlogo" alt="logo"/>
            </NavLink>
          </li>
          <li className="flex1 last">
             <NavLink to="/saved">Sparade pins</NavLink>
             <NavLink to="/inspiration">Inspiration</NavLink>
          </li>
       </ul>
 </nav>
 );
};