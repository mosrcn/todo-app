import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import SEO from '@/config/seo';
import store, { persistor } from '@/redux/store';
import '@/styles/globals.css';

type NextPageWithLayout = NextPage & {
  pageLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const pageLayout = Component.pageLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DefaultSeo {...SEO} />
        {pageLayout(<Component {...pageProps} />)}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
