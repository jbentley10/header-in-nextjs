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

const Layout = () => (
  <div>
    <Navigation />
    <Hero 
      headingText={'Create. Analyze. Elevate.'}
      subtext={'I am a freelance web and graphic designer, passionate about taking brands to the next level.'}
    />
    <ThreeColumnIcons />
    <ImageTextSplit />
    <DotsTransition />
    <TwoTextSplit />
    <HorizontalBar />
    <CallToAction />
    <Footer />
  </div>
);

export default Layout;