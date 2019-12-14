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
    float: 'right',
    padding: '0 20px',
    textDecoration: 'none',
    fontWeight: 'bolder',
    fontSize: '20px'
}

const navStyle = {
    zIndex: '999',
    position: 'relative'
}

/* Component Layout */ 
const Navigation = () => (
    <div className="navigation" style={backgroundStyle}>
        <Logo />
        <div className="navigation" style={navStyle}>
        <Link href="/contact">
            <a style={linkStyle}>Contact</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About Me</a>
        </Link>
        <Link href="/work">
            <a style={linkStyle}>Work</a>
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