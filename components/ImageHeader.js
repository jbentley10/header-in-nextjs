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
const ImageHeader = () => {

  return (
    <div className="background h-56 opacity-75">
      <div className="header__content" style={headerContentStyle}>
        <h1 className="text-left pt-16">Contact</h1>
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


export default ImageHeader;