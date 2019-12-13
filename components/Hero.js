import Navigation from './Navigation';
import {useSpring, useTrail, animated, config} from 'react-spring';

import '../styles/styles.css';

/* Animations */ 
function HeaderFadeInAnimation() {
  // Define one of our springs
  const fadeInQuick = useSpring({delay: 4000, opacity: 1, from: {opacity: 0}})
  const fadeInSlow = useSpring({delay: 5200, opacity: 1, from: {opacity: 0}})

  return (
    <div className="container">
      <animated.h1 className="text-6xl" style={fadeInQuick}>Create. Analyze. Elevate.</animated.h1>
      <br />
      <animated.h2 className="text-4xl" style={fadeInSlow}>I am a freelance web and graphic designer, passionate about taking brands to the next level.</animated.h2>
    </div>
  )
}

/* CSS Styles */ 
const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  width: '80%',
  margin: '0 auto',
  zIndex: '999',
  position: 'relative'
}

/* Component Layout */ 
const Hero = () => (
  <div className="background">
    <Navigation />
    <div className="header__content" style={headerContentStyle}>
      <HeaderFadeInAnimation />
    </div>

    <style jsx>{`

      a:hover {
        transition: .5s;
        text-decoration: underline !important;
        cursor: pointer !important;
      }
    `}</style>
  </div>
);

export default Hero;