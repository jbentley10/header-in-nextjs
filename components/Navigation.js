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
  padding: '0 20px',
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
        <a style={linkStyle}>Work</a>
      </Link>
      <Link href="/about-me">
        <a style={linkStyle}>About Me</a>
      </Link>
      <Link href="/services">
        <a style={linkStyle}>Services</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
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