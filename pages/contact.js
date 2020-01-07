import '../styles/styles.css';
import CallToAction from '../components/CallToAction';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ImageHeader from '../components/ImageHeader';

const MainText = () => 
  <div>
    <h2 className="text-2xl">Interested in working on a project?</h2>
    <p className="text-sm">Contact me directly via email at 
    <a href="mailto:john@jwbentley.com" className="text-link-purple"> john@jwbentley.com</a> or via phone at
    <a href="tel:+17605324516" className="text-link-purple"> (760) 532-4516</a>. </p>
  </div>
;

export default function Home() {
  return (
    <div>
      <Navigation />
      <ImageHeader />
      <CallToAction
        ctaText={<MainText />}
      />    
      <Button 
        className={'button text-center text-white bg-dark-background'}
        buttonText={'Email Me'}
      />
      <Footer />
    </div>
  );
}