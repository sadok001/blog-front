import React from 'react'
import { logout } from '../../services/authentication'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <span className="nav-link">{` Welcome ${localStorage.getItem('user_name')} !`}</span>
                </li>
            </ul>
            <button className="btn btn-danger" onClick={e => logout()}>Logout</button>
        </nav>
    )
}
