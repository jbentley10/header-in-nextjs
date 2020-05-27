import React from 'react';
import PropTypes from 'prop-types'

const InstagramIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

  return (
    <a href="https://www.instagram.com/johnbentleycreative/" target="blank">
      <picture>
        <source type="image/webp" srcSet="../static/img/webp/instagram.webp" />
        <source type="image/png" srcSet="../static/img/png/instagram.png" />
        <img alt="John Bentley Creative on Instagram" className={className} src="../static/img/png/instagram.png" loading="lazy" />
      </picture>
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