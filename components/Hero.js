/* CSS Styles */ 
const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  width: '80%',
  margin: '0 auto',
  zIndex: '999',
  position: 'relative'
}

/* Component Layout */ 
const Hero = ({children}) => {

  return (
    <div className="background h-64">
      <div className="header__content" style={headerContentStyle}>
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