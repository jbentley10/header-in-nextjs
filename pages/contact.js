import '../styles/styles.css';
import Link from 'next/link';

import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import ImageHeader from '../components/ImageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainText = () => 
  <div>
    <h2 className="text-3xl">What are you waiting for? It's your time to shine.</h2>
    <p>&nbsp;</p>
    <p className="text-lg">Contact me directly via phone or email: </p> 
    <p><FontAwesomeIcon icon="envelope" className="text-6xl shadow-none p-4 cursor-pointer inline-block align-middle" /><a href="mailto:john@jwbentley.com" className="text-link-purple hover:text-link-purple-darker align-middle"> john@jwbentley.com</a></p>
    <p><FontAwesomeIcon icon="phone" className="text-6xl shadow-none p-4 cursor-pointer inline-block align-middle" /><a href="tel:+17605324516" className="text-link-purple hover:text-link-purple-darker align-middle"> (760) 532-4516</a></p>
    <p className="text-lg">I am currently accepting clients.</p>
  </div>
;

export default function Home() {
  return (
    <div>
      <Layout 
        pageMeta={{
          title: " | Contact",
          keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
          description: "If you are need of a brand redesign, website enhancement, or better performance on your website, contact me now to elevate your brand and drive results."
        }}
        navigationClassName={'lg:h-128 navigation h-56'}
        fadeInNav={false}
        logoWidth={'7%'}
        logoClassName={'relative cursor-pointer logo'}
      >
        <ImageHeader 
          heading={'Contact'}
        />
        <CallToAction
          ctaText={<MainText />}
        />

        <div className="bg-dark-background text-container w-full sm:p-8 md:p-24 lg:p-0">
          <div className="text-content sm:p-4 md:px-24">
            <h2 className="text-white text-center font-bold uppercase sm:text-6xl sm:mb-8 md:pb-1">
              <Link href="/services">
                <a className="text-link-purple hover:text-link-purple-darker cursor-pointer">My Services</a>
              </Link>
            </h2>

            <p className="text-white lg:w-4/6 m-auto">Web Design</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Web comps built using <a href="https://www.adobe.com/products/xd/details.html" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Adobe XD</a></li>
              <li className="text-white lg:w-4/6 m-auto">Wireframes built using Adobe XD and <a href="https://www.uistencils.com/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">UI Stencils</a></li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">SEO</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Search analytics with <a href="https://www.moz.com" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Moz</a> and <a href="https://www.semrush.com/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">SEMRush</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://search.google.com/search-console/about" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Google Search Console</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://varvy.com/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Varvy SEO</a></li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Marketing Analytics and Data</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto"><a href="https://marketingplatform.google.com/about/analytics/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Google Analytics</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://www.google.com/business/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Google My Business</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://www.hotjar.com" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Hotjar</a></li>
              <li className="text-white lg:w-4/6 m-auto"><a href="https://www.usertesting.com" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">UserTesting</a></li>
            </ul>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">Web Development</p>
            <ul className="list-disc">
              <li className="text-white lg:w-4/6 m-auto">Front end development: <a href="https://reactjs.org/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">React</a>, HTML, CSS</li>
              <li className="text-white lg:w-4/6 m-auto">Content management & infrastructure: <a href="https://wordpress.com/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">WordPress</a>, <a href="https://www.squarespace.com/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Squarespace</a>, <a href="https://sitecore.com/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Sitecore</a>, <a href="https://www.contentful.com/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Contentful</a>, <a href="https://prismic.io" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Prismic</a></li>
              <li className="text-white lg:w-4/6 m-auto">eCommerce: <a href="https://shopify.com/" target="blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Shopify</a></li>
            </ul>
          </div>
        </div>    

        <div className="bg-dark-background md:h-24" />
      </Layout>
    </div>
  );
}