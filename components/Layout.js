import Header from './Header';
import Heading from './Heading';
import ThreeColumnIcons from './ThreeColumnIcons';
import ImageTextSplit from './ImageTextSplit';
import CallToAction from './CallToAction';

import '../styles/styles.css';

const Layout = props => (
  <div>
    <Header />
    <Heading />
    <ThreeColumnIcons />
    <ImageTextSplit />
    <ImageTextSplit />
    <CallToAction />
  </div>
);

export default Layout;