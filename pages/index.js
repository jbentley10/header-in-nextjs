import '../styles/styles.css';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HeaderFadeInAnimation from '../components/HeaderFadeInAnimation';
import ThreeColumnIcons from '../components/ThreeColumnIcons';
import Button from '../components/Button';
import ImageTextSplit from '../components/ImageTextSplit';
import CallToAction from '../components/CallToAction';
import DotsTransition from '../components/Images/DotsTransition';
import TwoTextSplit from '../components/TwoTextSplit';
import HorizontalBar from '../components/Images/HorizontalBar';

const HeadingText = "Create. Analyze. Elevate.";
const Subtext = "I am a freelance web design and development professional, based in Portland, Oregon.";

const CTAText = () => 
  <div>
    <h2 className="text-3xl pb-12">Interested in working on a project?</h2>
    
    <Button
      buttonText={'Contact Me'}
      className={'button text-center text-white bg-dark-background'}
      linkHref={'/contact'}
      targetBlank={false}
    />
  </div>
;

const ImageTextSplitCopy = () =>
  <div>
    <div>
      <h3 className="image-text-split__heading text-3xl">Hello! My name is John Bentley.</h3>
      <p className="image-text-split__text sm:text-xl text-base">I am a freelance web design professional living in Portland, Oregon. Throughout my six years as a creative I’ve worked on many projects, with clients ranging from small, grassroots non-profits to large, fortune 500 companies. I am extremely passionate about taking brands to the next level.</p>
      <p>&nbsp;</p>
      <p className="image-text-split__text sm:text-xl text-base">Hire me for your next digital project, and get results!</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
    <div>
      <Button
        buttonText={'Learn More About Me'}
        className={'button text-left text-white bg-dark-background'}
        linkHref={'/about-me'}
        targetBlank={false}
      />
    </div>
  </div>
;

export default function Home() {

  return (
    <div>
      <Layout
        pageMeta={{
          title: "Freelance Web Design in Portland, Oregon | John Bentley",
          keywords: ["freelance", "web designer", "web design", "web developer", "portland", "oregon"],
          description: "I am freelance web design and development professional based in Portland, Oregon. Contact me now to elevate your brand and drive results.",
          URL: "https://www.jwbentley.com"
        }}
        navigationClassName={'z-navigation lg:h-128 navigation h-56'}
        fadeInNav={true}
        logoWidth={'10%'}
        logoClassName={'logo-animate relative cursor-pointer'}
        drawAnimations={true}
      >
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
          targetBlank={false}
        />
        <div className="bg-dark-background sm:h-8 md:h-32" />
        <ImageTextSplit
          copy={<ImageTextSplitCopy />}
          imageSrc={'../static/profile.png'}
          imageAlt={'John Bentley, Freelance Web Design Professional'}
        >
        </ImageTextSplit>
        <DotsTransition />
        <TwoTextSplit />
        <Button 
          buttonText={'See My Work'}
          className={'button text-center text-white bg-dark-background'}
          linkHref={'/work'}
          targetBlank={false}
        />
        <HorizontalBar />
        
        <CallToAction 
          ctaText={<CTAText />}
        />
        <div className="bg-dark-background h-12" />
      </Layout>
    </div>
  );
}