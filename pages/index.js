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


export default function Home() {

  return (
    <div>
      <Layout
        pageMeta={{
          title: "- Freelance Web Designer | Home",
          keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
          description: "I am a freelance web designer and developer based in Portland, OR. Contact me now to elevate your brand and drive results."
        }}
        navigationClassName={'z-navigation lg:h-128 navigation h-56'}
        fadeInNav={true}
        logoWidth={'10%'}
        logoClassName={'logo-animate relative cursor-pointer'}
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
      </Layout>
    </div>
  );
}