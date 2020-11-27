import React from 'react';
import PropTypes from 'prop-types'
import Image from 'next/image';

const FacebookIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

  return (
    <a href="https://www.facebook.com/johnbentleycreative/" target="blank">      
      <Image width={50} height={50} alt="John Bentley Creative on Facebook" className={`${className} pl-2`} src="/../public/facebook.png" alt="Circles and Dots" loading="lazy" />
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