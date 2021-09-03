import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav ,NavbarContainer, NavLogo,MobileIcon, NavMenu, NavItem, NavLinks,
NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
      <>
       <Nav>
           <NavbarContainer>
               <NavLogo to='/'> Foodi95 </NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars />

               </MobileIcon>
               <NavMenu>

               <NavItem>
               <NavLinks to="about">About</NavLinks>
               </NavItem>

               <NavItem>
               <NavLinks to="wedding">Weddings</NavLinks>
               </NavItem>

               <NavItem>
               <NavLinks to="dinner">Host a Dinner</NavLinks>
               </NavItem>

               <NavItem>
               <NavLinks to="dine">Dine With Our Chefs</NavLinks>
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
