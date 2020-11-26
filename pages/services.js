// Components
import Button from '../components/Button';
import Layout from '../components/Layout';
import ImageHeader from '../components/ImageHeader';
import DotsTransition from '../components/Images/DotsTransition';
import HorizontalBar from '../components/Images/HorizontalBar';
import CallToAction from '../components/CallToAction';

// Utils
import { fetchServicesPage } from '../utils/contentfulPages';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li style={{ margin: '0 0 -8px 0', padding: '0' }}>{children}</li>
    ),
  },
};

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

export default function Services ({ res }) {
  return (
    <div>
      <Layout 
        pageMeta={{
          title: "Small Business Web Design Packages - Services | John Bentley Creative",
          keywords: ["freelance", "small business web design packages", "affordable web design", "web designer", "web developer", "portland", "oregon", "john bentley creative"],
          description: "Learn about the services and small business web design packages I offer, including: affordable web design, WordPress development, branding, and marketing strategy from John Bentley Creative.",
          URL: "https://www.jwbentley.com/services"
        }}
        navigationClassName={'lg:h-128 navigation h-56'}
        fadeInNav={false}
        logoWidth={'7%'}
        logoClassName={'relative cursor-pointer logo'}
        drawAnimations={false}
        animationClassName={'navigation mr-8 sm:w-full md:w-auto'}
      >
        <ImageHeader 
          heading={"Services and Small Business Web Design Packages"}
        />

        <div className="background-dots text-container w-full sm:p-8 md:py-24 md:px-16">
          <div className="text-content sm:p-4 md:px-24 lg:pb-16">
            <h2 className="sm:text-5xl text-link-purple font-extrabold text-center">{res.fields.pageHeading}</h2>
            <div
              className={`page-subheading lg:w-4/6 m-auto`}
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(res.fields.pageSubheading, options),
              }}
            />
            </div>
            <Button 
              buttonText={'Contact Me'}
              className={'button text-center text-white'}
              linkHref={'./contact'}
              targetBlank={false}
            />

            <div className="h-24" />

          
            <div
              className={`page-copy lg:w-4/6 m-auto`}
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(res.fields.pageCopy, options),
              }}
            />
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div className="sm:block md:flex bg-transparent">
              <div className="sm:py-12 md:p-12 flex-auto bg-transparent">
                <div>
                  <Button 
                    buttonText={'Download My Resume (Color)'}
                    className={'button text-center text-white sm:whitespace-no-wrap'}
                    linkHref={'../static/JohnBentleyResume.pdf'}
                    targetBlank={true}
                  />
                </div>
              </div> 
              <div className="sm:py-12 md:p-12 flex-auto bg-transparent">
                <div>
                  <Button 
                    buttonText={'Download My Resume (Printer-Friendly)'}
                    className={'button text-center text-white sm:whitespace-no-wrap'}
                    linkHref={'../static/JohnBentleyResume--PrinterFriendly.pdf'}
                    targetBlank={true}
                  />
                </div>
              </div> 
            </div>
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

export async function getStaticProps() {
  const res = await fetchServicesPage();

  if (res.fields) {
    return {
      props: {
        res,
      },
    };
  }
}