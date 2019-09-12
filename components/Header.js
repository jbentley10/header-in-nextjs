import Link from 'next/link';
import Logo from './Logo';
import {useSpring, useTrail, animated, config} from 'react-spring';

import '../styles.css';

/* Animations */ 
function HeaderFadeInAnimation() {
  // Define one of our springs
  const fadeInQuick = useSpring({delay: 250, opacity: 1, from: {opacity: 0}})

  return (
    <animated.h1 style={fadeInQuick}>Create. Design. Elevate</animated.h1>
  )
}

function SubtitleFadeInAnimation() {
  const fadeInSlow = useSpring({delay: 1000, opacity: 1, from: {opacity: 0}})

  return (
    <animated.p style={fadeInSlow}>I am a freelance web and graphic designer, passionate about taking brands to the next level.</animated.p>
  )
}

function LogoCircleAnimation() {
  const AnimatedDonut = animated(Donut);
  const props = useSpring({ value: 100, from: { value: 0 } })

  return <AnimatedDonut percent={props.value} />
}

/* Blobs animation */
const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

function Goo() {
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
    </>
  )
}

/* CSS Styles */ 
const linkStyle = {
  color: '#ffffff',
  transition: '.5s',
  fontFamily: 'Barlow, sans-serif',
  float: 'right',
  padding: '0 20px',
  textDecoration: 'none'
}

const navStyle = {
  paddingTop: '50px',
  marginRight: '50px',
  marginBottom: '27vh'
}

const headerStyle = {
  backgroundColor: '#1c252c',
  height: '100vh'
}

const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  width: '70%',
  margin: '0 auto'
}

/* Component Layout */ 
const Header = () => (
  <div style={headerStyle}>
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
    <div style={headerContentStyle}>
      <HeaderFadeInAnimation />
      <SubtitleFadeInAnimation />
    </div>
    <Goo />

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