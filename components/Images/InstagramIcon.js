import React from 'react';
import PropTypes from 'prop-types'
import Image from 'next/image';

const InstagramIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

  return (
    <a href="https://www.instagram.com/johnbentleycreative/" target="blank">      
      <Image unsized alt="John Bentley Creative on Instagram" className={className} src="/../public/instagram.png" loading="lazy" />      
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