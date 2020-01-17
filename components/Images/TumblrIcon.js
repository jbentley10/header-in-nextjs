import React from 'react';
import PropTypes from 'prop-types'

const TumblrIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

  return (
    <a href="https://jbentley10.tumblr.com/" target="blank">
      <img className={className} src="../static/tumblr.png" alt="John Bentley on Tumblr" />
    </a>
  )
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