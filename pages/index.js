// Import styles
import '../styles/styles.css';

// Import dependencies
import React from 'react';
import { StaticKitProvider } from '@statickit/react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Import functions
import { fetchHomePage } from '../utils/contentfulPages'

// Import components
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HeaderFadeInAnimation from '../components/HeaderFadeInAnimation';
import ThreeColumnIcons from '../components/ThreeColumnIcons';
import Button from '../components/Button';
import ImageTextSplit from '../components/ImageTextSplit';
import CallToAction from '../components/CallToAction';
import DotsTransition from '../components/Images/DotsTransition';
import BlobsTransition from '../components/Images/BlobsTransition';
import HorizontalBar from '../components/Images/HorizontalBar';
import TwoTextSplit from '../components/TwoTextSplit'; 

export default function Home({ res }) {

  return (   
    <StaticKitProvider site="d63545d25c9c">
      <Layout
        pageMeta={{
          title: "Freelance Web Design - Portland, Oregon | John Bentley Creative",
          keywords: ["freelance", "web designer", "web design", "web developer", "portland", "oregon", "john bentley creative"],
          description: "I am a creative professional specializing in WordPress development and freelance web design in Portland, Oregon. Contact me now to discover how John Bentley Creative can elevate your brand and drive results.",
          URL: "https://www.jwbentley.com"
        }}
        navigationClassName={'z-navigation lg:h-128 navigation h-56'}
        fadeInNav={true}
        logoWidth={'10%'}
        logoClassName={'logo-animate relative cursor-pointer'}
        drawAnimations={true}
        animationClassName={'navigation navigation--home mr-8 sm:w-full md:w-auto'}
      >
        <Hero>
          <HeaderFadeInAnimation
            headingText={res.fields.headerFadeInAnimationHeading}
            subtext={res.fields.headerFadeInAnimationSubheading}
          />
        </Hero>
        <ThreeColumnIcons 
          Block1Copy={res.fields.threeColumnIconText1}
          Block1ClassName='move-up three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 mb-7'
          Block1FileName='pueblo-unido-mockup'
          Block1Link='/work/pueblo-unido'
          Block2Copy={res.fields.threeColumnIconText2}
          Block2ClassName='move-up three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 mb-7'
          Block2FileName='tripwire-mockup'
          Block2Link='/work/tripwire'
          Block3Copy={res.fields.threeColumnIconText3}
          Block3ClassName='move-up three-column-icons__container bg-dark-background sm:block md:inline-block sm:py-12 md:p-8 mb-7'
          Block3FileName='line-friends-mockup'
          Block3Link='/work/line-friends'
        >

        </ThreeColumnIcons>
        <Button 
          buttonText={'View My Services'}
          className={'button text-center text-white bg-dark-background border-0'}
          linkHref={'/services'}
          targetBlank={false}
        />
        <div className="bg-dark-background sm:h-8 md:h-32" />
        <BlobsTransition />
        <ImageTextSplit
          heading={res.fields.imageTextSplitHeading}
          paragraph={res.fields.imageTextSplitParagraphShort}
          imageSrc={'profile'}
          imageAlt={'John Bentley Creative, Freelance Web Design and WordPress Development in Portland Oregon'}
        >
        </ImageTextSplit>
        {/* <DotsTransition /> */}
        <TwoTextSplit 
          splitText1={documentToHtmlString(res.fields.twoTextSplitParagraph1)}
          splitText2={documentToHtmlString(res.fields.twoTextSplitParagraph2)}
        />
        <Button 
          buttonText={'See My Work'}
          className={'button text-center text-white bg-dark-background'}
          linkHref={'/work'}
          targetBlank={false}
        />
        <HorizontalBar />
        
        <CallToAction 
          heading={res.fields.callToActionHeading}
          buttonText={'Contact Me'}
        />
        <div className="bg-dark-background h-12" />
      </Layout>
    </StaticKitProvider>    
  );
}

export async function getStaticProps() {
  const res = await fetchHomePage()

  if (res.fields) {
    return {
      props: {
        res,
      },
    }
  }
}
