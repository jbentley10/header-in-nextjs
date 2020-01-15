import '../styles/styles.css';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Layout />
    </div>
  );
}