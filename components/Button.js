import '../styles/styles.css';
import PropTypes from 'prop-types';

/* Component Layout */ 
const Button = (props) => {
    const {
      TagName: tag,
      className,
      buttonText
    } = props

    return (
      <div className={className}>
        <a className="p-button-padding rounded-button-radius bg-button-purple cursor-pointer">{buttonText}</a>

        <style jsx>{`
        
        `}</style>
      </div>
    )
}

Button.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string
}

Button.defaultProps = {
  tagName: '',
  className: '',
  buttonText: ''
}

export default Button;
