import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSpring, animated} from 'react-spring';

/* CSS Styles */ 
const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  margin: '0 auto',
  zIndex: '999',
  position: 'relative'
}

/* Component Layout */ 
const Hero = ({children}) => {

  const fadeIn = useSpring({delay: 7000, opacity: 1, from: {opacity: 0}})

  return (
    <div className="background sm:h-screen w-full text-center">
      <div className="header__content sm:max-w-full md:max-w-3xl" style={headerContentStyle}>
        {children}
      </div>

      <FontAwesomeIcon style={fadeIn} icon="arrow-down" className="sm:mt-5 md:mt-0 sm:text-3xl md:text-5xl shadow-none text-white transform-5" />

      <style jsx>{`
        a:hover {
          transition: .5s;
          text-decoration: underline !important;
          cursor: pointer !important;
        }
      `}</style>
    </div>
  )
}

export default Hero;