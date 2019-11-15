import Link from 'next/link';
import {useSpring, useTrail, animated, config} from 'react-spring';

import '../styles/styles.css';

/* CSS Styles */ 
const linkStyle = {}

/* Component Layout */ 
const ThreeColumnIcons = () => (
  <div className="three-column-icons">
    <div className="three-column-icons__content-row inline w-4/5 m-0">
        <div className="three-column-icons__left inline-block">
            <div className="three-column-icons__icon bg-gray-300 w-8 h-8">
                {/* TODO: Add Icon */} 
            </div>
            <div className="three-column-icons__text align-left">
                <h3>Heading!</h3>
                <p>Lorem ipsum solor dut amet.</p>
            </div>
        </div>
        <div className="three-column-icons__middle inline-block">
            <div className="three-column-icons__icon bg-gray-300 w-8 h-8">
                {/* TODO: Add Icon */}  
            </div>
            <div className="three-column-icons__text align-left">
                <h3>Heading!</h3>
                <p>Lorem ipsum solor dut amet.</p>
            </div>
        </div>
        <div className="three-column-icons__right inline-block">
            <div className="three-column-icons__icon bg-gray-300 w-8 h-8">
                {/* TODO: Add Icon */}  
            </div>
            <div className="three-column-icons__text align-left">
                <h3>Heading!</h3>
                <p>Lorem ipsum solor dut amet.</p>
            </div>
        </div>
    </div>

    <style jsx>{`
      
    `}</style>
  </div>
);

export default ThreeColumnIcons;