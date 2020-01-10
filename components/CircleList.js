import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'
import { useSpring, animated, config } from 'react-spring';

const CircleList = (props) => {
  const {
    TagName: tag,
    className,
    Heading,
    Tool1Name,
    Tool2Name,
    Tool3Name,
    Tool4Name,
    Tool5Name
  } = props

  return (
    <div className="text-container bg-dark-background w-full p-24">
      <div className="text-content shadow-white p-24 text-center">
        <h3 className="text-white">{Heading}</h3>
        <ul className="tool-list inline">
          <li className="inline-block px-4">
            <div className="text-white bg-white rounded-full h-24 w-24 flex items-center justify-center">
              <p className="text-black">{Tool1Name}</p>
            </div>
          </li>
          <li className="inline-block px-4">
            <div className="text-white bg-white rounded-full h-24 w-24 flex items-center justify-center">
              <p className="text-black">{Tool2Name}</p>
            </div>
          </li>
          <li className="inline-block px-4">
            <div className="text-white bg-white rounded-full h-24 w-24 flex items-center justify-center">
              <p className="text-black">{Tool3Name}</p>
            </div>
          </li>
          <li className="inline-block px-4">
            <div className="text-white bg-white rounded-full h-24 w-24 flex items-center justify-center">
              <p className="text-black">{Tool4Name}</p>
            </div>
          </li>
          <li className="inline-block px-4">
            <div className="text-white bg-white rounded-full h-24 w-24 flex items-center justify-center">
              <p className="text-black">{Tool5Name}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

CircleList.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  Heading: PropTypes.string,
  Tool1Name: PropTypes.string,
  Tool2Name: PropTypes.string,
  Tool3Name: PropTypes.string,
  Tool4Name: PropTypes.string,
  Tool5Name: PropTypes.string
}

CircleList.defaultProps = {
  tagName: '',
  className: '',
  Heading: '',
  Tool1Name: '',
  Tool2Name: '',
  Tool3Name: '',
  Tool4Name: '',
  Tool5Name: ''
}

export default CircleList;