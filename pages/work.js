import '../styles/styles.css';
import Navigation from '../components/Navigation';
import ImageHeader from '../components/ImageHeader';
import Sidebar from '../components/Sidebar';
import CallToAction from '../components/CallToAction';
import DotsTransition from '../components/images/DotsTransition';
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
      <div className="image-container bg-dark-background w-full p-24">
        <img className="bg-dark-background h-full flex items-center justify-center" src="../static/pueblo-unido-logo--gradient-blue.png" alt="Pueblo Unido Logo" />
      </div>
      <div className="text-container bg-dark-background w-full p-24">
        <div className="text-content shadow-white p-24">
          <h2 className="text-white">Lorem ipsum solor dut amet.</h2>
          <p className="text-white">Hi I'm some paragraph text</p>
        </div>
      </div>
      <div className="image-container bg-dark-background w-full">
        <img className="bg-dark-background flex items-center justify-center" src="../static/pu-carousel-image.png" alt="Pueblo Unido Logo" />
      </div>
      <div className="text-container bg-dark-background w-full p-24">
        <div className="text-content shadow-white p-24 text-center">
          <h3 className="text-white">Lorem ipsum solor dut amet.</h3>
          <p className="text-white">Hi I'm some paragraph text</p>
        </div>
      </div>
      <div className="text-container bg-dark-background w-full p-24">
        <div className="text-content shadow-white p-24 text-center">
          <h3 className="text-white">Tools Used</h3>
          <ul className="tool-list inline">
            <li className="inline-block">
              <div className="text-white bg-white rounded-full h-16 w-16 flex items-center justify-center">
                <p className="text-black">Tool</p>
              </div>
            </li>
            <li className="inline-block">
              <div className="text-white bg-white rounded-full h-16 w-16 flex items-center justify-center">
                <p className="text-black">Tool</p>
              </div>
            </li>
            <li className="inline-block">
              <div className="text-white bg-white rounded-full h-16 w-16 flex items-center justify-center">
                <p className="text-black">Tool</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <DotsTransition />
      <CallToAction 
        ctaText={<CTAText />}
      />
      <Footer />
    </div>
  );
}