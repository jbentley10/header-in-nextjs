import Hero from './Hero';
import ThreeColumnIcons from './ThreeColumnIcons';
import ImageTextSplit from './ImageTextSplit';
import CallToAction from './CallToAction';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

import '../styles/styles.css';

const Layout = props => (
  <div>
    <Hero />
    <ThreeColumnIcons />
    <ImageTextSplit />
    <ImageTextSplit />
    <CallToAction />
  </div>
);

export default Layout;