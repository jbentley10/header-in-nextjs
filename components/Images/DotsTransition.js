import PropTypes from 'prop-types';

function addDefaultSrc(ev) {
  ev.target.src = '../static/img/jpg/dots-transition.jpg';
}

const DotsTransition = (props) => {
  const {
    tagName: tag,
    className
  } = props

  return (
    <picture>
      <source type="image/webp" srcSet="../static/img/webp/dots-transition.webp" />
      <source type="image/jpeg" srcSet="../static/img/jpg/dots-transition.jpg" />
      <img className={className + " bg-dark-background w-full"} src="../static/img/jpg/dots-transition.jpg" alt="Circles and Dots" loading="lazy" />
    </picture>
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