import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import '../components/marketingCenterLoginStyle.css';

const EcoEcho = ({ Component }) => (
    <>
      <Head>
        <title>Eco-Echo</title>
      </Head>
      <Component />
    </>
  );
  
EcoEcho.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
  
export default EcoEcho; 