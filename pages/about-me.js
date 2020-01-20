import '../styles/styles.css';
import Link from 'next/link';

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

const GrowingUpCopy = () =>
  <div>
    <h3 className="image-text-split__heading text-3xl">It's a pleasure to meet you.</h3>
    <p className="image-text-split__text sm:text-xl text-base">I am a freelance web designer and digital marketer with over five years of experience. I’ve worked on many different projects, with clients ranging from small non-profits to large, fortune 500 companies.</p>
    <p>&nbsp;</p>
    <p className="image-text-split__text sm:text-xl text-base">As a kid growing up in England, I fell in love with technology. Even though we had to dial up to use the Internet back then, I patiently waited for those glorious pixels to show up on the screen. I built my first website when I was 12 years old, and was hooked on video games well before then.</p>
    <p>&nbsp;</p>
    <p className="image-text-split__text sm:text-xl text-base">Since living in the United States, I earned a bachelor's degree in <a className="text-link-purple hover:text-link-purple-darker cursor-pointer" href="https://news.ucsc.edu/2018/03/game-design.html" target="_blank">Computer Science: Game Design</a> from the University of California Santa Cruz. <a href="http://danielpagharion.com/project_warp/" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">Coding games</a> and software on a bigger scale than before was difficult, but exhilirating at the same time.</p>
    <p>&nbsp;</p>
    <p className="image-text-split__text sm:text-xl text-base">After graduating, I started to develop websites again in my spare time. I consider web design to be my main profession, but I have <a href="https://www.linkedin.com/in/jwbentle" target="_blank" className="text-link-purple hover:text-link-purple-darker cursor-pointer">built my skills</a> in marketing campaign strategy, user experience, search engine optimization, and branding.</p>        
    <p>&nbsp;</p>   
  </div>
;

const MyPromiseCopy = () =>
  <div>
    <h3 className="image-text-split__heading text-3xl">As my client, here's what I promise:</h3>
    <p className="image-text-split__text sm:text-xl text-base">I will involve you in every step of the process. Whether you choose to take advantage of my design, development, or marketing skills.</p>
    <p>&nbsp;</p>
    <p className="image-text-split__text sm:text-xl text-base">You and/or your business will see results in today's ever-evolving digital space.</p>
    <p>&nbsp;</p>
    <p className="image-text-split__text sm:text-xl text-base">When an opportunity arises, I will teach you some of the skills I've learned through my own experience.</p>
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
        drawAnimations={false}
      >
        <ImageHeader 
          heading={"About Me"}
        />

        <ImageTextButtonSplit 
          copy={<GrowingUpCopy />}
        >
        </ImageTextButtonSplit>

        <ImageTextSplit
          copy={<MyPromiseCopy />}
          imageSrc={'../static/photo-booth.jpg'}
          imageAlt={'A freelance creative professional that puts you first'}
        >
        </ImageTextSplit>

        <CallToAction 
          ctaText={<CTAText />}
        />
        
      </Layout>
    </div>
  );
}