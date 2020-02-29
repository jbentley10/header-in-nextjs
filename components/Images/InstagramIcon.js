import React from 'react';
import PropTypes from 'prop-types'

const InstagramIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

  return (
    <a href="https://www.instagram.com/johnbentleycreative/" target="blank">
      <img className={className} src="../static/instagram.png" alt="John Bentley on Instagram" />
    </a>
  )
}

InstagramIcon.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
}

InstagramIcon.defaultProps = {
  tagName: '',
  className: ''
}

export default InstagramIcon;