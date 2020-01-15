import '../styles/styles.css';
import Head from 'next/head';
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
import { faCheckSquare, faCoffee, faEnvelope, faArrowDown, faPhoneAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faArrowDown, faPhoneAlt, faPhone )

import '../styles/styles.css';
import HeaderFadeInAnimation from './HeaderFadeInAnimation';

const HeadingText = "Create. Analyze. Elevate.";
const Subtext = "I am a freelance web and graphic designer, passionate about taking brands to the next level.";

const CTAText = () => 
  <div>
    <h2 className="text-3xl pb-12">Interested in learning more?</h2>
    <Button
      buttonText={'Contact Me'}
      className={'button text-center text-white bg-dark-background'}
      linkHref={'/contact'}
    />
  </div>
;

const Layout = () => (
  <div>
    <Head>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>John Bentley - Freelance Web Designer</title>
      <meta name="description" content="I am a freelance web designer and developer based in Portland, OR. Contact me now to elevate 
      your brand and drive results."/>
    </Head>
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
    <div className="bg-dark-background pb-5" />
    <Button 
      buttonText={'View My Services'}
      className={'button text-center text-white bg-dark-background border-0'}
      linkHref={'/services'}
    />
    <div className="bg-dark-background sm:h-8 md:h-32" />
    <ImageTextSplit>
      <img className="rounded-full h-full sm:w-full md:w-4/6 flex items-center justify-center" src="../static/profile.png" alt="John Bentley Freelance Web Designer" />
    </ImageTextSplit>
    <DotsTransition />
    <TwoTextSplit />
    <Button 
      buttonText={'See My Work'}
      className={'button text-center text-white bg-dark-background'}
      linkHref={'/work'}
    />
    <HorizontalBar />
    <CallToAction 
      ctaText={<CTAText />}
    />
    <div className="bg-dark-background h-12" />
    <Footer />
  </div>
);

export default Layout;