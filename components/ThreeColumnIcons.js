import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/styles.css';

/* Component Layout */
const ThreeColumnIcons = () => (
  <div className="three-column-icons text-center bg-dark-background text-white px-12">
    <div className="three-column-icons__content-row inline w-4/5 m-0 text-center">
      <div className="move-up three-column-icons__left inline-block p-12 mb-7">
        <div className="three-column-icons__icon w-20 h-20 pb-8 margin-0-auto">
          <FontAwesomeIcon icon="check-square" className="text-6xl shadow-none" />
        </div>
        <div className="three-column-icons__text text-left mt-8">
          <h3 className="text-3xl">Design and Develop</h3>
        </div>
      </div>
      <div className="three-column-icons__middle inline-block p-12 mt-6">
        <div className="three-column-icons__icon w-20 h-20 margin-0-auto">
          <FontAwesomeIcon icon="check-square" className="text-6xl shadow-none" />
        </div>
        <div className="three-column-icons__text text-left mt-8">
          <h3 className="text-3xl">Build Your Brand</h3>
        </div>
      </div>
      <div className="move-up three-column-icons__right inline-block p-12 mb-7">
        <div className="three-column-icons__icon w-20 h-20 pb-8 margin-0-auto">
          <FontAwesomeIcon icon="check-square" className="text-6xl shadow-none" />
        </div>
        <div className="three-column-icons__text text-left mt-8">
          <h3 className="text-3xl">Drive Results</h3>
        </div>
      </div>
      <Button 
        buttonText={'View My Services'}
      />
    </div>

    <style jsx>{`
      
    `}</style>
  </div>
);

export default ThreeColumnIcons;