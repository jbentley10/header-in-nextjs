import '../styles/styles.css';
import Navigation from '../components/Navigation';
import ImageHeader from '../components/ImageHeader';
import Sidebar from '../components/Sidebar';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const CTAText = () => 
  <div>
    <h2 className="text-2xl">Interested in learning more?</h2>
    <p className="text-sm"><a href="mailto:john@jwbentley.com" className="text-link-purple"> Contact me</a> directly.</p>
  </div>
;

export default function Home() {
  return (
    <div>
      <Navigation />
      <ImageHeader 
        heading={"Work"}
      />
      <Sidebar 
        Link1Title={'Pueblo Unido'}
        Link1Link={'https://www.pueblounidopdx.org'}
        Link2Title={'Tripwire'}
        Link2Link={'https://www.tripwire.com'}
        Link3Title={'iD Tech'}
        Link3Link={'https://www.idtech.com'}
        Link4Title={'Line Friends'}
        Link4Link={'https://store.linefriends.com/'}
      />
      <CallToAction 
        ctaText={<CTAText />}
      />
      <Footer />
    </div>
  );
}