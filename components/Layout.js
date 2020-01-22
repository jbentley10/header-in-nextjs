import '../styles/styles.css';
import Head from 'next/head'

import Navigation from './Navigation';
import Footer from './Footer';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faArrowDown, faPhoneAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faArrowDown, faPhoneAlt, faPhone )

const Layout = ({ pageMeta, children, navigationClassName, fadeInNav, logoWidth, logoClassName, drawAnimations }) => (
  <>
    <Head>
      <title>{`${pageMeta.title}`}</title>

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="John Bentley" />

      <meta name="description" content={pageMeta.description} />
      <meta name="google-site-verification" content="M_p92ZTam2mOfgHf3dENr7BjOADVdOWvwp4RjHG8reY" />

      <meta name="keywords" content={pageMeta.keywords.join(',')} />

      <link rel="shortcut icon" href="/static/favicon.ico" />

      <link href="https://fonts.googleapis.com/css?family=Barlow&display=swap" rel="stylesheet" />

      <link rel="canonical" href={pageMeta.URL} />

      {/* Google Tag Manager */}
      <script type="text/javascript">{`
      {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MX6MMQH');
      }
      `}</script>
      <html lang="en" />
    </Head>

    {/* Google Tag Manager */}
    <noscript>{`
    {
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX6MMQH"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    }
    `}</noscript>
    
    <Navigation 
      navigationClassName={navigationClassName}
      fadeInNav={fadeInNav}
      logoWidth={logoWidth}
      logoClassName={logoClassName}
      drawAnimations={drawAnimations}
    />
      {children}
    <Footer />
  </>
);

export default Layout;