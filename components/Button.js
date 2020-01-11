import '../styles/styles.css';
import PropTypes from 'prop-types';
import Link from 'next/link';

/* Component Layout */ 
const Button = (props) => {
    const {
      TagName: tag,
      className,
      buttonText,
      linkHref
    } = props

    return (
      <div className={className}>
        <Link href={linkHref}>
          <a className="text-lg p-button-padding rounded-button-radius bg-button-purple cursor-pointer hover:bg-button-purple-darker">{buttonText}</a>
        </Link>

        <style jsx>{`
        
        `}</style>
      </div>
    )
}

Button.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  linkHref: PropTypes.string
}

Button.defaultProps = {
  tagName: '',
  className: '',
  buttonText: '',
  linkHref: ''
}

export default Button;
