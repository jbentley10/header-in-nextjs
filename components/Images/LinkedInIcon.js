import React from 'react';
import PropTypes from 'prop-types'
import Image from 'next/image';

const LinkedInIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

    return (
      <div className={`mr-4 inline`}>
        <a href="https://www.linkedin.com/in/jwbentle" target="blank">
          <Image width={50} height={50} alt="John Bentley Creative on LinkedIn" className={`${className} pl-2`} src="/linkedin.png" loading="lazy" />        
        </a>
      </div>
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