import '../styles/styles.css';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import ImageHeader from '../components/ImageHeader';
import Sidebar from '../components/Sidebar';
import CallToAction from '../components/CallToAction';
import LogoImageContainer from '../components/LogoImageContainer';
import CircleList from '../components/CircleList';
import DotsTransition from '../components/Images/DotsTransition';
import Footer from '../components/Footer';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CTAText = () => 
  <div>
    <h2 className="text-3xl pb-12">Interested in learning more?</h2>
    <Button
      buttonText={'Contact Me'}
      className={'button text-center text-white bg-dark-background'}
      linkHref='/contact'
    />
  </div>
;

export default function Home() {
  return (
    <div className="bg-dark-background">
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
      <LogoImageContainer 
        imageSource="../static/pueblo-unido-logo--gradient-blue.png"
        imageAltText="Pueblo Unido Logo"
      />
      
      <div className="text-container bg-dark-background w-full p-24">
        <div className="text-content shadow-white p-24">
          <h2 className="text-white">
            <a className="text-link-purple hover:text-link-purple-darker" href="https://www.pueblunidopdx.org" target="blank">Pueblo Unido PDX</a></h2>
          <p className="text-white">Since 2017, Pueblo Unido PDX has focused on helping
          immigrants get connected with legal representation in the Pacific Northwest.</p>
          <p>&nbsp;</p>
          <p className="text-white">During my two years as a volunteer for the non-profit, 
          I rebranded the organization. The logo was reimagined, brand guideliness were set 
          in place, and Pueblo Unido's website was created from the ground up.</p>
        </div>
      </div>
      <div className="image-container bg-dark-background w-full">
        <img className="bg-dark-background flex items-center justify-center" src="../static/pu-carousel-image.png" alt="Pueblo Unido Logo" />
      </div>
      <div className="text-container bg-dark-background w-full p-24">
        <div className="text-content shadow-white p-24 text-center">
          <h3 className="text-white">From web development, to social media and beyond</h3>
          <p className="text-white">I helped Pueblo Unido PDX launch its very own newsletter, 
          created posts for social media, and consulted with other volunteers on look and 
          feel for public-facing materials.</p>
        </div>
      </div>
      <div className="bg-dark-background m-auto w-1/2">
        <Carousel 
          autoPlay
          showArrows
        >
          <div>
            <img src="../static/pueblo-unido/Annual-Gala-Poster.png" />
            <p className="legend">Second Annual Gala Poster</p>
          </div>
          <div>
            <img src="../static/pueblo-unido/client-release-insta.png" />
            <p className="legend">Client Release Announcement</p>
          </div>
          <div>
            <img src="../static/pueblo-unido/facebook-headers.png" />
            <p className="legend">Facebook Headers for Notes</p>
          </div>
          <div>
            <img src="../static/pueblo-unido/take-action-header.png" />
            <p className="legend">Take Action Header</p>
          </div>
          
        </Carousel>
      </div>

      <CircleList 
        Heading={"Tools Used"}
        Tool1Name={"HTML"}
        Tool2Name={"CSS"}
        Tool3Name={"Adobe XD"}
      />
      <DotsTransition />
      <CallToAction 
        ctaText={<CTAText />}
      />
      <div className="bg-dark-background h-12" />
      <Footer />
    </div>
  );
}