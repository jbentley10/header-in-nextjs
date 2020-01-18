import '../styles/styles.css';

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

export default function Home() {

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
              <img className="sm:m-auto md:m-0" src="../static/pueblo-unido/old-and-new.png" />
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
            <div className="image-content sm:w-full md:w-2/5">
              <img className="sm:m-auto md:m-0" src="../static/pueblo-unido/old-and-new.png" />
            </div>
            <div className="text-content sm:p-8 lg:w-9/12 lg:ml-48">
              <h3 className="font-bold sm:text-5xl text-link-purple">Establishing Brand Guidelines</h3>
              <p className="text-white">Before developing the website, social media assets, and newsletter templates,
              I crafted a simple set of brand guidelines for the organization to follow.</p>
              <p>&nbsp;</p>
              <p className="text-white">The brand guidelines reverberated into social media, the website, and all 
              future communications from Pueblo Unido PDX — creating a consistent
              look and feel across all the major marketing touchpoints.</p>
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
              <img src="../static/pueblo-unido/pueblo-unido-mockup.png" />
              <img src="../static/pueblo-unido/gala-landing-page.jpg" />
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
            <div className="image-content sm:w-full md:w-2/5">
              <img className="sm:m-auto md:m-0" src="../static/pueblo-unido/social-media-mockup.png" />
            </div>
            <div className="text-content sm:p-8 lg:w-9/12 lg:ml-48">
              <h3 className="font-bold sm:text-5xl text-link-purple">Crafting Social Media and Newsletter Campaigns</h3>
              <p className="text-white">Once the website was created, I began using the newly crafted
              brand guidelines to create compelling imagery for social media
              platforms such as Facebook and Instagram.</p>
              <p>&nbsp;</p>
              <p className="text-white">In addition to creating these campaigns, I also worked on 
              monthly newsletters and critical updates from the organization,
              sent to 700+ users via MailChimp.</p>
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