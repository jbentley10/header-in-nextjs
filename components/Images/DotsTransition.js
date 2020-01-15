import PropTypes from 'prop-types';

const DotsTransition = (props) => {
  const {
    tagName: tag,
    className
  } = props

  return <img className={className + " bg-dark-background w-full"} src="../static/dots-transition.png" alt="Circles and Dots" />
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