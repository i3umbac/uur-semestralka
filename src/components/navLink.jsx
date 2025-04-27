import { Link } from "react-router-dom"

export default function NavLink( { to, children, ...props }) {
    const path = window.location.pathname
    console.log( {path})
    console.log({to})
    return (
    <li>
        <Link to={to} {...props}>{children}</Link>
    </li>
    )
}