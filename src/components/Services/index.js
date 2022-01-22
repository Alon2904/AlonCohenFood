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
        <ServicesContainer id="contact">
            <ServicesH1>Contact us Today</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon  src={CallIcon}/>
                    <ServicesH2>Call us</ServicesH2>
                    <ServicesP>Talk to one of our event planners!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon  src={MessageIcon}/>
                    <ServicesH2>Message us</ServicesH2>
                    <ServicesP>Send us a message on Whatsapp and we will get in touch with you </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon  src={EmailIcon}/>
                    <ServicesH2>Send us an email</ServicesH2>
                    <ServicesP>Send us an email and we will talk to you as soon as possible</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
