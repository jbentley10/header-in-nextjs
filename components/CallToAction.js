import '../styles/styles.css';
import PropTypes from 'prop-types';
import Button from './Button';

/* Component Layout */ 
const CallToAction = (props) => {
    const {
      heading,
      buttonText
    } = props

  return (
    <div className="call-to-action bg-dark-background text-white w-full sm:p-12 md:p-24 text-center">
      <div>
        <h2 className="text-3xl pb-12">{heading}</h2>
        
        <Button
          buttonText={buttonText}
          className={'button text-center text-white bg-dark-background'}
          linkHref={'/contact'}
          targetBlank={false}
        />
      </div>
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