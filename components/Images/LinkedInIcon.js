import React from 'react';
import PropTypes from 'prop-types'

const LinkedInIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

    return <img className={className} src="../static/linkedin.png" alt="John Bentley on LinkedIn" />
  };
  
  LinkedInIcon.propTypes = {
    tagName: PropTypes.string,
    className: PropTypes.string,
  }
  
  LinkedInIcon.defaultProps = {
    tagName: '',
    className: ''
  }

  export default LinkedInIcon;