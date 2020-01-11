import PropTypes from 'prop-types'
import {useSpring, animated} from 'react-spring';

import '../styles/styles.css';

/* Animations */ 
const HeaderFadeInAnimation = (props) => {
  const {
    TagName:
      headingText,
      subtext
  } = props

  // Define one of our springs
  const fadeInQuick = useSpring({delay: 4000, opacity: 1, from: {opacity: 0}})
  const fadeInSlow = useSpring({delay: 5200, opacity: 1, from: {opacity: 0}})

  return (
    <div className="sm:w-full">
      <animated.h1 className="text-6xl" style={fadeInQuick}>Create. Analyze. Elevate.</animated.h1>
      <br />
      <animated.h2 className="text-4xl" style={fadeInSlow}>{subtext}</animated.h2>
    </div>
  )
}

HeaderFadeInAnimation.propTypes = {
  headingText: PropTypes.string,
  subtext: PropTypes.string,
}

HeaderFadeInAnimation.defaultProps = {
  headingText: '',
  subtext: ''
}

export default HeaderFadeInAnimation;