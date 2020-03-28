import React, {useState} from 'react'
import './navbar.css'

const Navbar = () => {
    let [visible, setVisible] = useState(1)
    let [scrollPos, setScrollPos] = useState(0)
    let [hamburger, setHamburger] = useState(true)
    
    let hamburgerMenu = () =>{
        setHamburger(!hamburger)
    }


    let navbarHide = () =>{
        let currentScrollPos = window.pageYOffset

        if (50 < currentScrollPos){
            setVisible(2)
            setScrollPos(currentScrollPos)            
        }else if (currentScrollPos>50){
            setVisible(3)
            setScrollPos(currentScrollPos)
            console.log(scrollPos-currentScrollPos)
        }
        else{
            setVisible(1)
            setScrollPos(currentScrollPos) 
        }
        // console.log(visible)
    }   
    
    window.addEventListener("scroll", navbarHide);

    return (
        <div>
          <nav className={(visible===1)? 'nav' : (visible===2)?'nav-hide': 'nav-up'}>
              <div className='nav-container'>
                  <a className='name' href=''>
                      <p>Justin Allen</p>
                  </a>
                  <div className='nav-links'>
                      <ul>
                          <a className='nav-link link1' style={{animationDelay:5100}}>
                              <p>Home</p>
                          </a>
                          <a className='nav-link link2'>
                              <p>Technical Portfolio</p>
                          </a>
                          <a className='nav-link link3'>
                              <p>About Me</p>
                          </a>
                          <a className='nav-link link4'>
                              <p>Contact Me</p>
                          </a>
                      </ul>
                  </div>
                  <div onClick={()=>hamburgerMenu()} className='hamburgerMenu'>
                    <div className={hamburger ? 'line line-1' : 'line change-1'}></div>
                    <div className={hamburger ? 'line line-1' : 'line change-2'}></div>
                    <div className={hamburger ? 'line line-1' : 'line change-3'}></div>
                  </div>
                </div>
    
        {/* <nav class='navBar'> */}
 
      
      
      {/* <div class='navItems'>
        <ul class='navList'>
          <li class='navItem'>
            <a href="#" class='navLink'>Home</a>
          </li>
          <li class='navItem'>
            <a href="#about" class='navLink'>About</a>
          </li>
          <li class='navItem'>
              <a href="#projects" class='navLink'>Projects</a>
          </li>
          <li class='navItem'>
            <a href="#contacts" class='navLink'>Contact</a>
          </li>
        </ul>
      </div> */}
            
      
              
          </nav>  
        </div>
    )
}

export default Navbar
