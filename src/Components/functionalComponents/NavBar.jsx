import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

export const NavBar = () => {
    return (
        <nav className='navBar'>
            <div className="container">
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to='/HomePage'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/MyPosts'>Mi Post's</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}