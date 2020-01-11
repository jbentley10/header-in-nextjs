import Link from 'next/link';
import Logo from './Images/Logo';

import '../styles/styles.css';


/* CSS Styles */
const backgroundStyle = {
  backgroundColor: '#1b242c'
}

const linkStyle = {
  color: '#ffffff',
  transition: '.5s',
  fontFamily: 'Barlow, sans-serif',
  textDecoration: 'none',
  fontWeight: 'bolder',
  fontSize: '20px'
}

const navStyle = {
  zIndex: '999',
  position: 'relative',
  float: 'right'
}

/* Component Layout */
const Navigation = () => (
  <div className="navigation h-56" style={backgroundStyle}>
    <Logo 
      className={'relative cursor-pointer'}
    />
    <div className="navigation mr-8" style={navStyle}>
      <Link href="/work">
        <a style={linkStyle} className="sm:px-4 md:px-8">Work</a>
      </Link>
      <Link href="/about-me">
        <a style={linkStyle} className="sm:px-4 md:px-8">About Me</a>
      </Link>
      <Link href="/services">
        <a style={linkStyle} className="sm:px-4 md:px-8">Services</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle} className="sm:px-4 md:px-8">Contact</a>
      </Link>
    </div>

    <style jsx>{`
        h1 {
        font-size: 50px;
        }

        p {
        font-size: 25px;
        }

        a:hover {
          transition: .5s;
          text-decoration: underline !important;
          cursor: pointer !important;
        }
    `}</style>
  </div>
);

export default Navigation;