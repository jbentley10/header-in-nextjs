import '../styles/styles.css';

import Button from '../components/Button';
import Layout from '../components/Layout';
import ImageHeader from '../components/ImageHeader';
import ImageTextSplit from '../components/ImageTextSplit';
import ImageTextButtonSplit from '../components/ImageTextButtonSplit';
import CallToAction from '../components/CallToAction';

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
          title: " | About Me",
          keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
          description: "Get know my background including what I do, how design shaped my career, and what I like to do in my spare time."
        }}
        navigationClassName={'lg:h-128 navigation h-56'}
        fadeInNav={false}
        logoWidth={'7%'}
        logoClassName={'relative cursor-pointer logo'}
      >
        <ImageHeader 
          heading={"About Me"}
        />

        <ImageTextSplit>
          <img className="rounded-full h-full sm:w-full md:w-4/6 flex items-center justify-center" src="../static/me-flute.jpg" alt="Playing classical flute - one of my favorite hobbies" />
        </ImageTextSplit>

        <ImageTextButtonSplit />

        <CallToAction 
          ctaText={<CTAText />}
        />
        
      </Layout>
    </div>
  );
}