import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav ,NavbarContainer, NavLogo,MobileIcon, NavMenu, NavItem, NavLinks,
NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };


useEffect(() => {
    window.addEventListener('scroll', changeNav);
}, []);

const toggleHome = () => {
    scroll.scrollToTop();
}

    return (
      <>
       <Nav scrollNav={scrollNav}>
           <NavbarContainer>
               <NavLogo to='/' onClick={toggleHome}> Foodi95 </NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars />

               </MobileIcon>
               <NavMenu>

               <NavItem>
               <NavLinks to="about"
               smooth={true} duration={500} spy={true} exact='true'
               offset={-80}
               >About</NavLinks>
               </NavItem>

               <NavItem>
               <NavLinks to="wedding"
               smooth={true} duration={500} spy={true} exact='true'
               offset={-80}
               >Weddings</NavLinks>
               </NavItem>

               <NavItem>
               <NavLinks to="dinner"
               smooth={true} duration={500} spy={true} exact='true'
               offset={-80}
               >Host a Dinner</NavLinks>
               </NavItem>

               <NavItem>
               <NavLinks to="dine"
               smooth={true} duration={500} spy={true} exact='true'
               offset={-80}
               >Dine With Our Chefs</NavLinks>
               </NavItem>

               <NavItem>
               <NavLinks to="contact"
               smooth={true} duration={500} spy={true} exact='true'
               offset={-80}
               >Contact</NavLinks>
               </NavItem>



               </NavMenu>
               <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink> 
               </NavBtn>
              
               
           </NavbarContainer>
       </Nav>
      </>
    );
}

export default Navbar
