import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/navbar.css'

const Navbar = () => {
        return (
            <header>
                <div /*className="menu" onClick={this.menuToggle}*/>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    {/* <h1><Link to="/">Nike</Link></h1> */}
                </div>
                <nav>
                    <ul /*className={toggle ? "toggle" : ""}*/>
                        {/* <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Productos</Link></li>
                        <li><Link to="/contact">Contactos</Link></li>
                        <li><Link to="/about">Acerca</Link></li>
                        <li><Link to="/login">Inicia sesión / Registrarse</Link></li> */}
                        <li /*</ul>className="close" onClick={this.menuToggle}*/>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span></span>
                        {/* <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link> */}
                    </div>
                </nav>
            </header>
        )
    }

export default Navbar