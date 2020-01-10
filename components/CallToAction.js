import '../styles/styles.css';
import PropTypes from 'prop-types';

/* Component Layout */ 
const CallToAction = (props) => {
    const {
      TagName: tag,
      ctaText
    } = props

  return (
    <div className="call-to-action bg-dark-background text-white w-full p-24 text-center">
        {ctaText}
    </div>
  )
}

export default CallToAction;

CallToAction.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  ctaText: PropTypes.string
}

CallToAction.defaultProps = {
  tagName: '',
  className: '',
  ctaText: ''
}