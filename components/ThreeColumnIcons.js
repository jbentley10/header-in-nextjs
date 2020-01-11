import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/styles.css';

/* Component Layout */
const ThreeColumnIcons = () => (
  <div className="three-column-icons bg-dark-background text-white px-12 w-full sm:text-center">
    <div className="move-up three-column-icons__left inline-block sm:py-12 md:p-8 mb-7">
      <div className="three-column-icons__icon w-20 sm:h-12 md:h-20 pb-8 margin-0-auto">
        <FontAwesomeIcon icon="check-square" className="text-6xl shadow-none" />
      </div>
      <div className="three-column-icons__text sm:text-center md:w-56 mt-8">
        <h3 className="text-2xl">Design and Develop</h3>
      </div>
    </div>
    <div className="three-column-icons__middle inline-block sm:py-12 md:p-8 md:mt-6">
      <div className="three-column-icons__icon w-20 sm:h-12 md:h-20 margin-0-auto">
        <FontAwesomeIcon icon="check-square" className="text-6xl shadow-none" />
      </div>
      <div className="three-column-icons__text sm:text-center md:w-56 mt-8">
        <h3 className="text-2xl">Build Your Brand</h3>
      </div>
    </div>
    <div className="move-up three-column-icons__right inline-block sm:py-12 md:p-8 mb-7">
      <div className="three-column-icons__icon w-20 sm:h-12 md:h-20 pb-8 margin-0-auto">
        <FontAwesomeIcon icon="check-square" className="text-6xl shadow-none" />
      </div>
      <div className="three-column-icons__text sm:text-center md:w-56 mt-8">
        <h3 className="text-2xl">Drive Results</h3>
      </div>
    </div>
    <p>&nbsp;</p>

    <style jsx>{`
      
    `}</style>
  </div>
);

export default ThreeColumnIcons;