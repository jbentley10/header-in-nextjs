import Link from 'next/link';
import Logo from './Images/Logo';
import {animated} from 'react-spring';

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
const Navigation = ({navigationClassName, animationClassName, logoClassName, logoWidth, drawAnimations}) => {

  const navigationLinkClassList = "sm:px-4 md:px-8 navigation-link hover:text-navigation-hover cursor-pointer";

  return (
    <div className={navigationClassName} style={backgroundStyle}>
      <Logo 
        logoClassName={logoClassName}
        logoWidth={logoWidth}
        drawAnimations={drawAnimations}
      />
      <div id="navigation" className={animationClassName} style={navStyle}>
        <Link href="/work">
          <animated.a className={navigationLinkClassList}>Work</animated.a>
        </Link>
        <Link href="/about-me">
          <animated.a className={navigationLinkClassList}>About Me</animated.a>
        </Link>
        <Link href="/services">
          <animated.a className={navigationLinkClassList}>Services</animated.a>
        </Link>
        <Link href="/contact">
          <animated.a className={navigationLinkClassList}>Contact</animated.a>
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