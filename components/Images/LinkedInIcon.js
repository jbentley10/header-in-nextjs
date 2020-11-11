import React from 'react';
import PropTypes from 'prop-types'
import Image from 'next/image';

const LinkedInIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

    return (
      <a href="https://www.linkedin.com/in/jwbentle" target="blank">
        <Image unsized alt="John Bentley Creative on LinkedIn" className={className} src="/../public/linkedin.png" loading="lazy" />        
      </a>
    )
  }
  
  LinkedInIcon.propTypes = {
    tagName: PropTypes.string,
    className: PropTypes.string,
  }
  
  LinkedInIcon.defaultProps = {
    tagName: '',
    className: ''
  }

  export default LinkedInIcon;