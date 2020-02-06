import '../styles/styles.css';

import React from 'react';
import ReactModal from 'react-modal';

import Layout from '../components/Layout';
import Button from '../components/Button';
import ImageHeader from '../components/ImageHeader';
import ThreeColumnIcons from '../components/ThreeColumnIcons';
import CallToAction from '../components/CallToAction';
import DotsTransition from '../components/Images/DotsTransition';

const CTAText = () => 
  <div>
    <h2 className="text-3xl pb-12">Interested in working on a project?</h2>
    <Button
      buttonText={'Contact Me'}
      className={'button text-center text-white'}
      linkHref='/contact'
      targetBlank={false}
    />
  </div>
;

export default class Work extends React.Component {

  render() {
    return (
      <div>
        <Layout 
          pageMeta={{
            title: "Work - Web Design and Development | John Bentley",
            keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
            description: "View examples of my work in my freelance web design and development portfolio, including brand redesigns and SEO-driven results.",
            URL: "https://www.jwbentley.com/work"
          }}
          navigationClassName={'z-navigation lg:h-128 navigation h-56'}
          fadeInNav={false}
          logoWidth={'7%'}
          logoClassName={'relative cursor-pointer logo'}
          drawAnimations={false}
        >
          <ImageHeader 
            heading={"Work"}
          />
          <div className="background-dots">
            <div className="h-64" />
            <ThreeColumnIcons />
          </div>
  
          <DotsTransition 
            className={'-mt-6 pt-12'}
          />
          <CallToAction 
            ctaText={<CTAText />}
          />
          <div className="h-12 bg-dark-background" />
        </Layout>
      </div>
    );
  }
}