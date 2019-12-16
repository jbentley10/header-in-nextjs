/* Utilities (React and Prismic) */
import React from 'react'
import { RichText } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

/* Components */
import Hero from '../Components/Hero';
import ThreeColumnIcons from '../Components/ThreeColumnIcons';
import ImageTextSplit from '../Components/ImageTextSplit';
import CallToAction from '../Components/CallToAction';
import DotsTransition from '../Components/Images/DotsTransition';
import TwoTextSplit from '../Components/TwoTextSplit';
import HorizontalBar from '../Components/Images/HorizontalBar';
import Footer from '../Components/Footer';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope)

/* CSS */
import '../styles/styles.css';

const Homepage = (props) => { 
  <div>
    <Hero 
      heading={RichText.render(props.home.data.hero_heading)}
      subtext={RichText.render(props.home.data.hero_subheading)}
    />
    <ThreeColumnIcons />
    <ImageTextSplit />
    <DotsTransition />
    <TwoTextSplit />
    <HorizontalBar />
    <CallToAction />
    <Footer />
  </div>
}
 
Homepage.getInitialProps = async context => {
  const home = await client.getSingle('homepage')

  return { home }
}

export default Homepage