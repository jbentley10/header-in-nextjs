import '../styles/styles.css';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  const {
    TagName: tag,
    className,
    heading,
    Link1Title,
    Link1Link,
    Link2Title,
    Link2Link,
    Link3Title,
    Link3Link,
    Link4Title,
    Link4Link
  } = props

  return (
    <div className="sidebar-container sm:hidden md:block sm:w-40 p-4 bg-dark-background shadow-white text-white fixed">
      <a href={Link1Link} className="block">{Link1Title}</a>
      <a href={Link2Link} className="block">{Link2Title}</a>
      <a href={Link3Link} className="block">{Link3Title}</a>
      <a href={Link4Link} className="block">{Link4Title}</a>
    </div>
  )
  
}

Sidebar.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  Link1Title: PropTypes.string,
  Link1Link: PropTypes.string,
  Link2Title: PropTypes.string,
  Link2Link: PropTypes.string,
  Link3Title: PropTypes.string,
  Link3Link: PropTypes.string,
  Link4Title: PropTypes.string,
  Link4Link: PropTypes.string
}

Sidebar.defaultProps = {
  tagName: '',
  className: '',
  Link1Title: '',
  Link1Link: '',
  Link2Title: '',
  Link2Link: '',
  Link3Title: '',
  Link3Link: '',
  Link4Title: '',
  Link4Link: ''
}

export default Sidebar;