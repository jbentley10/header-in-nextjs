import Head from 'next/head';

const HtmlHead = (props) => {
    const {
        TagName: tag,
          delayWork,
          delayAbout,
          delayServices,
          delayContact
    } = props 
    <>
        <Head>
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <title>John Bentley | About Me</title>
            <meta name="description" content="Get know my background including what I do, how design shaped my career, and what I like to do 
            in my spare time."/>
        </Head>
    </>
}

HeaderFadeInAnimation.propTypes = {
    headingText: PropTypes.string,
    subtext: PropTypes.string,
}

HeaderFadeInAnimation.defaultProps = {
    headingText: '',
    subtext: ''
}

export default HtmlHead;

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MX6MMQH');</script>
<!-- End Google Tag Manager -->