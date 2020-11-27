import PropTypes from 'prop-types';
import Image from 'next/image';

function addDefaultSrc(ev) {
  ev.target.src = '../static/img/jpg/dots-transition.jpg';
}

const DotsTransition = (props) => {
  const {
    tagName: tag,
    className
  } = props

  return (
    <Image layout={`fill`} className={className + " bg-dark-background w-full"} src="/dots-transition.jpg" alt="Circles and Dots" loading="lazy" />    
  )
}

DotsTransition.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string
}

DotsTransition.defaultProps = {
  tagName: '',
  className: ''
}

export default DotsTransition;