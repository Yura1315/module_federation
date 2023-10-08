import React from 'react';
import ShowWebpackModule from './ShowWebpackModule/ShowWebpackModule';

const LegalComponent = React.lazy(() => import('legal/App'));

const Legal = () => {
  return (
    <ShowWebpackModule>
      <LegalComponent />
    </ShowWebpackModule>
  );
};

export default Legal;
