import '../styles/styles.css';

import Button from '../components/Button';
import Layout from '../components/Layout';
import ImageHeader from '../components/ImageHeader';
import DotsTransition from '../components/Images/DotsTransition';
import HorizontalBar from '../components/Images/HorizontalBar';
import CallToAction from '../components/CallToAction';

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

export default function Home() {
  return (
    <div>
      <Layout 
        pageMeta={{
          title: "Small Business Web Design Packages - Services | John Bentley Creative",
          keywords: ["freelance", "small business web design packages", "affordable web design", "web designer", "web developer", "portland", "oregon", "john bentley creative"],
          description: "Learn about the services and small business web design packages I offer, including: affordable web design, WordPress development, branding, and marketing strategy from John Bentley Creative.",
          URL: "https://www.jwbentley.com/services"
        }}
        navigationClassName={'lg:h-128 navigation h-56'}
        fadeInNav={false}
        logoWidth={'7%'}
        logoClassName={'relative cursor-pointer logo'}
        drawAnimations={false}
      >
        <ImageHeader 
          heading={"Services and Small Business Web Design Packages"}
        />

        <div className="background-dots text-container w-full sm:p-8 md:py-24 md:px-16">
          <div className="text-content sm:p-4 md:px-24 lg:pb-16">
            <h2 className="sm:text-5xl text-link-purple font-extrabold text-center">Web Design Packages</h2>
            <p>&nbsp;</p>
            <p className="text-white">Looking to get a range of digital services for your brand? Below, you'll find affordable web design packages ranging from individual to enterprise level expertise.</p>
            <p>&nbsp;</p>
            <div className="sm:block md:flex m-auto">
              <div className="sm:inline md:inline-block">
                <h3 className="text-white text-center sm:text-3xl sm:py-8 md:py-0 px-8">Individual - $</h3>
                <ul className="text-white text-left px-8 sm:text-xl list-disc">
                  <li>Set up hosting and domain name</li>
                  <li>Create web design</li>
                  <li>Develop site</li>
                  <li>Set up analytics and tracking</li>
                </ul>
              </div>
              <div className="sm:inline md:inline-block">
                <h3 className="text-white text-center sm:text-3xl sm:py-8 md:py-0 px-8">Small Business - $$</h3>
                <ul className="text-white text-left px-8 sm:text-xl list-disc">
                  <li>Set up hosting, domain name, and SEO keyword strategy</li>
                  <li>Create user experience wireframes</li>
                  <li>Craft the look and feel</li>
                  <li>Create site design</li>
                  <li>Develop website</li>
                  <li>Set up analytics and tracking</li>
                  <li>Develop SEO strategy</li>
                </ul>
              </div>
              <div className="sm:inline md:inline-block">
                <h3 className="text-white text-center sm:text-3xl sm:py-8 md:py-0 px-8">Enterprise - $$$+</h3>
                <ul className="text-white text-left px-8 sm:pb-12 md:pb-0 sm:text-xl list-disc">
                  <li>Set up hosting, domain name, and SEO keyword strategy</li>
                  <li>Create user experience wireframes</li>
                  <li>Craft the look and feel</li>
                  <li>Create site design</li>
                  <li>Design animations</li>
                  <li>Develop website</li>
                  <li>Set up analytics and tracking</li>
                  <li>Develop SEO strategy</li>
                </ul>
              </div>
            </div>
          </div>
          <Button 
            buttonText={'Contact Me'}
            className={'button text-center text-white'}
            linkHref={'./contact'}
            targetBlank={false}
          />

          <div className="h-24" />

          <div className="text-content sm:p-4 md:px-24">
            <h2 className="sm:text-5xl text-link-purple font-extrabold text-center">Complete List of Services</h2>
            <p>&nbsp;</p>
            <p className="text-white">If you would rather pick and choose some of my services, here is a complete list of what I offer.</p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Web Design</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Construction Website</li>
              <li className="text-white lg:w-4/6 m-auto">E-Commerce Website</li>
              <li className="text-white lg:w-4/6 m-auto">Non-Profit Website</li>
              <li className="text-white lg:w-4/6 m-auto">Food and Drink Website</li>
              <li className="text-white lg:w-4/6 m-auto">Arts and Crafts Website</li>
              <li className="text-white lg:w-4/6 m-auto">Portfolio Website</li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Internet Marketing Services</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Google My Business Listing</li>
              <li className="text-white lg:w-4/6 m-auto">Search Engine Optimization</li>
              <li className="text-white lg:w-4/6 m-auto">Social Media Strategy</li>
              <li className="text-white lg:w-4/6 m-auto">Email and Newsletter Strategy</li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Marketing Consultation</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Brand Strategy</li>
              <li className="text-white lg:w-4/6 m-auto">Branding</li>
              <li className="text-white lg:w-4/6 m-auto">Logo Design</li>
              <li className="text-white lg:w-4/6 m-auto">Customer Experience</li>
              <li className="text-white lg:w-4/6 m-auto">A/B Testing</li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Web Hosting</p>
            <ul className="list-disc">
            <li className="text-white lg:w-4/6 m-auto">Database Management</li>
            <li className="text-white lg:w-4/6 m-auto">DNS Configuration</li>
            </ul>
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className="sm:block md:flex bg-transparent">
                <div className="sm:py-12 md:p-12 flex-auto bg-transparent">
                  <div>
                    <Button 
                      buttonText={'Download My Resume (Color)'}
                      className={'button text-center text-white sm:whitespace-no-wrap'}
                      linkHref={'../static/JohnBentleyResume.pdf'}
                      targetBlank={true}
                    />
                  </div>
                </div> 
                <div className="sm:py-12 md:p-12 flex-auto bg-transparent">
                  <div>
                    <Button 
                      buttonText={'Download My Resume (Printer-Friendly)'}
                      className={'button text-center text-white sm:whitespace-no-wrap'}
                      linkHref={'../static/JohnBentleyResume--PrinterFriendly.pdf'}
                      targetBlank={true}
                    />
                  </div>
                </div> 
              </div>
        </div> 

        <DotsTransition />
        <HorizontalBar />
        <CallToAction 
          ctaText={<CTAText />}
        />
      </Layout>
      
    </div>
  );
}