import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
       <>
         <nav className="navbar">
           <Link to="/">Home</Link>
           <Link to="/products">Products</Link>
         </nav>
       </>
    )
}export default Navbar;