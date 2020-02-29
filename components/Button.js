import '../styles/styles.css';
import PropTypes from 'prop-types';
import Link from 'next/link';

let blank = ""; 

/* Component Layout */ 
const Button = (props) => {
    const {
      TagName: tag,
      className,
      buttonText,
      linkHref,
      targetBlank
    } = props

    if (targetBlank == true) {
      blank = "_blank"
    } else {
      blank = "_self"
    }

    return (
      <div className={className}>
        <Link href={linkHref}>
          <a target={blank} className="font-barlow font-extrabold sm:text-lg md:text-xl p-button-padding rounded-button-radius bg-button-purple cursor-pointer hover:bg-button-purple-darker">{buttonText}</a>
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
  linkHref: PropTypes.string,
  targetBlank: PropTypes.bool
}

Button.defaultProps = {
  tagName: '',
  className: '',
  buttonText: '',
  linkHref: '',
  targetBlank: false
}

export default Button;
