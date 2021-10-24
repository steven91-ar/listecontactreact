import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-4 py-0">
            <div className='container'>
                <a href="/" className='navbar-brand'>Ma liste de contact</a>

                <ul className="navbar-nav d-inline-block">
                    <li className="nav-item d-inline-block mr-2">
                        <Link to="/liste" className='nav-link'>Accueil</Link>
                    </li>
                    <li className="nav-item d-inline-block mr-2">
                        <Link to="/ajoute" className='nav-link'>Ajouter</Link>
                    </li>
                    <li className="nav-item d-inline-block mr-2">
                        <Link to="/apropos" className='nav-link'>@ propos</Link>
                    </li>
                    </ul>
                    </div>
                    </nav>
                    </div>
                    )
                }
