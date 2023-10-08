import { Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const ShowWebpackModule = (props) => {
  return (
    <ErrorBoundary>
      <Suspense fallback='loading'>{props.children}</Suspense>;
    </ErrorBoundary>
  );
};

export default ShowWebpackModule;
