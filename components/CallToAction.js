import '../styles/styles.css';
import PropTypes from 'prop-types';

/* Component Layout */ 
const CallToAction = (props) => {
    const {
      ctaText
    } = props

  return (
    <div className="call-to-action bg-dark-background text-white w-full sm:p-12 md:p-24 text-center">
        {ctaText}
    </div>
  )
}

export default CallToAction;

CallToAction.propTypes = {
  ctaText: PropTypes.any
}

CallToAction.defaultProps = {
  ctaText: <p>Contact Me</p>
}