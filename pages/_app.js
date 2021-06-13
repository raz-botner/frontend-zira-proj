import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../src/components/Layout'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return(
    <React.Fragment>
      <Layout>
        <Head>
            <title>Zira App</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link rel="icon" href="https://images.squarespace-cdn.com/content/v1/5dc0d51208406e59a454c423/1575668958447-5KFY9DECR1FFMCGR62UV/ke17ZwdGBToddI8pDm48kLxnK526YWAH1qleWz-y7AFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFUQAah1E2d0qOFNma4CJuw0VgyloEfPuSsyFRoaaKT76QvevUbj177dmcMs1F0H-0/favicon.ico?format=100w" />
          </Head>
            <CssBaseline />
            <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  ) 
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
