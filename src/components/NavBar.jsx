import CartWidget from './CartWidget';
import '../styles/NavBar.css'

const NavBar = () => {
  return(
    <nav className="nav-container">
      <div className="logo">
        <a href="#">
          <img src="/logoStore.png" alt="Logo"/>
        </a>
      </div>
      
      <div className="nav-right">
        <div className="nav-links">
          <a href="#">Nuevos productos</a>
          <a href="#">Más vendidos</a>
          <a href="#">Ofertas</a>
        </div>
      
        <CartWidget/>
      </div>
      
    </nav>
  )
}

export default NavBar;