/* CSS Styles */ 
const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  margin: '0 auto',
  zIndex: '999',
  position: 'relative'
}

/* Component Layout */ 
const Hero = ({children}) => {

  return (
    <div className="background sm:h-screen w-full text-center">
      <div className="header__content sm:max-w-full md:max-w-2xl" style={headerContentStyle}>
        {children}
      </div>

      <style jsx>{`
        a:hover {
          transition: .5s;
          text-decoration: underline !important;
          cursor: pointer !important;
        }
      `}</style>
    </div>
  )
}

export default Hero;