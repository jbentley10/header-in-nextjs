// Import dependencies
import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from '@contentful/rich-text-types';

// Import components
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import ImageHeader from "../../components/ImageHeader";
import CallToAction from "../../components/CallToAction";
import DotsTransition from "../../components/Images/DotsTransition";

// Import utils
import { fetchPUPage } from "../../utils/contentfulPages";

const options = {
  renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
          `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`,
  },
};

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

export default function PuebloUnido({ res }) {
  return (
    <div>
      <Layout
        pageMeta={{
          title:
            "Pueblo Unido - Work - Web Design and Development | John Bentley Creative",
          keywords: [
            "freelance",
            "web designer",
            "web developer",
            "portland",
            "oregon",
            "john bentley creative",
          ],
          description:
            "View examples of my work at Pueblo Unido PDX, including brand redesigns and social media enhancements.",
          URL: "https://www.jwbentley.com/work",
        }}
        navigationClassName={"z-navigation lg:h-128 navigation h-56"}
        fadeInNav={false}
        logoWidth={"7%"}
        logoClassName={"relative cursor-pointer logo"}
        drawAnimations={false}
        animationClassName={"navigation mr-8 sm:w-full md:w-auto"}
      >
        <ImageHeader heading={"Work"} />
        <div className="background-dots">
          {/*
        Introduction Section 
        */}
          <div
            className="text-container w-full sm:p-8 md:p-24 lg:p-0"
            id="pueblo-unido"
          >
            <div className="page-heading text-content sm:p-4 md:p-24">
              <h2 className="text-white text-center font-bold uppercase sm:text-6xl sm:mb-8 md:pb-1">
                <a
                  className="text-link-purple hover:text-link-purple-darker cursor-pointer"
                  href="https://www.pueblounidopdx.org/"
                  target="blank"
                >
                  {res.fields.pageHeading}
                </a>
              </h2>

              <div
                className={`page-subheading lg:w-4/6 m-auto`}
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(res.fields.pageSubheading),
                }}
              />
            </div>
          </div>

          <div className="text-container w-full sm:p-8 md:p-24 sm:inline md:flex">
            <div className="text-content sm:p-8 lg:w-9/12 lg:mr-48">
              <div
                className={`page-copy`}
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(res.fields.pageCopy, options),
                }}
              />
            </div>
          </div>
          <div className="p-12 text-center transparent">
            <div>
              <Button
                buttonText={"Tripwire"}
                className={"button text-center text-white transparent"}
                linkHref={"/work/tripwire#tripwire"}
                targetBlank={false}
              />
            </div>
          </div>
        </div>

        {/* <DotsTransition className={"-mt-6 pt-12"} /> */}
        <CallToAction ctaText={<CTAText />} />
        <div className="h-12 bg-dark-background" />
      </Layout>      
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchPUPage();

  if (res.fields) {
    return {
      props: {
        res,
      },
    };
  }
}
