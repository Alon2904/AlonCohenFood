import React from 'react';
import { SidebarContainer,Icon,CloseIcon, 
SidebarWrapper, SidebarLink, SidebarMenu, 
SideBtnWrap, SidebarRoute} from './SidebarElements';


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                    About
                    </SidebarLink>
                    

                    <SidebarLink to="wedding" onClick={toggle}>
                    Weddings
                    </SidebarLink>

                    <SidebarLink to="dinner" onClick={toggle}>
                    Host a Dinner
                    </SidebarLink>

                    <SidebarLink to="dine" onClick={toggle}>
                    Dine With Our Chefs
                    </SidebarLink>


                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>

                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                    Sign in
                     </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
