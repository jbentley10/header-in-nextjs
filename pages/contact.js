import '../styles/styles.css';
import CallToAction from '../components/CallToAction';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ImageHeader from '../components/ImageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainText = () => 
  <div>
    <h2 className="text-3xl">Interested in working on a project?</h2>
    <p>&nbsp;</p>
    <p className="text-lg">Contact me directly via phone or email: </p> 
    <p><FontAwesomeIcon icon="envelope" className="text-6xl shadow-none p-4 cursor-pointer inline-block align-middle" /><a href="mailto:john@jwbentley.com" className="text-link-purple hover:text-link-purple-darker align-middle"> john@jwbentley.com</a></p>
    <p><FontAwesomeIcon icon="phone" className="text-6xl shadow-none p-4 cursor-pointer inline-block align-middle" /><a href="tel:+17605324516" className="text-link-purple hover:text-link-purple-darker align-middle"> (760) 532-4516</a></p>
    <p className="text-lg">I am currently accepting clients.</p>
  </div>
;

export default function Home() {
  return (
    <div>
      <Navigation />
      <ImageHeader 
        heading={'Contact'}
      />
      <CallToAction
        ctaText={<MainText />}
      />    
      <div className="bg-dark-background md:h-24" />
      <Footer />
    </div>
  );
}