import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
   return (
      <>
         <header>
            <Link to="/">
               <img src={logo} alt="logo Kasa" />
            </Link>
            <nav>
               <ul>
                  <li>
                     <NavLink to="/">Accueil</NavLink>
                  </li>
                  <li>
                     <NavLink to="/about">A propos</NavLink>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
}

export default Header;
