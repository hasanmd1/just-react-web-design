import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/Logo_.png'
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#aboutUs'>About Us</a></p>
    <p><a href='#possibility'>Calculate Pricing Cost</a></p>
    <p><a href='#features'>Why Us?</a></p>
    <p><a href='#blog'>News</a></p> 
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu]  = useState(false);

  return (
    <div className='ship__navbar'>
      <div className='ship__navbar-links'>
        <div className='ship__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='ship__navbar-links_containers'>
          <Menu/>
        </div>
      </div>
      <div className='ship__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='ship__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
        }
        { toggleMenu && (
          <div className='ship__navbar-menu_containers scale-up-center'>
            <div classNa me='ship__navbar-menu-links'>
              <Menu/>
              <div className='ship__navbar-menu_containers-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )

        }
      </div>
    </div>
  )
}

export default Navbar