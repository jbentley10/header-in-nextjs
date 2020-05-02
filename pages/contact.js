import '../styles/styles.css';
import Link from 'next/link';
import { StaticKitProvider, useStaticKit, ValidationError } from '@statickit/react';
import { sendContactEmail } from '@statickit/functions';

import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import ImageHeader from '../components/ImageHeader';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainText = () => 
  <div>
    <h2 className="text-3xl">What are you waiting for? It's your time to shine.</h2>
    <p>&nbsp;</p>
    <ContactForm /> 
    <p>&nbsp;</p>
    <p className="text-lg">You may also contact me directly via phone or email: </p> 
    <p><FontAwesomeIcon icon="envelope" className="w-16 shadow-none p-4 cursor-pointer inline-block align-middle" /><a href="mailto:john@jwbentley.com?subject=Project Request" className="sm:text-xl text-link-purple hover:text-link-purple-darker align-middle"> john@jwbentley.com</a></p>
    <p><FontAwesomeIcon icon="phone" className="w-16 shadow-none p-4 cursor-pointer inline-block align-middle" /><a href="tel:+17605324516" className="sm:text-xl text-link-purple hover:text-link-purple-darker align-middle"> (760) 532-4516</a></p>
    <p className="text-lg">I am not currently accepting new projects, but please feel free to reach out! I would be happy to schedule a consultation with you, and plan a project for a later date.</p> 
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p className="text-lg">Interested in small business web design packages? Please visit the <Link href="/services"><a className="text-link-purple hover:text-link-purple-darker">services</a></Link> page.</p>
  </div>
;

export default function Home() {
  return (
    <StaticKitProvider site="d63545d25c9c">
      <Layout 
        pageMeta={{
          title: "Contact Me | John Bentley Creative",
          keywords: ["freelance", "web designer", "web developer", "portland", "oregon", "john bentley creative"],
          description: "Contact me now to schedule a kick-off meeting for web design, WordPress development, or SEO.",
          URL: "https://www.jwbentley.com/contact"
        }}
        navigationClassName={'lg:h-128 navigation h-56'}
        fadeInNav={false}
        logoWidth={'7%'}
        logoClassName={'relative cursor-pointer logo'}
        drawAnimations={false}
        animationClassName={'navigation mr-8 sm:w-full md:w-auto'}
      >
        <ImageHeader 
          heading={'Contact'}
        />
        <CallToAction
          ctaText={<MainText />}
        />      

      </Layout>
    </StaticKitProvider>
  );
}