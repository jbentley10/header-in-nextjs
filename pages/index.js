/* Utilities (React and Prismic) */
import React from 'react'
import Prismic from 'prismic-javascript'
import PrismicDom from 'prismic-dom'
var apiEndpoint = "https://portfolionextjs.cdn.prismic.io/api/v2";
import RichText from 'prismic-reactjs'

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

export default class extends React.Component {
  static async getInitialProps(context) {
    const req = context.req
    const home = await this.getHomePage(req)
    return {
      doc: home
    }
  }
 
  static async getHomePage (req) {
    const API = await Prismic.getApi(apiEndpoint, { req })
    return await API.getSingle('homepage')
  }
 
  /* Get the components for the homepage */
  render () {
    return (
      <div>
        <Hero 
          heading={RichText.asText(this.props.doc.data.hero_heading)}
          subtext={RichText.asText(this.props.doc.data.hero_subheading)}
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
  }
}