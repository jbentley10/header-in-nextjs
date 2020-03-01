import '../styles/styles.css';
import Head from 'next/head'
import React from 'react'
import TagManager from 'react-gtm-module'

import Navigation from './Navigation';
import Footer from './Footer';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faArrowDown, faPhoneAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faArrowDown, faPhoneAlt, faPhone )

const tagManagerArgs = {
  id: 'GTM-MX6MMQH'
}

const Layout = ({ pageMeta, children, navigationClassName, fadeInNav, logoWidth, logoClassName, drawAnimations, animationClassName }) => (
  <>
    <Head>
      <title>{`${pageMeta.title}`}</title>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="John Bentley" />

      <meta name="description" content={pageMeta.description} />
      <meta name="google-site-verification" content="M_p92ZTam2mOfgHf3dENr7BjOADVdOWvwp4RjHG8reY" />
      <meta name="google-site-verification" content="_w00_Eeow8a5B9kCntT5NbQKkc71Jc-16sukIt5qAIc" />

      <meta name="keywords" content={pageMeta.keywords.join(',')} />

      <link rel="shortcut icon" href="/static/favicon.ico" />

      <link href="https://fonts.googleapis.com/css?family=Barlow&display=swap" rel="stylesheet" async />

      <link rel="canonical" href={pageMeta.URL} />
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
      animationClassName={animationClassName}
    />
      {children}
    <Footer />
  </>
);

Layout.componentDidMount = async function() {
  TagManager.initialize(tagManagerArgs)
}

export default Layout;