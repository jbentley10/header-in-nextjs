import React from 'react';
import { useSpring, animated, config } from 'react-spring';

// Example function from https://codesandbox.io/embed/nw61327570
function componentDidMount() {
    let pathLengths = Array.from(
        this.svg.current.getElementsByTagName("*")
    ).map(el => {
        let size;
        try {
            size = el.getTotalLength();
        } catch (error) {
            size = 0;
        }
        return size;
    });

    this.setState({ offset: Math.max(...pathLengths) + 0.3});
}

function Spring() {
    delay: 1000
    from: {opacity: 0}
    to: opacity: 1
    config: {config.molasses}

    const circleStyle = {
        stroke: "#fff",
        strokeMiterLimit: "10",
        fill: "url(#linear-gradient)"
    }
    
    const svgStyle = {
        position: "absolute",
        zIndex: '999',
        position: 'relative'
    }
    
    const fill = "#ffffff";

    return (
        <animated.svg 
            viewBox = {"0 0 73 73"}
            width = {"10%"}
            padding = {"50px"}
            style={svgStyle}  
        >
            <defs>
                <linearGradient 
                id="linear-gradient" 
                x1="0.5" 
                y1="0" 
                x2="72.515" 
                y2="36.5" 
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#9891ff"/>
                <stop offset="1" stopColor="#ff2aba"/></linearGradient>
            </defs>
            <title>Asset 7</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Card">
                    <circle style={circleStyle} className="cls-1" cx="36.5" cy="36.5" r="36"/>
                    <g id="Signature">
                        <path className="cls-2" stroke={fill} strokeDasharray="200" strokeDashoffset="109.766" strokeWidth='.5px' d="M35.1,16.3c0.6,3.7,0.5,7.4-0.1,11.1c-0.6,4.1-1.5,8.2-2.8,12.2c-1.1,3.5-2.5,6.9-4.4,10.1C27,51,25.3,54,23.3,53.8c-0.9-0.1-1.6-1-2-1.8c-0.9-1.9-1.5-3.9-1.8-5.9c-0.2-1-1.6-0.5-1.4,0.4c0.5,2.7,1.2,7.1,4,8.5c2.2,1.1,4.3-0.8,5.5-2.4c2.2-3,3.9-6.3,5-9.8c1.6-4.3,2.8-8.7,3.5-13.3c0.9-4.5,1.1-9.2,0.4-13.7C36.3,14.9,34.8,15.4,35.1,16.3L35.1,16.3z"/>
                        <path className="cls-3" stroke={fill} strokeDasharray="200" strokeDashoffset="117.38" strokeWidth='.5px'  d="M37.8,37.5l8.4-1.8l4-0.9c0.8-0.3,1.5-0.4,2.3-0.4c0.2,0,0.4,0.1,0.5,0.2c0.1,0.1,0.2,0.1,0.2,0.2c0.1,0.2,0.1,0.3,0,0.7c-0.4,1.1-1.1,2.1-1.9,2.9c-1.2,1.3-2.6,2.6-4,3.8c-6,5-12.5,9.3-18.9,13.7c-0.5,0.4-2.2,1.2-1.3,2.1c0.6,0.7,2-0.4,2.6-0.7c0.9-0.5,0.1-1.8-0.8-1.3c-0.4,0.2-0.9,0.5-1.3,0.7c-0.2,0.1-0.2,0.1-0.1,0.1c0.1-0.2,0.9,1.2,0.7,1.2c0.2,0,0,0,0.1-0.1l0.4-0.3l1.3-0.9c3-2.1,6.1-4.1,9.1-6.2c3.6-2.5,7.1-5.2,10.5-8.1c1.3-1.1,2.5-2.3,3.6-3.6c0.9-0.9,1.4-2,1.7-3.1c0.1-1.2-0.7-2.2-1.9-2.4c-0.5-0.1-1-0.1-1.5,0c-1.6,0.3-3.2,0.7-4.9,1l-9.3,2C36.5,36.2,36.9,37.7,37.8,37.5L37.8,37.5z"/>
                        <path className="cls-4" stroke={fill} strokeDasharray="200" strokeDashoffset="117.38" strokeWidth='.5px'  d="M35.9,16.5c3.8,0.6,8.3,1.6,11.3,4.2c1.1,0.8,1.7,2.1,1.8,3.5c0,1.8-1.2,3.5-2.4,4.8c-2.7,2.7-5.8,5.1-9.2,6.9c-0.3,0.2-0.4,0.7-0.2,1c0.2,0.3,0.6,0.4,1,0.2c3.3-1.8,6.4-4.1,9.1-6.7c1.6-1.4,2.7-3.3,3.2-5.4c0.6-3.9-3-6.4-6.1-7.8c-2.6-1.1-5.3-1.8-8-2.2C35.4,14.9,35,16.4,35.9,16.5L35.9,16.5z"/>
                    </g>
                </g>
            </g>
        </animated.svg>
    )
} 

export default Spring;