import '@/styles/global-styles.scss';
import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/error-boundary/error-boundary';
import { Layout } from '@/components/layout/layout';
import { wrapper } from '@/store-manager/store';
import { Provider } from 'react-redux';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
