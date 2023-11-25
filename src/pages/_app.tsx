import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/error-boundary/error-boundary';
import { Layout } from '@/components/layout/layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
