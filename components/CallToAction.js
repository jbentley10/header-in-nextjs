import '../styles/styles.css';
import PropTypes from 'prop-types';
import Button from './Button';

/* Component Layout */ 
const CallToAction = (props) => {
    const {
      heading,
      buttonText,
      className
    } = props

  return (
    <div className={`${className} call-to-action bg-dark-background text-white w-full sm:p-12 md:p-24 text-center`}>
      <div>
        <div className={`text-3xl pb-12`} dangerouslySetInnerHTML={{ __html: heading }} />
        
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
  heading: PropTypes.any,
  buttonText: PropTypes.any,
  className: PropTypes.string
}

CallToAction.defaultProps = {
  heading: "Interested in learning more?",
  buttonText: "Contact Me",
  className: ""
}