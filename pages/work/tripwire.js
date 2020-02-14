import '../../styles/styles.css';

import React from 'react';
import ReactModal from 'react-modal';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ImageHeader from '../../components/ImageHeader';
import CallToAction from '../../components/CallToAction';
import DotsTransition from '../../components/Images/DotsTransition';

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

export default class PuebloUnido extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModal7: false,
      showModal8: false,
      showModal9: false
    };
    
    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleOpenModal5 = this.handleOpenModal5.bind(this);
    this.handleOpenModal6 = this.handleOpenModal6.bind(this);
    this.handleOpenModal7 = this.handleOpenModal7.bind(this);
    this.handleOpenModal8 = this.handleOpenModal8.bind(this);
    this.handleOpenModal9 = this.handleOpenModal9.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    this.handleCloseModal5 = this.handleCloseModal5.bind(this);
    this.handleCloseModal6 = this.handleCloseModal6.bind(this);
    this.handleCloseModal7 = this.handleCloseModal7.bind(this);
    this.handleCloseModal8 = this.handleCloseModal8.bind(this);
    this.handleCloseModal9 = this.handleCloseModal9.bind(this);
  }
  
  handleOpenModal1 () {
    this.setState({ showModal1: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }

  handleOpenModal3 () {
    this.setState({ showModal3: true });
  }
  
  handleOpenModal4 () {
    this.setState({ showModal4: true });
  }

  handleOpenModal5 () {
    this.setState({ showModal5: true });
  }

  handleOpenModal6 () {
    this.setState({ showModal6: true });
  }

  handleOpenModal7 () {
    this.setState({ showModal7: true });
  }

  handleOpenModal8 () {
    this.setState({ showModal8: true });
  }

  handleOpenModal9 () {
    this.setState({ showModal9: true });
  }
  
  handleCloseModal1 () {
    this.setState({ showModal1: false });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  handleCloseModal3 () {
    this.setState({ showModal3: false });
  }

  handleCloseModal4 () {
    this.setState({ showModal4: false });
  }

  handleCloseModal5 () {
    this.setState({ showModal5: false });
  }

  handleCloseModal6 () {
    this.setState({ showModal6: false });
  }

  handleCloseModal7 () {
    this.setState({ showModal7: false });
  }

  handleCloseModal8 () {
    this.setState({ showModal8: false });
  }

  handleCloseModal9 () {
    this.setState({ showModal9: false });
  }

    render() {
        return (
        <div>
            <Layout 
            pageMeta={{
                title: "Tripwire - Work - Web Design and Development | John Bentley",
                keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
                description: "View examples of my work at Tripwire, including upgrading the look and feel, as well as SEO-driven results.",
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
                  {/* 
                Tripwire
              */}

              {/*
                Introduction Section 
              */}
              <div className="text-container w-full sm:p-8 md:p-24 lg:p-0" id="tripwire">
                <div className="text-content sm:p-4 md:p-24">
                  <h2 className="text-white text-center font-bold uppercase sm:text-6xl sm:mb-8 md:pb-1">
                    <a className="text-link-purple hover:text-link-purple-darker cursor-pointer" href="https://www.tripwire.com/" target="blank">Tripwire</a>
                  </h2>
    
                  <p className="text-white lg:w-4/6 m-auto">Since 1997, Tripwire has provided Fortune 500 companies the 
                  best technology in finding and preventing cybersecurity breaches and threats.</p>
                  <p>&nbsp;</p>
                  <p className="text-white lg:w-4/6 m-auto">During my time at Tripwire, I completely revamped the look and 
                  feel of the corporate website, as well as the customer-facing newsletter and email campaigns.</p>
                </div>
              </div>
                
              <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
                <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                  <h3 className="text-left font-bold sm:text-5xl text-link-purple">SEO</h3>
                  <p className="text-white">As part of revamping the website, I initialized a complete search engine 
                  optimization campaign starting with various high-traffic pages from across the site. </p>
                  <p>&nbsp;</p>
                  <p className="text-white">During the 2 weeks of my search engine optimization, I worked with our 
                  copywriter to create a brand new page on the website specifically crafted to generate a high amount 
                  of traffic and answer a question that a typical user might ask while visiting Tripwire’s website: 
                  “What is File Integrity Monitoring (FIM)?”. Compared to other pages on the site, this page had a 
                  longer overall time on page, lower bounce rate, and earned the top spot on the search engine 
                  results page for the keyword “what is FIM”. </p>
                  <p>&nbsp;</p>
                  <p className="text-white">During just 2 weeks of SEO on the site, I was able to increase search 
                  visibility by 25%. Page one rankings increased substantially as well. </p>
                </div>
                <div className="image-content sm:w-full md:w-2/5">
                  <picture>
                    <source type="image/webp" srcSet="../static/tripwire/seo-report.webp" />
                    <source type="image/jpeg" srcSet="../static/tripwire/seo-report.jpg" />
                    <img alt="SEO search optimization report" onClick={this.handleOpenModal5} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/seo-report.webp" />
                  </picture>
                  <ReactModal 
                    isOpen={this.state.showModal5}
                    contentLabel="Minimal Modal Example"
                  >
                    <button onClick={this.handleCloseModal5}>X</button>
                    <picture>
                      <source type="image/webp" srcSet="../static/tripwire/seo-report.webp" />
                      <source type="image/jpeg" srcSet="../static/tripwire/seo-report.jpg" />
                      <img onClick={this.handleCloseModal5} className="sm:m-auto md:m-auto cursor-pointer" src="../static/tripwire/seo-report.webp" />
                    </picture>
                  </ReactModal>
                  
                </div>
              </div> 
    
              <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
                <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                  <h3 className="font-bold sm:text-5xl text-link-purple">Design</h3>
                  <p className="text-white">My first task at Tripwire was to revamp all of the high-traffic pages on 
                  the site to use brand new components, with a significantly improved look and feel. I used React 
                  to present prototypes of these components to stakeholders, then a combination of CSHTML and 
                  Sitecore to integrate the components in the CMS. Once the components were integrated, they 
                  could be used anywhere throughout the site - making it easy for content authors to create 
                  compelling new pages.</p>
                  <p>&nbsp;</p>
                  <p className="text-white">When creating brand new pages, I presented hand-drawn wireframes 
                  to stakeholders, which were then converted into visual design comps. Once those comps 
                  were approved, I set out at building the page in Sitecore (again, coding and integrating 
                  new components if needed). </p>
                </div>
                <div className="image-content sm:p-8 sm:w-full md:w-2/5">
                  <picture>
                    <source type="image/webp" srcSet="../static/tripwire/tripwire-mockup.webp" />
                    <source type="image/jpeg" srcSet="../static/tripwire/tripwire-mockup.jpg" />
                    <img onClick={this.handleCloseModal6} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/tripwire-mockup.webp" />
                  </picture>                  
                  <ReactModal 
                    isOpen={this.state.showModal6}
                    contentLabel="Minimal Modal Example"
                  >
                    <button onClick={this.handleCloseModal6}>X</button>
                    <picture>
                      <source type="image/webp" srcSet="../static/tripwire/tripwire-mockup.webp" />
                      <source type="image/jpeg" srcSet="../static/tripwire/tripwire-mockup.jpg" />
                      <img onClick={this.handleCloseModal6} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/tripwire-mockup.webp" />
                    </picture>
                  </ReactModal>
                </div>
              </div>
    
              <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
                <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                  <h3 className="text-left font-bold sm:text-5xl text-link-purple">CMS Development</h3>
                  <p className="text-white">Several departments from within the organization (such as professional 
                  services, sales, legal, and R&D) required deliverables to be posted onto the website in order 
                  to ship products or be compliant. Throughout my time at Tripwire, I updated the CMS to serve 
                  this content while also helping departments to be more efficient in how this content was created. 
                  Documents that were previously PDFs were updated to a new, reusable page template in Sitecore, 
                  and the Training page was given a redesign to help users identify nearby training events.</p>
                  <p>&nbsp;</p>
                  <p className="text-white">To make the website even more scalable, I worked on migrating our 
                  existing site to a new managed service platform. Hosted using Azure as opposed to an on-prem 
                  solution, this new solution for the site offers greater flexibility for component styling, and 
                  will prevent Tripwire’s from any downtime during code deployments.</p>
                </div>
                <div className="image-content sm:p-8 sm:m-auto md:m-0 sm:w-full md:w-2/5">
                  <picture>
                      <source type="image/webp" srcSet="../static/tripwire/home-page-design.webp" />
                      <source type="image/jpeg" srcSet="../static/tripwire/home-page-design.jpg" />
                      <img onClick={this.handleCloseModal7} className="cursor-pointer" src="../static/tripwire/home-page-design.webp" />
                    </picture>                  
                    <ReactModal 
                    isOpen={this.state.showModal7}
                    contentLabel="Minimal Modal Example"
                  >
                    <button onClick={this.handleCloseModal7}>X</button>
                    <picture>
                      <source type="image/webp" srcSet="../static/tripwire/home-page-design.webp" />
                      <source type="image/jpeg" srcSet="../static/tripwire/home-page-design.jpg" />
                      <img onClick={this.handleCloseModal7} className="cursor-pointer" src="../static/tripwire/home-page-design.webp" />
                    </picture>
                  </ReactModal>
                </div>
              </div> 
    
              <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
                <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                  <h3 className="font-bold sm:text-5xl text-link-purple">Optimization</h3>
                  <p className="text-white">As part of the ongoing maintenance of the site, I crafted many A/B 
                  tests to enhance various components and web pages. </p>
                  <p>&nbsp;</p>
                  <p className="text-white">The most successful of these experiments was a complete overhaul 
                  of the home page, where I reduced the bounce rate by 10%. This overhaul included a redesigned 
                  version of the above the fold content, and rearrangement of the content below the fold. Before 
                  setting out on this redesign, I spent time carefully studying our heatmaps (in CrazyEgg) and 
                  site visitation (Google Analytics). Understanding where our users click after landing on the 
                  home page, combined with the knowledge of how they scroll and where they stop scrolling, gave 
                  me a clear path on developing this highly-successful test. </p>
                </div>
                <div className="image-content sm:w-full md:w-2/5">
                <picture>
                      <source type="image/webp" srcSet="../static/tripwire/optimization.webp" />
                      <source type="image/jpeg" srcSet="../static/tripwire/optimization.jpg" />
                      <img alt="Homepage A/B test for Tripwire" onClick={this.handleOpenModal8} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/optimization.webp" />
                    </picture>
                  <ReactModal 
                    isOpen={this.state.showModal8}
                    contentLabel="Minimal Modal Example"
                  >
                    <button onClick={this.handleCloseModal8}>X</button>
                    <picture>
                      <source type="image/webp" srcSet="../static/tripwire/optimization.webp" />
                      <source type="image/jpeg" srcSet="../static/tripwire/optimization.jpg" />
                      <img onClick={this.handleCloseModal8} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/optimization.webp" />
                    </picture>
                  </ReactModal>
                </div>
              </div> 
              <div className="flex bg-transparent">
                <div className="sm:py-12 md:p-12 flex-auto bg-transparent">
                  <div>
                    <Button 
                      buttonText={'Pueblo Unido'}
                      className={'button text-center text-white bg-transparent'}
                      linkHref={'/work/pueblo-unido#pueblo-unido'}
                      targetBlank={false}
                    />
                  </div>
                </div> 
                <div className="sm:py-12 md:p-12 flex-auto bg-transparent">
                  <div>
                    <Button 
                      buttonText={'Line Friends'}
                      className={'button text-center text-white bg-transparent'}
                      linkHref={'/work/line-friends#line-friends'}
                      targetBlank={false}
                    />
                  </div>
                </div> 
              </div>
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