import PropTypes from 'prop-types';

function addDefaultSrc(ev) {
  ev.target.src = '../static/blob-background.png'
}

const BlobsTransition = (props) => {
  const {
    tagName: tag,
    className
  } = props

  return (
    <picture>
      <source type="image/webp" srcSet="../static/blob-background.webp" />
      <source type="image/jpeg" srcSet="../static/blob-background.png" />
      <img className={className + " bg-dark-background w-full"} src="../static/blob-background.webp" alt="Circles and Dots" loading="lazy" />
    </picture>
  )
}

BlobsTransition.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string
}

BlobsTransition.defaultProps = {
  tagName: '',
  className: ''
}

export default BlobsTransition;