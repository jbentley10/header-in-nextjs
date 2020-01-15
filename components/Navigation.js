import Link from 'next/link';
import Logo from './Images/Logo';
import {useSpring, animated} from 'react-spring';
import PropTypes from 'prop-types'

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
const Navigation = (props) => {
  const {
    TagName:
      delayWork,
      delayAbout,
      delayServices,
      delayContact
  } = props

  const fadeInWork = useSpring({delay: {delayWork}, opacity: 1, from: {opacity: 0}})
  const fadeInAbout = useSpring({delay: {delayAbout}, opacity: 1, from: {opacity: 0}})
  const fadeInServices = useSpring({delay: {delayServices}, opacity: 1, from: {opacity: 0}})
  const fadeInContact = useSpring({delay: {delayContact}, opacity: 1, from: {opacity: 0}})

  const navigationLinkClassList = "sm:px-4 md:px-8 navigation-link hover:text-navigation-hover cursor-pointer";

  return (
    <div className="navigation h-56" style={backgroundStyle}>
      <Logo 
        className={'relative cursor-pointer logo'}
      />
      <div className="navigation mr-8" style={navStyle}>
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

Navigation.propTypes = {
  delayWork: PropTypes.number,
  delayAbout: PropTypes.number,
  delayServices: PropTypes.number,
  delayContact: PropTypes.number
}

Navigation.defaultProps = {
  delayWork: 0,
  delayAbout: 0,
  delayServices: 0,
  delayContact: 0
}

export default Navigation;