import React, {useContext} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './images/Logo.png';
import './css/Navbar.css';
import { AuthContext } from"../context/authContext";

const Navbar = () => {
    const { currentUser, logout }=useContext(AuthContext);
  return (
    <navbar>
      <div className='navbar'>
        <div className='navbar-left' align='left'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='Logo' />
          </Link>
        </div>
        <div className='navbar-right'>
          <div className='right-icons'>
            <Link to='/Story' className='buttons'>Our Story</Link>
            <div className='right-icon'>
              <Link to='/Write' className='buttons'>Write</Link>
            </div>
            <div className='right-icon'>
              <Link to='/?cat=science' className='buttons'>Science</Link>
            </div>
            <div className='right-icon'>
              <Link to='/?cat=technology' className='buttons'>Technology</Link>
            </div>
            <div className='right-icon'>
              <Link to='/?cat=cinema' className='buttons'>Cinema</Link>
            </div>
            <div className='right-icon'>
              <Link to='/?cat=design' className='buttons'>Design</Link>
            </div>
            <div className='right-icon'>
              <Link to='/?cat=food' className='buttons'>Food</Link>
            </div>
            <span className='nameUser'>{currentUser?.username}</span>
            {currentUser ? (
                <span onClick={logout} className="buttons">Logout</span>
                ) : (
                    <Link className="buttons" to="/login">Login</Link>)}
            <div className='right-icon'>
              
            </div>
            <div className='right-button'>
              <span >
                <Link to='/Register' className='buttons'>
                  <button className='buttons'>Get Started</button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
