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
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p className="text-lg">Interested in small business web design packages? Please visit the <Link href="/services" target="_blank"><a className="text-link-purple hover:text-link-purple-darker">services</a></Link> page.</p>
  </div>
;

export default function Home() {
  return (
    <div>
      <Layout 
        pageMeta={{
          title: "Contact Me | John Bentley",
          keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
          description: "Contact me now to schedule a kick-off meeting for web design, WordPress development, or SEO.",
          URL: "https://www.jwbentley.com/contact"
        }}
        navigationClassName={'lg:h-128 navigation h-56'}
        fadeInNav={false}
        logoWidth={'7%'}
        logoClassName={'relative cursor-pointer logo'}
        drawAnimations={false}
      >
        <ImageHeader 
          heading={'Contact'}
        />
        <CallToAction
          ctaText={<MainText />}
        />         

      </Layout>
    </div>
  );
}