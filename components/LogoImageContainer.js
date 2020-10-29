import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types'
import { useSpring, animated, config } from 'react-spring';

const LogoImageContainer = (props) => {
  const {
    TagName: tag,
    className,
    imageSource,
    imageAltText
  } = props

  return (
    <div className="image-container w-full p-24 md:pb-0">
      <Image unsized className="h-full flex items-center justify-center" src={`/` + imageSource} alt={imageAltText} loading="lazy" />
    </div>
  )
}

LogoImageContainer.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  imageSource: PropTypes.string,
  imageAltText: PropTypes.string,
}

LogoImageContainer.defaultProps = {
  tagName: '',
  className: '',
  imageSource: '',
  imageAltText: ''
}

export default LogoImageContainer;