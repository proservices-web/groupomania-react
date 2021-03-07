import React, {useContext} from 'react'
import { NavLink} from 'react-router-dom'

import { AuthContext } from '../../context/auth.context'
import './NavBar.css'


export default function NavBar(){

    const auth = useContext(AuthContext)
   //const logout = ()=>  localStorage.removeItem('auth')

    
    return(
        <div className='navbar__container'>
            <h1 className ="logo">SOCIAL<span style={{ color : "blue", fontSize : '2rem'}}> NET BEURK</span></h1>
            <nav className='navigation'>
                <ul>
                    {!auth.loggedIn && (
                        <li><NavLink to='/login'>Connexion</NavLink> </li>
                    )}
                    {!auth.loggedIn && (
                        <li><NavLink to='/signup'>Inscription</NavLink></li>
                    )}
                    { auth.loggedIn && (
                        <li><NavLink to='/add-post'>Ajouter</NavLink> </li>
                    )}
                    { auth.loggedIn && (
                        <li><NavLink to='/'>Home</NavLink></li>
                    )}
                      { auth.loggedIn && (
                        <li><NavLink to='/posts'>Mes Posts</NavLink></li>
                    )}
                    { auth.loggedIn && (
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                    )}
                    {auth.loggedIn && (
                        //<button className='logout-btn' onClick={auth.Logout }>Deconnexion</button>
                        <i className="fas fa-sign-out-alt fa-lg" onClick={auth.Logout}></i>
                    )}
                </ul>
            </nav>
        </div>
    )
}

