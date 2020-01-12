import Navigation from './Navigation';
import Hero from './Hero';
import ThreeColumnIcons from './ThreeColumnIcons';
import Button from './Button';
import ImageTextSplit from './ImageTextSplit';
import CallToAction from './CallToAction';
import DotsTransition from './Images/DotsTransition';
import TwoTextSplit from './TwoTextSplit';
import HorizontalBar from './Images/HorizontalBar';
import Footer from './Footer';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faArrowDown)

import '../styles/styles.css';
import HeaderFadeInAnimation from './HeaderFadeInAnimation';

const HeadingText = "Create. Analyze. Elevate.";
const Subtext = "I am a freelance web and graphic designer, passionate about taking brands to the next level.";

const CTAText = () => 
  <div>
    <h2 className="text-3xl sm:pb-4 md:pb-0">Interested in learning more?</h2>
    <p className="sm:text-xl md:text-sm"><a href="mailto:john@jwbentley.com" className="text-link-purple hover:text-link-purple-darker cursor:pointer"> Contact me</a> directly.</p>
  </div>
;

const Layout = () => (
  <div>
    <Navigation 
      delayWork={5200}
      delayAbout={5700}
      delayServices={6200}
      delayContact={6700}
    />
    <Hero>
      <HeaderFadeInAnimation
        headingText={HeadingText}
        subtext={Subtext}
      />
    </Hero>
    <ThreeColumnIcons />
    <Button 
      buttonText={'View My Services'}
      className={'button text-center text-white bg-dark-background border-0'}
      linkHref='/services'
    />
    <ImageTextSplit>
      <img className="rounded-full h-full sm:w-full md:w-4/6 flex items-center justify-center" src="../static/profile.png" alt="John Bentley Freelance Web Designer" />
    </ImageTextSplit>
    <DotsTransition />
    <TwoTextSplit />
    <Button 
      buttonText={'See My Work'}
      className={'button text-center text-white bg-dark-background'}
      linkHref='/work'
    />
    <HorizontalBar />
    <CallToAction 
      ctaText={<CTAText />}
    />
    <Footer />
  </div>
);

export default Layout;