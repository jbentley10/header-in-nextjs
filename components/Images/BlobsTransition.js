// Import dependencies
import PropTypes from 'prop-types';
import Image from 'next/image';

const BlobsTransition = (props) => {
  const {
    tagName: tag,
    className
  } = props

  return (
    <Image layout={`fill`} className={className + " bg-dark-background"} src="/blob-background.png" alt="Circles and Dots" loading="lazy" />
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