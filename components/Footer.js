import Logo from './Images/Logo';
import FacebookIcon from './Images/FacebookIcon';
import InstagramIcon from './Images/InstagramIcon';
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
      &copy;{`${new Date().getFullYear()} John Bentley Creative`}
    </p>
    <p className="text-base pb-2">Freelance Web Design Portland Oregon</p>
    <div className="icons p-4 inline align-middle">
      <a href="mailto:john@jwbentley.com?subject=Project Request" className="sm:text-xl cursor-pointer text-white hover:text-gray align-middle"><FontAwesomeIcon icon="envelope" className="w-16 shadow-none p-4 cursor-pointer inline-block align-middle" /></a>
      <FacebookIcon 
        className={'p-4 cursor-pointer inline-block align-middle w-16'}
      />
      <InstagramIcon 
        className={'p-4 cursor-pointer inline-block align-middle w-16'}
      />
      <LinkedInIcon 
        className={'p-4 cursor-pointer inline-block align-middle w-16'}
      />
    </div>
  </div>
);

export default Footer;