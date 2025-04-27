import NavLink from "./navLink.jsx";
import { Link } from "react-router-dom"

export default function Navbar() {

    return <nav className="horizontal-nav">
        <ul>
            <Link to="/" className="title">ShipMint</Link>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
        </ul>
        <ul>
            <NavLink to="/about">User</NavLink>
        </ul>
    </nav>
}
