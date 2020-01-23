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
          title: "Services - Web Design and Development | John Bentley",
          keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
          description: "My skills and expertise revolve around brand identity, web design, and SEO. Get to know my services and schedule a kickoff meeting with me today.",
          URL: "https://www.jwbentley.com/services"
        }}
        navigationClassName={'lg:h-128 navigation h-56'}
        fadeInNav={false}
        logoWidth={'7%'}
        logoClassName={'relative cursor-pointer logo'}
        drawAnimations={false}
      >
        <ImageHeader 
          heading={"Services"}
        />

        <div className="background-dots text-container w-full sm:p-8 md:p-24 lg:p-0">
          <div className="text-content sm:p-4 md:px-24">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Web Design</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Web comps built using <a href="https://www.adobe.com/products/xd/details.html" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Adobe XD</a></li>
              <li className="text-white lg:w-4/6 m-auto">Wireframes built using Adobe XD and <a href="https://www.uistencils.com/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">UI Stencils</a></li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">SEO</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Search analytics with <a href="https://www.moz.com" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Moz</a> and <a href="https://www.semrush.com/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">SEMRush</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://search.google.com/search-console/about" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Google Search Console</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://varvy.com/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Varvy SEO</a></li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Marketing Analytics and Data</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto"><a href="https://marketingplatform.google.com/about/analytics/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Google Analytics</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://www.google.com/business/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Google My Business</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://www.hotjar.com" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Hotjar</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://www.usertesting.com" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">UserTesting</a></li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Web Development</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Front end development: <a href="https://reactjs.org/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">React</a>, HTML, CSS</li>
              <li className="text-white lg:w-4/6 m-auto">Content management & infrastructure: <a href="https://wordpress.com/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">WordPress</a>, <a href="https://www.squarespace.com/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Squarespace</a>, <a href="https://sitecore.com/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Sitecore</a>, <a href="https://www.contentful.com/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Contentful</a>, <a href="https://prismic.io" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Prismic</a></li>
              <li className="text-white lg:w-4/6 m-auto">eCommerce: <a href="https://shopify.com/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Shopify</a></li>
            </ul>
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <Button 
            buttonText={'See My Resume'}
            className={'button text-center text-white bg-dark-background'}
            linkHref={'../static/JohnBentleyResume.pdf'}
            targetBlank={true}
          />
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