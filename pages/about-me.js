// Import styles
import "../styles/styles.css";

// Import dependencies
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// Import utils
import { fetchAboutMePage } from "../utils/contentfulPages";

// Import components
import Button from "../components/Button";
import Layout from "../components/Layout";
import ImageHeader from "../components/ImageHeader";
import ImageTextSplit from "../components/ImageTextSplit";
import ImageTextButtonSplit from "../components/ImageTextButtonSplit";
import CallToAction from "../components/CallToAction";

const CTAText = () => (
  <div>
    <h2 className="text-3xl pb-12">Interested in working on a project?</h2>
    <Button
      buttonText={"Contact Me"}
      className={"button text-center text-white"}
      linkHref="/contact"
      targetBlank={false}
    />
  </div>
);
export default function Home({ res }) {
  return (
    <div>
      <Layout
        pageMeta={{
          title:
            "About Me - Freelance Web Designer and Developer | John Bentley Creative",
          keywords: [
            "freelance",
            "web designer about me",
            "web developer about me",
            "web designer",
            "web developer",
            "portland",
            "oregon",
            "john bentley creative",
          ],
          description:
            "Learn about me and what I do, and how I've grown as a freelance web designer and developer in Portland, Oregon.",
          URL: "https://www.jwbentley.com/about-me",
        }}
        navigationClassName={"lg:h-128 navigation h-56"}
        fadeInNav={false}
        logoWidth={"7%"}
        logoClassName={"relative cursor-pointer logo"}
        drawAnimations={false}
        animationClassName={"navigation mr-8 sm:w-full md:w-auto"}
      >
        <ImageHeader heading={"About Me"} />

        <ImageTextButtonSplit
          copy={documentToHtmlString(res.fields.section1RichText)}
        />

        <ImageTextSplit
          copy={documentToHtmlString(res.fields.section2RichText)}
          imageSrc={"photo-booth"}
          imageAlt={"About Me - web developer and web designer"}
        />
        
        <CallToAction ctaText={<CTAText />} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchAboutMePage();

  if (res.fields) {
    return {
      props: {
        res,
      },
    };
  }
}
