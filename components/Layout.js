import '../styles/styles.css';
import Helmet from 'react-helmet'
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faArrowDown, faPhoneAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faArrowDown, faPhoneAlt, faPhone )

import '../styles/styles.css';

const Layout = ({ pageMeta, children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>{`John Bentley ${pageMeta.title}`}</title>

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="John Bentley" />

      <meta name="description" content={pageMeta.description} />

      <meta name="keywords" content={pageMeta.keywords.join(',')} />

      <link rel="shortcut icon" href="/static/favicon.ico" />

      <link href="https://fonts.googleapis.com/css?family=Barlow&display=swap" rel="stylesheet" />

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
    </Helmet>

    {/* Google Tag Manager */}
    <noscript>{`
    {
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX6MMQH"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    }
    `}</noscript>
    
    <Navigation 
      delayWork={5200}
      delayAbout={5700}
      delayServices={6200}
      delayContact={6700}
    />
      {children}
    <Footer />
  </>
);

export default Layout;