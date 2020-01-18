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

            <p className="text-white lg:w-4/6 m-auto">Since 2017, Pueblo Unido PDX has focused on helping
            immigrants get connected with legal representation in the Pacific Northwest.</p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto">During my two years as a volunteer for the non-profit, 
            I rebranded the organization. The logo was reimagined, brand guideliness were set 
            in place, and Pueblo Unido's website was created from the ground up.</p>
          </div>
        </div>    

        <div className="bg-dark-background md:h-24" />
      </Layout>
    </div>
  );
}