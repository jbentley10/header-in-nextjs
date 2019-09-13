import Link from 'next/link';
import Logo from './Logo';
import Goo from './Goo';
import {useSpring, useTrail, animated, config} from 'react-spring';

import '../styles.css';

/* Animations */ 

/* Text parallax */
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`

function HeaderFadeInAnimation() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  // Define one of our springs
  const fadeInQuick = useSpring({delay: 500, opacity: 1, from: {opacity: 0}})
  const fadeInSlow = useSpring({delay: 1500, opacity: 1, from: {opacity: 0}})

  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.h1 style={{transform:props.xy.interpolate(trans1)}}>Create. Design. Elevate.</animated.h1>
      <animated.p style={{transform:props.xy.interpolate(trans1)}}>I am a freelance web and graphic designer, passionate about taking brands to the next level.</animated.p>
    </div>
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
    <div className="navigation" style={navStyle}>
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
    <div class="header__content" style={headerContentStyle}>
      <HeaderFadeInAnimation />
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