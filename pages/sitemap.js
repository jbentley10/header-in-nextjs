import '../styles/styles.css';

import Button from '../components/Button';
import Layout from '../components/Layout';
import ImageHeader from '../components/ImageHeader';
import DotsTransition from '../components/Images/DotsTransition';

export default function Home() {
    return (
      <div>
        <Layout 
          pageMeta={{
            title: " | sitemap",
            keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
            description: "View the sitemap for jwbentley.com",
            URL: "https://www.jwbentley.com/about-me"
          }}
          navigationClassName={'lg:h-128 navigation h-56'}
          fadeInNav={false}
          logoWidth={'7%'}
          logoClassName={'relative cursor-pointer logo'}
          drawAnimations={false}
        >
        <ImageHeader 
            heading={"Sitemap"}
        />

        <div className="background-dots text-container w-full sm:p-8 md:p-24 lg:p-0">
          <div className="text-content sm:p-4 md:px-24">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto"><a href="/work" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Work</a></p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto"><a href="/work/pueblo-unido" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Pueblo Unido</a></p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto"><a href="/work/tripwire" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Tripwire</a></p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto"><a href="/work/line-friends" className="text-link-purple hover:text-link-purple-darker cursor-pointer">LINE FRIENDS</a></p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto"><a href="/about-me" className="text-link-purple hover:text-link-purple-darker cursor-pointer">About Me</a></p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto"><a href="/services" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Services</a></p>
            <p>&nbsp;</p>
            <p className="text-white lg:w-4/6 m-auto"><a href="/contact" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Contact</a></p>
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div> 
      </Layout>
      
    </div>
  );
}