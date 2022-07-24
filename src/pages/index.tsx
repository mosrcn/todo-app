import { pageLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import Tasks from '@/components/modules/Tasks';

const Home = () => {
  return <Tasks />;
};

Home.pageLayout = pageLayout;

export default Home;
