import Link from 'next/link';
import Logo from './Images/Logo';
import {useSpring, animated} from 'react-spring';

import '../styles/styles.css';

/* CSS Styles */
const backgroundStyle = {
  backgroundColor: '#1b242c'
}

const navStyle = {
  zIndex: '999',
  position: 'relative',
  float: 'right'
}

/* Component Layout */
const Navigation = ({navigationClassName, fadeInNav, logoClassName, logoWidth, drawAnimations}) => {

  const delayWork =7200
  const delayAbout = 7700
  const delayServices = 8200
  const delayContact = 8700
  const fadeInWork = {display: + 'block'}
  const fadeInAbout = {display: + 'block'}
  const fadeInServices = {display: + 'block'}
  const fadeInContact = {display: + 'block'}

  if ({fadeInNav} == true) {
    fadeInWork = useSpring({delay: delayWork, opacity: 1, from: {opacity: 0}})
    fadeInAbout = useSpring({delay: delayAbout, opacity: 1, from: {opacity: 0}})
    fadeInServices = useSpring({delay: delayServices, opacity: 1, from: {opacity: 0}})
    fadeInContact = useSpring({delay: delayContact, opacity: 1, from: {opacity: 0}})
  }

  const navigationLinkClassList = "sm:px-4 md:px-8 navigation-link hover:text-navigation-hover cursor-pointer";

  return (
    <div className={navigationClassName} style={backgroundStyle}>
      <Logo 
        logoClassName={logoClassName}
        logoWidth={logoWidth}
        drawAnimations={drawAnimations}
      />
      <div className="navigation mr-8 sm:w-full md:w-auto" style={navStyle}>
        <Link href="/work">
          <animated.a style={fadeInWork} className={navigationLinkClassList}>Work</animated.a>
        </Link>
        <Link href="/about-me">
          <animated.a style={fadeInAbout} className={navigationLinkClassList}>About Me</animated.a>
        </Link>
        <Link href="/services">
          <animated.a style={fadeInServices} className={navigationLinkClassList}>Services</animated.a>
        </Link>
        <Link href="/contact">
          <animated.a style={fadeInContact} className={navigationLinkClassList}>Contact</animated.a>
        </Link>
      </div>

      <style jsx>{`
          h1 {
          font-size: 50px;
          }

          p {
          font-size: 25px;
          }

          a:hover {
            transition: .5s;
            text-decoration: underline !important;
            cursor: pointer !important;
          }
      `}</style>
    </div>
  )
  
}

export default Navigation;