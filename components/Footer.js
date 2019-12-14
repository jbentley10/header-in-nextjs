import Logo from './Images/Logo';
import '../styles/styles.css';

/* Component Layout */ 
const Footer = () => (
    <div className="call-to-action bg-dark-background text-white w-full p-12 text-center">
        <Logo />
        <p className="text-sm">Contact Me Directly!</p>
    </div>
);

export default Footer;