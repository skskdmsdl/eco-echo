import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const EcoStore = ({ Component }) => (
    <>
      <Head>
        <title>EcoStore</title>
      </Head>
      <Component />
    </>
  );
  
  EcoStore.propTypes = {
    Component: PropTypes.elementType.isRequired,
  };
  
  export default EcoStore; 