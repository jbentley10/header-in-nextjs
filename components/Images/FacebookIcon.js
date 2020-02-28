import React from 'react';
import PropTypes from 'prop-types'

const FacebookIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

  return (
    <a href="https://www.facebook.com/johnbentleycreative/" target="blank">
      <img className={className} src="../static/facebook.png" alt="John Bentley Creative on Facebook" />
    </a>
  )
}

FacebookIcon.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
}

FacebookIcon.defaultProps = {
  tagName: '',
  className: ''
}

export default FacebookIcon;