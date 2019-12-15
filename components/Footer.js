import Logo from './Images/Logo';
import TumblrIcon from './Images/TumblrIcon';
import LinkedInIcon from './Images/LinkedInIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/styles.css';

/* Component Layout */ 
const Footer = () => (
  <div className="bg-dark-background text-white w-full text-center">
    <div className="logo-container">
      <Logo 
        className={'grayscale m-auto cursor-pointer'}
      />
    </div>
    <p className="text-base p-6">Copyright John Bentley 2019</p>
    <div className="icons p-4 inline align-middle">
      <FontAwesomeIcon icon="envelope" className="text-6xl shadow-none p-4 cursor-pointer inline-block align-middle" />
      <TumblrIcon 
        className={'p-4 cursor-pointer inline-block align-middle'}
      />
      <LinkedInIcon 
        className={'p-4 cursor-pointer inline-block align-middle'}
      />
    </div>
  </div>
);

export default Footer;