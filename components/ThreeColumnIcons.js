import '../styles/styles.css';

/* Component Layout */ 
const ThreeColumnIcons = () => (
  <div className="three-column-icons text-center bg-dark-background text-white px-12">
    <div className="three-column-icons__content-row inline w-4/5 m-0 text-center">
        <div className="three-column-icons__left inline-block p-12 mb-7">
            <div className="three-column-icons__icon bg-gray-200 w-20 h-20 pb-8 margin-0-auto">
                {/* TODO: Add Icon */} 
            </div>
            <div className="three-column-icons__text text-left mt-8">
                <h3 className="text-large">Heading!</h3>
                <p className="text-sm">Lorem ipsum solor dut amet.</p>
            </div>
        </div>
        <div className="three-column-icons__middle inline-block p-12 mt-6">
            <div className="three-column-icons__icon bg-gray-200 w-20 h-20 margin-0-auto">
                {/* TODO: Add Icon */}  
            </div>
            <div className="three-column-icons__text text-left mt-8">
                <h3 className="text-large">Heading!</h3>
                <p className="text-sm">Lorem ipsum solor dut amet.</p>
            </div>
        </div>
        <div className="three-column-icons__right inline-block p-12 mb-7">
            <div className="three-column-icons__icon bg-gray-200 w-20 h-20 pb-8 margin-0-auto">
                {/* TODO: Add Icon */}  
            </div>
            <div className="three-column-icons__text text-left mt-8">
                <h3 className="text-large">Heading!</h3>
                <p className="text-sm">Lorem ipsum solor dut amet.</p>
            </div>
        </div>
    </div>

    <style jsx>{`
      
    `}</style>
  </div>
);

export default ThreeColumnIcons;