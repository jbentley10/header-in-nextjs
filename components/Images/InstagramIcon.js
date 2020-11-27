import React from 'react';
import PropTypes from 'prop-types'
import Image from 'next/image';

const InstagramIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

  return (
    <div className={`mr-4 inline`}>
      <a href="https://www.instagram.com/johnbentleycreative/" target="blank">      
        <Image width={50} height={50} alt="John Bentley Creative on Instagram" className={`${className} pl-2`} src="/instagram.png" loading="lazy" />      
      </a>
    </div>
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