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
                title: "LINE FRIENDS - Work - Web Design and Development | John Bentley",
                keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
                description: "View examples of my work for LINE FRIENDS, including upgrading the look and feel of the site on Shopify.",
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
                LINE FRIENDS
              */}

              {/*
                Introduction Section 
              */}
              <div className="text-container w-full sm:p-8 md:p-24 lg:p-0" id="line-friends">
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
                  <img alt="LINE FRIENDS store home page implemented in Shopify" onClick={this.handleOpenModal9} className="sm:m-auto md:m-0 cursor-pointer" src="../static/line-friends/line-friends-home.webp" onerror="this.src='../static/line-friends/line-friends-home.jpg'" />
                  <ReactModal 
                    isOpen={this.state.showModal9}
                    contentLabel="Minimal Modal Example"
                  >
                    <button onClick={this.handleCloseModal9}>X</button>
                    <img onClick={this.handleCloseModal9} className="sm:m-auto md:m-auto cursor-pointer" src="../static/line-friends/line-friends-home.webp"  onerror="this.src='../static/line-friends/line-friends-home.jpg'" />
                  </ReactModal>
                  
                </div>
              </div>
              <div className="flex bg-dark-background">
                <div className="sm:py-12 md:p-12 flex-auto bg-dark-background">
                  <div>
                    <Button 
                      buttonText={'Tripwire'}
                      className={'button text-center text-white bg-dark-background'}
                      linkHref={'/work/tripwire#tripwire'}
                      targetBlank={false}
                    />
                  </div>
                </div> 
                <div className="sm:py-12 md:p-12 flex-auto bg-transparent">
                  <div>
                    <Button 
                      buttonText={'See More Work'}
                      className={'button text-center text-white bg-transparent'}
                      linkHref={'/work'}
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