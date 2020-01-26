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
        logoClassName={'grayscale m-auto cursor-pointer logo'}
        logoWidth={'6%'}
      />
    </div>
    <p className="text-base pt-6 pb-2">
      &copy;{`${new Date().getFullYear()} John Bentley`}
    </p>
    <p className="text-base pb-2">Freelance Web Designer Portland Oregon</p>
    <div className="icons p-4 inline align-middle">
      <FontAwesomeIcon icon="envelope" className="w-6 text-6xl shadow-none p-4 cursor-pointer inline-block align-middle" />
      <TumblrIcon 
        className={'p-4 cursor-pointer inline-block align-middle w-16'}
      />
      <LinkedInIcon 
        className={'p-4 cursor-pointer inline-block align-middle w-16'}
      />
    </div>
  </div>
);

export default Footer;