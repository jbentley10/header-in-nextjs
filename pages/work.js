import '../styles/styles.css';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import ImageHeader from '../components/ImageHeader';
import Sidebar from '../components/Sidebar';
import CallToAction from '../components/CallToAction';
import LogoImageContainer from '../components/LogoImageContainer';
import DotsTransition from '../components/Images/DotsTransition';
import Footer from '../components/Footer';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CTAText = () => 
  <div>
    <h2 className="text-3xl pb-12">Interested in learning more?</h2>
    <Button
      buttonText={'Contact Me'}
      className={'button text-center text-white'}
      linkHref='/contact'
    />
  </div>
;

export default function Home() {
  return (
    <div>
      <Navigation />
      <ImageHeader 
        heading={"Work"}
      />
      <div className="background-dots">
      <LogoImageContainer 
        imageSource="../static/pueblo-unido-logo--gradient-blue.png"
        imageAltText="Pueblo Unido Logo"
      />
      
      <div className="text-container w-full sm:p-8 md:p-24">
        <div className="text-content shadow-white sm:p-8 md:p-24">
          <h2 className="text-white sm:text-4xl sm:mb-8 md:mb-0">
            <a className="text-link-purple hover:text-link-purple-darker" href="https://www.pueblunidopdx.org" target="blank">Pueblo Unido PDX</a></h2>
          <p className="text-white">Since 2017, Pueblo Unido PDX has focused on helping
          immigrants get connected with legal representation in the Pacific Northwest.</p>
          <p>&nbsp;</p>
          <p className="text-white">During my two years as a volunteer for the non-profit, 
          I rebranded the organization. The logo was reimagined, brand guideliness were set 
          in place, and Pueblo Unido's website was created from the ground up.</p>
        </div>
      </div>
      <div className="image-container w-full">
        <img className="flex items-center justify-center" src="../static/pu-carousel-image.png" alt="Pueblo Unido Logo" />
      </div>
      <div className="text-container w-full sm:p-8 md:p-24">
        <div className="text-content shadow-white sm:p-8 md:p-24">
          <h3 className="text-white sm:text-4xl sm:mb-8 md:mb-0 text-left">From web development, to social media and beyond</h3>
          <p className="text-white text-left">I helped Pueblo Unido PDX launch its very own newsletter, 
          created posts for social media, and consulted with other volunteers on look and 
          feel for public-facing materials.</p>
        </div>
      </div>
      <div className="w-full">
        <div className="m-auto w-1/2">
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
      </div>  
      </div>  

      <DotsTransition 
        className={'-mt-6 pt-12'}
      />
      <CallToAction 
        ctaText={<CTAText />}
      />
      <div className="h-12" />
      <Footer />
    </div>
  );
}