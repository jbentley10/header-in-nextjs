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
      showModal4: false
    };
    
    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
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

  render() {
    return (
      <div>
        <Layout 
          pageMeta={{
            title: " | Work",
            keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
            description: "Learn more about the work I have done throughout my career, including brand redesigns, web design and development, and SEO-driven results."
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
                I rebranded the organization. The logo was reimagined, brand guideliness were set 
                in place, and Pueblo Unido's website was created from the ground up.</p>
              </div>
            </div>
  
            {/*
              Recrafting the Logo 
              In order to begin the rebranding process, I started by 
              created a fresh new logo for Pueblo Unido.
  
              The new logo takes inspiration from the image of Mt. Hood and the 
              Rockwood neighborhood of Portland, and a colorful gradient
              represents the beautiful diversity of the people of the United States. 
            */}
            <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
              <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
                <h3 className="text-left font-bold sm:text-5xl text-link-purple">Recrafting the Logo</h3>
                <p className="text-white">In order to begin the rebranding process, I started by 
                created a fresh new logo for Pueblo Unido.</p>
                <p>&nbsp;</p>
                <p className="text-white">The new logo takes inspiration from the image of Mt. Hood and the 
                Rockwood neighborhood of Portland, and a colorful gradient
                represents the beautiful diversity of the people of the United States.</p>
              </div>
              <div className="image-content sm:w-full md:w-2/5">
                <img onClick={this.handleOpenModal1} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/old-and-new.png" />
                <ReactModal 
                  isOpen={this.state.showModal1}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal1}>X</button>
                  <img onClick={this.handleCloseModal1} className="sm:m-auto md:m-auto cursor-pointer" src="../static/pueblo-unido/old-and-new.png" />
                </ReactModal>
                
              </div>
            </div> 
  
            {/*
              Establishing Brand Guidelines 
              Before developing the website, social media assets, and newsletter templates,
              I crafted a simple set of brand guidelines for the organization to follow.
  
              The brand guidelines reverberated into social media, the website, and all 
              future communications from Pueblo Unido PDX - creating a consistent
              look and feel across all the major marketing touchpoints.
            */}
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
                <img onClick={this.handleOpenModal2} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/flyer-ec-mention.svg" />
                <ReactModal 
                  isOpen={this.state.showModal2}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal2}>X</button>
                  <img onClick={this.handleCloseModal2} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/flyer-ec-mention.svg" />
                </ReactModal>
              </div>
            </div>
  
            {/*
              Building a Website
              I volunteered to create a website for Pueblo Unido PDX, based
              on these brand guidelines.
  
              The process began with an intake meeting between myself 
              and the various stakeholders of Pueblo Unido PDX, such as 
              the executive director, board members, and other volunteers.
  
              We discussed what the website would need, and what the major
              calls to actions for users of the website would be.
  
              From there, I generated a visual 'comp' of the website. Once that
              comp was approved, I coded the website by hand using HTML+CSS.  
            */}
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
                <img onClick={this.handleOpenModal3} className="cursor-pointer" src="../static/pueblo-unido/gala-landing-page.svg" />
                <ReactModal 
                  isOpen={this.state.showModal3}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal3}>X</button>
                  <img onClick={this.handleCloseModal3} className="cursor-pointer" src="../static/pueblo-unido/gala-landing-page.svg" />
                </ReactModal>
              </div>
            </div> 
  
            {/*
              Crafting Social Media and Newsletter Campaigns 
              Once the website was created, I began using the newly crafted
              brand guidelines to create compelling imagery for social media
              platforms such as Facebook and Instagram.
  
              In addition to creating these campaigns, I also worked on 
              monthly newsletters and critical updates from the organization,
              sent to 700+ users via MailChimp.
            */}
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
                <img onClick={this.handleOpenModal4} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/social-media-collage.svg" />
                <ReactModal 
                  isOpen={this.state.showModal4}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal4}>X</button>
                  <img onClick={this.handleCloseModal4} className="sm:m-auto md:m-0 cursor-pointer" src="../static/pueblo-unido/social-media-collage--black.svg" />
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