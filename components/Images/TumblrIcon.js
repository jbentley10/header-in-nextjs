import React from 'react';
import PropTypes from 'prop-types'

const TumblrIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

  return <img className={className} src="../static/tumblr.png" alt="John Bentley on Tumblr" />
}

TumblrIcon.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
}

TumblrIcon.defaultProps = {
  tagName: '',
  className: ''
}

export default TumblrIcon;