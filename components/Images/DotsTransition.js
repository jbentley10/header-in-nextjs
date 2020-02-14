import PropTypes from 'prop-types';

function addDefaultSrc(ev) {
  ev.target.src = '../static/dots-transition.jpg'
}

const DotsTransition = (props) => {
  const {
    tagName: tag,
    className
  } = props

  return <img className={className + " bg-dark-background w-full"} src="../static/dots-transition.webp" onError={addDefaultSrc} alt="Circles and Dots" />
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