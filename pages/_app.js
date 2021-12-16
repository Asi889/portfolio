import './styles/global.css'
import './styles/Appp.scss';
import './styles/hamburger.scss';
import Layout from './components/layout/Layout';

export default function App({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>
  }