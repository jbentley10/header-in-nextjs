import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import VizSensor from 'react-visibility-sensor';
import '../styles/styles.css';
import { render } from 'react-dom';
import { Component } from 'react';

/* Component Layout */
class ThreeColumnIcons extends Component {
  state = {
    imgIsVisible: false
  }

  render() {
    return (
      
      <div className="three-column-icons bg-dark-background sm:block md:flex text-white w-full sm:text-center">
        <VizSensor
          onChange={(isVisible) => {
            this.setState({imgViz: isVisible})
          }}
        >
          <Link href='/work#pueblo-unido-pdx'>
            <div 
              style={{
                opacity: this.state.imgViz ? 1 : 0,
                transform: 'translateY(' + this.state.imgViz ? 0 : '20px' + ')',
                transition: 'all 2s linear'
              }}
              className="move-up three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 mb-7">
              <div className="bg-cool-green three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg pb-8 margin-0-auto opacity-100 border-8 border-cool-green--reduced-opacity">
                <img alt="Pueblo Unido website mockups on phone, tablet, and desktop" className="opacity-100 px-4 py-6" src="../static/pueblo-unido/pueblo-unido-mockup.webp" />
                <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-0">Design and Develop</h3>
              </div>
            </div>
          </Link>
        </VizSensor>
        <VizSensor
          partialVisibility
          onChange={(isVisible) => {
            this.setState({imgViz: isVisible})
          }}
        >
          <Link href='/work#pueblo-unido-pdx'>
            <div 
              style={{
                opacity: this.state.imgViz ? 1 : 0.25,
                transition: 'opacity 500ms linear'
              }}
              className="three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 md:mt-6">
              <div className="bg-cool-blue three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg margin-0-auto opacity-100 border-8 border-cool-blue--reduced-opacity">
                <img alt="Pueblo Unido website mockups on phone, tablet, and desktop" className="opacity-100 px-4 py-6" src="../static/pueblo-unido/pueblo-unido-mockup.webp" />
                <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-8">Build Your Brand</h3>
              </div>
            </div>
          </Link>
        </VizSensor>
      
        <VizSensor
          partialVisibility
          onChange={(isVisible) => {
            this.setState({imgViz: isVisible})
          }}
        >
          <Link href='/work#pueblo-unido-pdx'>
            <div 
              style={{
                opacity: this.state.imgViz ? 1 : 0.25,
                transition: 'opacity 500ms linear'
              }}
              className="move-up three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 mb-7">
              <div className="bg-cool-purple three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg pb-8 margin-0-auto opacity-100 border-8 border-cool-purple--reduced-opacity">
                <img alt="Pueblo Unido website mockups on phone, tablet, and desktop" className="opacity-100 px-4 py-6" src="../static/tripwire/tripwire-mockup.webp" />
                <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-0">Drive Results</h3>
              </div>
            </div>
          </Link>
        </VizSensor>
      </div>
    )
  }
}

export default ThreeColumnIcons;