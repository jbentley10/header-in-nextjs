import React from 'react';
import PropTypes from 'prop-types'

const LinkedInIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

    return (
      <a href="https://www.linkedin.com/in/jwbentle" target="blank">
        <img className={className} src="../static/linkedin.png" alt="John Bentley on LinkedIn" />
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