import Hero from './Hero';
import ThreeColumnIcons from './ThreeColumnIcons';
import ImageTextSplit from './ImageTextSplit';
import CallToAction from './CallToAction';
import DotsTransition from './Images/DotsTransition';
import TwoTextSplit from './TwoTextSplit';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

import '../styles/styles.css';

const Layout = () => (
  <div>
    <Hero />
    <ThreeColumnIcons />
    <ImageTextSplit />
    <DotsTransition />
    <TwoTextSplit />
    <CallToAction />
  </div>
);

export default Layout;