import React from 'react';
import PropTypes from 'prop-types'

const LinkedInIcon = (props) => {
  const {
    TagName: tag,
    className
  } = props

    return (
      <a href="https://www.linkedin.com/in/jwbentle" target="blank">
        <picture>
          <source type="image/webp" srcSet="../static/img/webp/linkedin.webp" />
          <source type="image/png" srcSet="../static/img/png/linkedin.png" />
          <img alt="John Bentley Creative on LinkedIn" className={className} src="../static/img/png/instagram.png" loading="lazy" />
        </picture>
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