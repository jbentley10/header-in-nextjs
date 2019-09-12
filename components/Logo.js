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
        left: "55px",
        top: "60px",
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
                        <path className="cls-2" fill={fill} d="M35.08,16.29A34.51,34.51,0,0,1,35,27.4a71.39,71.39,0,0,1-2.82,12.17,47.3,47.3,0,0,1-4.35,10.07C27,51.05,25.27,54,23.28,53.85c-.92-.07-1.56-1-2-1.77a19.85,19.85,0,0,1-1.81-5.94c-.18-1-1.62-.55-1.44.4.5,2.69,1.22,7.1,4,8.5,2.17,1.08,4.27-.82,5.54-2.41a35,35,0,0,0,5-9.76,72.26,72.26,0,0,0,3.54-13.26,39,39,0,0,0,.36-13.71c-.18-1-1.63-.55-1.45.39Z"/>
                        <path className="cls-2" fill={fill} d="M37.8,37.47l8.44-1.8,4-.86a6.32,6.32,0,0,1,2.34-.36,1.22,1.22,0,0,1,.55.21,1,1,0,0,1,.25.2c.13.21.14.33,0,.69a8,8,0,0,1-1.92,2.86,42.1,42.1,0,0,1-4,3.77c-6,5-12.51,9.27-18.91,13.7-.54.38-2.16,1.22-1.32,2.07.65.65,2-.42,2.63-.73.85-.46.09-1.76-.76-1.3-.43.24-.87.47-1.31.69-.22.11-.16.09-.14.07.11-.19.85,1.18.7,1.19.17,0,0,0,.12-.09l.42-.31,1.32-.91c3-2.06,6.07-4.11,9.06-6.24a123.34,123.34,0,0,0,10.48-8.14,31.38,31.38,0,0,0,3.58-3.62A6.2,6.2,0,0,0,55,35.42,2.32,2.32,0,0,0,53.1,33a2.79,2.79,0,0,0-1.49,0c-1.63.32-3.25.69-4.88,1l-9.32,2c-.95.2-.55,1.65.39,1.44Z"/>
                        <path className="cls-2" fill={fill} d="M35.89,16.51c3.81.65,8.34,1.59,11.33,4.25A4.65,4.65,0,0,1,49,24.25c0,1.82-1.21,3.47-2.39,4.76a38.48,38.48,0,0,1-9.19,6.88.75.75,0,0,0,.76,1.29,41.7,41.7,0,0,0,9.09-6.68,10.52,10.52,0,0,0,3.16-5.44c.59-3.9-3-6.41-6.11-7.76a35,35,0,0,0-8-2.23c-.94-.16-1.35,1.28-.39,1.44Z"/>
                    </g>
                </g>
            </g>
        </animated.svg>
    )
} 

export default Spring;