import Link from 'next/link';

const linkStyle = {
  color: '#ffffff',
  transition: '.5s',
  fontFamily: 'Barlow, sans-serif',
  float: 'right',
  padding: '0 20px',
  textDecoration: 'none'
};

const navStyle = {
  paddingTop: '50px',
  marginRight: '50px',
  marginBottom: '27vh'
}

const headerStyle = {
  backgroundColor: '#1c252c',
  height: '100vh'
}

const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  width: '70%',
  margin: '0 auto'

}

const Header = () => (
  <div style={headerStyle}>
    {/* Logo */}
    <div style={navStyle}>
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
    <div style={headerContentStyle}>
      <h1>Create. Analyze. Elevate.</h1>
      <p>I am a freelance web and graphic designer, passionate about taking brands to the next level.</p>
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

export default Header;