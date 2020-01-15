import '../styles/styles.css';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>John Bentley - Freelance Web Designer</title>
        <meta name="description" content="I am a freelance web designer and developer based in Portland, OR. Contact me now to elevate 
        your brand and drive results."/>
      </Head>
      <Layout />
    </div>
  );
}