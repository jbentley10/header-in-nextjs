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

const customStyles = {
  content : {
    position: 'relative'
  }
}

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
                title: "Pueblo Unido - Work - Web Design and Development | John Bentley Creative",
                keywords: ["freelance", "web designer", "web developer", "portland", "oregon", "john bentley creative"],
                description: "View examples of my work at Pueblo Unido PDX, including brand redesigns and social media enhancements.",
                URL: "https://www.jwbentley.com/work"
              }}
              navigationClassName={'z-navigation lg:h-128 navigation h-56'}
              fadeInNav={false}
              logoWidth={'7%'}
              logoClassName={'relative cursor-pointer logo'}
              drawAnimations={false}
              animationClassName={'navigation mr-8 sm:w-full md:w-auto'}
            >
            <ImageHeader 
                heading={"Work"}
            />
            <div className="background-dots">
              {/*
              Introduction Section 
              */}
              <div className="text-container w-full sm:p-8 md:p-24 lg:p-0" id="pueblo-unido">
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
                  <picture>
                    <source type="image/webp" srcSet="../static/img/webp/old-and-new.webp" />
                    <source type="image/png" srcSet="../static/img/png/old-and-new.png" />
                    <img alt="Pueblo Unido original and new logos" onClick={this.handleOpenModal1} className="sm:m-auto md:m-0 cursor-pointer" src="../static/img/png/old-and-new.png" loading="lazy" />
                  </picture>
                  <ReactModal 
                    isOpen={this.state.showModal1}
                    contentLabel="Minimal Modal Example"
                  >
                    <button onClick={this.handleCloseModal1}>X</button>
                    <picture>
                      <source type="image/webp" srcSet="../static/img/webp/old-and-new.webp" />
                      <source type="image/png" srcSet="../static/img/png/old-and-new.png" />
                      <img alt="Pueblo Unido original and new logos" onClick={this.handleCloseModal1} className="sm:m-auto md:m-auto cursor-pointer w-full" src="../static/img/png/old-and-new.png" loading="lazy" />
                    </picture>
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
                <div className="image-content sm:w-full md:w-2/5">
                  <picture>
                    <source type="image/svg" srcSet="../static/img/svg/flyer-ec-mention.svg" />
                    <source type="image/svg" srcSet="../static/img/svg/flyer-ec-mention.svg" />
                    <img alt="Pueblo Unido flyer for potential clients" onClick={this.handleOpenModal2} className="sm:m-auto md:m-0 cursor-pointer" src="../static/img/svg/flyer-ec-mention.svg" loading="lazy" />
                  </picture>
                  <ReactModal 
                    isOpen={this.state.showModal2}
                    contentLabel="Minimal Modal Example"
                    style={customStyles}
                  >
                    <button onClick={this.handleCloseModal2}>X</button>
                    <picture>
                      <source type="image/svg" srcSet="../static/img/svg/flyer-ec-mention.svg" />
                      <source type="image/svg" srcSet="../static/img/svg/flyer-ec-mention.svg" />
                      <img alt="Pueblo Unido flyer for potential clients" onClick={this.handleCloseModal2} className="sm:m-auto md:m-0 cursor-pointer" src="../static/img/svg/flyer-ec-mention.svg" loading="lazy" />
                    </picture>
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
                <div className="image-content sm:w-full md:w-2/5">
                  <img alt="Pueblo Unido Anniversary Gala landing page comp" onClick={this.handleOpenModal3} className="cursor-pointer" src="../static/img/svg/gala-landing-page.svg" loading="lazy" />
                  <ReactModal 
                    isOpen={this.state.showModal3}
                    contentLabel="Minimal Modal Example"
                  >
                    <button onClick={this.handleCloseModal3}>X</button>
                    <img alt="Pueblo Unido flyer for potential clients" onClick={this.handleCloseModal3} className="cursor-pointer" src="../static/img/svg/gala-landing-page.svg" loading="lazy" />
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
                  <picture>
                    <source type="image/svg" srcSet="../static/img/svg/social-media-collage.svg" />
                    <source type="image/svg" srcSet="../static/img/svg/social-media-collage.svg" />
                    <img alt="Various social media and newsletter designs" onClick={this.handleOpenModal4} className="sm:m-auto md:m-0 cursor-pointer" src="../static/img/svg/social-media-collage.svg" loading="lazy" />
                  </picture>
                  <ReactModal 
                    isOpen={this.state.showModal4}
                    contentLabel="Minimal Modal Example"
                  >
                    <button onClick={this.handleCloseModal4}>X</button>
                    <img alt="Various social media and newsletter designs" onClick={this.handleCloseModal4} className="sm:m-auto md:m-0 cursor-pointer" src="../static/img/svg/social-media-collage--black.svg" loading="lazy" />
                  </ReactModal>
                </div>
              </div>
              <div className="p-12 text-center transparent">
                <div>
                  <Button 
                    buttonText={'Tripwire'}
                    className={'button text-center text-white transparent'}
                    linkHref={'/work/tripwire#tripwire'}
                    targetBlank={false}
                  />
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