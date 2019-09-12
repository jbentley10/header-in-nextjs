import Link from 'next/link';
import Logo from './Logo';
import Goo from './Goo';
import {useSpring, useTrail, animated, config} from 'react-spring';

import '../styles.css';

/* Animations */ 
function HeaderFadeInAnimation() {
  // Define one of our springs
  const fadeInQuick = useSpring({delay: 500, opacity: 1, from: {opacity: 0}})

  return (
    <animated.h1 style={fadeInQuick}>Create. Design. Elevate.</animated.h1>
  )
}

function SubtitleFadeInAnimation() {
  const fadeInSlow = useSpring({delay: 1500, opacity: 1, from: {opacity: 0}})

  return (
    <animated.p style={fadeInSlow}>I am a freelance web and graphic designer, passionate about taking brands to the next level.</animated.p>
  )
}

function LogoCircleAnimation() {
  const AnimatedDonut = animated(Donut);
  const props = useSpring({ value: 100, from: { value: 0 } })

  return <AnimatedDonut percent={props.value} />
}

/* CSS Styles */ 
const linkStyle = {
  color: '#ffffff',
  transition: '.5s',
  fontFamily: 'Barlow, sans-serif',
  float: 'right',
  padding: '0 20px',
  textDecoration: 'none',
  fontWeight: 'bolder',
  fontSize: '20px'
}

const navStyle = {
  marginRight: '50px',
  marginBottom: '27vh',
  zIndex: '999',
  position: 'relative'
}

const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  width: '70%',
  margin: '0 auto',
  zIndex: '999',
  position: 'relative'
}

/* Component Layout */ 
const Header = () => (
  <div className="background">
    <Logo />
    <div style={navStyle}>
      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About Me</a>
      </Link>
      <Link href="/work">
        <a style={linkStyle}>Work</a>
      </Link>
    </div>
    <Goo />
    <div style={headerContentStyle}>
      <HeaderFadeInAnimation />
      <SubtitleFadeInAnimation />
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
);

export default Header;