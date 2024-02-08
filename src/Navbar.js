import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
export default function Navbar({onSearch}) {
  return (
    <div>
        <nav className='navbar'>
            <h1 className='heading'>WATCH SHOW</h1>
            <ul className='nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/tv">TV Shows</Link>
                </li>
                <li>
                    <Link to="/favmov">Favourites Movies</Link>
                </li>
                <li>
                    <Link to="/favtv">Favourite TV Shows</Link>
                </li> 
            </ul>
            <SearchBar onSearch={onSearch}/>
        </nav>
    </div>
  )
}
