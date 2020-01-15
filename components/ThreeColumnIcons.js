import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import '../styles/styles.css';

/* Component Layout */
const ThreeColumnIcons = () => (
  <div className="three-column-icons bg-dark-background sm:block md:flex text-white w-full sm:text-center">
    <Link href='/work#pueblo-unido-pdx'>
      <div className="move-up three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 mb-7">
        <div className="bg-cool-green three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg pb-8 margin-0-auto opacity-100 border-8 border-cool-green--reduced-opacity">
          <img className="opacity-100" src="../static/pueblo-unido/pueblo-unido-mockup.png" />
          <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-0">Design and Develop</h3>
        </div>
      </div>
    </Link>
    <Link href='/work#pueblo-unido-pdx'>
      <div className="three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 md:mt-6">
        <div className="bg-cool-blue three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg margin-0-auto opacity-100 border-8 border-cool-blue--reduced-opacity">
          <img className="opacity-100" src="../static/pueblo-unido/pueblo-unido-mockup.png" />
          <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-8">Build Your Brand</h3>
        </div>
      </div>
    </Link>
    
    <Link href='/work#pueblo-unido-pdx'>
      <div className="move-up three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 mb-7">
        <div className="bg-cool-purple three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg pb-8 margin-0-auto opacity-100 border-8 border-cool-purple--reduced-opacity">
          <img className="opacity-100" src="../static/tripwire/tripwire-mockup.png" />
          <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-0">Drive Results</h3>
        </div>
      </div>
    </Link>
    <style jsx>{`
      
    `}</style>
  </div>
);

export default ThreeColumnIcons;