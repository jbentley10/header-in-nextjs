import '../styles/styles.css';
import PropTypes from 'prop-types';

/* CSS Styles */ 
const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  width: '80%',
  margin: '0 auto',
  zIndex: '999',
  position: 'relative'
}

/* Component Layout */ 
const ImageHeader = (props) => {
  const {
    TagName: tag,
    className,
    heading
  } = props

  return (
    <div className="background h-56 opacity-75">
      <div className="header__content" style={headerContentStyle}>
        <h1 className="text-left pt-16">{heading}</h1>
      </div>

      <style jsx>{`
        a:hover {
          transition: .5s;
          text-decoration: underline !important;
          cursor: pointer !important;
        }
      `}</style>
    </div>
  )
}

ImageHeader.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  heading: PropTypes.string
}

ImageHeader.defaultProps = {
  tagName: '',
  className: '',
  heading: ''
}

export default ImageHeader;