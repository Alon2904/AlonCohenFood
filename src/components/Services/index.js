import React from 'react'
import { ServicesCard,
     ServicesContainer,
      ServicesH1,
       ServicesH2,
        ServicesIcon,
         ServicesP,
          ServicesWrapper } from './ServicesElements';
import CallIcon from '../../images/call.png';
import MessageIcon from '../../images/message.png';
import EmailIcon from '../../images/email.png';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon  src={CallIcon}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We Help Reduce your fees and increase bla bla</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon  src={MessageIcon}/>
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>accses our plaftorm online anywaherea</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon  src={EmailIcon}/>
                    <ServicesH2>premium benefits</ServicesH2>
                    <ServicesP>unlock our carb lorem iposum</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
