import '../styles/styles.css';

import React from 'react';
import ReactModal from 'react-modal';

import Layout from '../components/Layout';
import Button from '../components/Button';
import ImageHeader from '../components/ImageHeader';
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
            {/*
              Introduction Section 
            */}
            <div className="text-container w-full sm:p-8 md:p-24 lg:p-0" id="pueblo-unido-pdx">
              <div className="text-content sm:p-4 md:p-24">
                <h2 className="text-white text-center font-bold uppercase sm:text-6xl sm:mb-8 md:pb-1">
                  <a className="text-link-purple hover:text-link-purple-darker cursor-pointer" href="https://www.pueblounidopdx.org/" target="blank">Pueblo Unido PDX</a>
                </h2>
  
                <p className="text-white lg:w-4/6 m-auto">Since 2017, Pueblo Unido PDX has focused on helping
                immigrants get connected with legal representation in the Pacific Northwest.</p>
                <p>&nbsp;</p>
                <p className="text-white lg:w-4/6 m-auto">During my two years as a volunteer for the non-profit, 
                I rebranded the organization. The logo was reimagined, brand guidelines were set 
                in place, and Pueblo Unido's website was created from the ground up.</p>
              </div>
            </div>
              
            <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
              <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                <h3 className="text-left font-bold sm:text-5xl text-link-purple">Recrafting the Logo</h3>
                <p className="text-white">In order to begin the rebranding process, I started by 
                creating a fresh new logo for Pueblo Unido.</p>
                <p>&nbsp;</p>
                <p className="text-white">The new logo takes inspiration from the image of Mt. Hood and the 
                Rockwood neighborhood of Portland, and a colorful gradient
                represents the beautiful diversity of the people of the United States.</p>
              </div>
              <div className="image-content sm:w-full md:w-2/5">
                <img alt="Pueblo Unido original and new logos" onClick={this.handleOpenModal1} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/old-and-new.png" />
                <ReactModal 
                  isOpen={this.state.showModal1}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal1}>X</button>
                  <img onClick={this.handleCloseModal1} className="sm:m-auto md:m-auto cursor-pointer" src="../static/pueblo-unido/old-and-new.png" />
                </ReactModal>
                
              </div>
            </div> 
  
            <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
              <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                <h3 className="font-bold sm:text-5xl text-link-purple">Establishing Brand Guidelines</h3>
                <p className="text-white">Before developing the website, social media assets, and newsletter templates,
                I crafted a simple set of brand guidelines for the organization to follow.</p>
                <p>&nbsp;</p>
                <p className="text-white">The brand guidelines reverberated into social media, the website, and all 
                future communications from Pueblo Unido PDX — creating a consistent
                look and feel across all the major marketing touchpoints.</p>
              </div>
              <div className="image-content sm:p-8 sm:w-full md:w-2/5">
                <img alt="Pueblo Unido flyer for potential clients" onClick={this.handleOpenModal2} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/flyer-ec-mention.svg" />
                <ReactModal 
                  isOpen={this.state.showModal2}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal2}>X</button>
                  <img onClick={this.handleCloseModal2} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/flyer-ec-mention.svg" />
                </ReactModal>
              </div>
            </div>
  
            <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
              <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                <h3 className="text-left font-bold sm:text-5xl text-link-purple">Building a Website</h3>
                <p className="text-white">I volunteered to create a website for Pueblo Unido PDX, based
                on these brand guidelines.</p>
                <p>&nbsp;</p>
                <p className="text-white">The process began with an intake meeting between myself 
                and the various stakeholders of Pueblo Unido PDX, such as 
                the executive director, board members, and other volunteers.</p>
                <p>&nbsp;</p>
                <p className="text-white">We discussed what the website would need, and what the major
                calls to actions for users of the website would be.</p>
                <p>&nbsp;</p>
                <p className="text-white">From there, I generated a visual 'comp' of the website. Once that
                comp was approved, I coded the website by hand using HTML+CSS.</p>
              </div>
              <div className="image-content sm:p-8 sm:m-auto md:m-0 sm:w-full md:w-2/5">
                <img alt="Pueblo Unido Anniversary Gala landing page comp" onClick={this.handleOpenModal3} className="cursor-pointer" src="../static/pueblo-unido/gala-landing-page.svg" />
                <ReactModal 
                  isOpen={this.state.showModal3}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal3}>X</button>
                  <img onClick={this.handleCloseModal3} className="cursor-pointer" src="../static/pueblo-unido/gala-landing-page.svg" />
                </ReactModal>
              </div>
            </div> 
  
            <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
              <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                <h3 className="font-bold sm:text-5xl text-link-purple">Crafting Social Media and Newsletter Campaigns</h3>
                <p className="text-white">Once the website was created, I began using the newly crafted
                brand guidelines to create compelling imagery for social media
                platforms such as Facebook and Instagram.</p>
                <p>&nbsp;</p>
                <p className="text-white">In addition to creating these campaigns, I also worked on 
                monthly newsletters and critical updates from the organization,
                sent to 700+ users via MailChimp.</p>
              </div>
              <div className="image-content sm:w-full md:w-2/5">
                <img alt="Various social media and newsletter designs" onClick={this.handleOpenModal4} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/social-media-collage.svg" />
                <ReactModal 
                  isOpen={this.state.showModal4}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal4}>X</button>
                  <img onClick={this.handleCloseModal4} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/social-media-collage--black.svg" />
                </ReactModal>
              </div>
            </div> 

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
                <img alt="Pueblo Unido original and new logos" onClick={this.handleOpenModal5} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/seo-report.webp" />
                <ReactModal 
                  isOpen={this.state.showModal5}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal5}>X</button>
                  <img onClick={this.handleCloseModal5} className="sm:m-auto md:m-auto cursor-pointer" src="../static/tripwire/seo-report.webp" />
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
                <img alt="Pueblo Unido flyer for potential clients" onClick={this.handleOpenModal6} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/tripwire-mockup.webp" />
                <ReactModal 
                  isOpen={this.state.showModal6}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal6}>X</button>
                  <img onClick={this.handleCloseModal6} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/tripwire-mockup.webp" />
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
                <img alt="Pueblo Unido Anniversary Gala landing page comp" onClick={this.handleOpenModal7} className="cursor-pointer" src="../static/tripwire/home-page-design.webp" />
                <ReactModal 
                  isOpen={this.state.showModal7}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal7}>X</button>
                  <img onClick={this.handleCloseModal7} className="cursor-pointer" src="../static/tripwire/home-page-design.webp" />
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
                <img alt="Various social media and newsletter designs" onClick={this.handleOpenModal8} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/optimization.webp" />
                <ReactModal 
                  isOpen={this.state.showModal8}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal8}>X</button>
                  <img onClick={this.handleCloseModal8} className="sm:m-auto md:m-0 cursor-pointer" src="../static/tripwire/optimization.webp" />
                </ReactModal>
              </div>
            </div> 

            {/* 
              LINE FRIENDS
            */}

            {/*
              Introduction Section 
            */}
            <div className="text-container w-full sm:p-8 md:p-24 lg:p-0" id="tripwire">
              <div className="text-content sm:p-4 md:p-24">
                <h2 className="text-white text-center font-bold uppercase sm:text-6xl sm:mb-8 md:pb-1">
                  <a className="text-link-purple hover:text-link-purple-darker cursor-pointer" href="https://store.linefriends.com/" target="blank">LINE FRIENDS</a>
                </h2>
  
                <p className="text-white lg:w-4/6 m-auto">LINE FRIENDS is a marketing campaign presented by 
                LINE - the highly successful messaging app. </p>
                <p>&nbsp;</p>
                <p className="text-white lg:w-4/6 m-auto">As a freelancer, I helped to migrate the LINE FRIENDS 
                Shopify store to an entirely new platform, using both Shopify and Shogun (a page template editor).</p>
              </div>
            </div>
              
            <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
              <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                <h3 className="text-left font-bold sm:text-5xl text-link-purple">Shopify Recoded</h3>
                <p className="text-white">As a developer on the project, I learned how to develop templates 
                quickly using Shopify’s own templating language, Liquid. Using Liquid, I created a dynamic 
                Collection filtering system that takes existing products and collections and allows the user 
                to sort them on the front end. </p>
                <p>&nbsp;</p>
                <p className="text-white">In addition to modifying Liquid files for an enhanced user experience, 
                I used Shogun to control the layout of the various pages. Once templates were created in Liquid, 
                I could use them in Shogun. This made page editing a breeze, as we could easily drag and 
                drop new templates onto pages. Given only wireframes to complete this project, we were able 
                to create a beautiful site in only 2 weeks.</p>
              </div>
              <div className="image-content sm:w-full md:w-2/5">
                <img alt="Pueblo Unido original and new logos" onClick={this.handleOpenModal9} className="sm:m-auto md:m-0 cursor-pointer" src="../static/line-friends/line-friends-home.webp" />
                <ReactModal 
                  isOpen={this.state.showModal9}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal9}>X</button>
                  <img onClick={this.handleCloseModal9} className="sm:m-auto md:m-auto cursor-pointer" src="../static/line-friends/line-friends-home.webp" />
                </ReactModal>
                
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