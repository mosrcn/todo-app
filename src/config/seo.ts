import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  title: 'Next App',
  titleTemplate: 'Next SEO | %s',
  defaultTitle: 'Next SEO',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: process.env.NEXT_PUBLIC_APP_URL,
    site_name: 'SiteName',
  },
};

export default SEO;
