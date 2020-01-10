import Navigation from './Navigation';
import Hero from './Hero';
import ThreeColumnIcons from './ThreeColumnIcons';
import ImageTextSplit from './ImageTextSplit';
import CallToAction from './CallToAction';
import DotsTransition from './Images/DotsTransition';
import TwoTextSplit from './TwoTextSplit';
import HorizontalBar from './Images/HorizontalBar';
import Footer from './Footer';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope)

import '../styles/styles.css';
import HeaderFadeInAnimation from './HeaderFadeInAnimation';

let HeadingText = "Create. Analyze. Elevate." ;

let Subtext = 
  "I am a freelance web and graphic designer, passionate about taking brands to the next level."
;

const CTAText = () => 
  <div>
    <h2 className="text-2xl">Interested in learning more?</h2>
    <p className="text-sm"><a href="mailto:john@jwbentley.com" className="text-link-purple"> Contact me</a> directly.</p>
  </div>
;

const Layout = () => (
  <div>
    <Navigation />
    <Hero>
      <HeaderFadeInAnimation
        headingText={HeadingText}
        subtext={Subtext}
      />
    </Hero>
    <ThreeColumnIcons />
    <ImageTextSplit />
    <DotsTransition />
    <TwoTextSplit />
    <HorizontalBar />
    <CallToAction 
      ctaText={<CTAText />}
    />
    <Footer />
  </div>
);

export default Layout;