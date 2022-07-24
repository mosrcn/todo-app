import Navbar from './Navbar';

export type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className='min-w-screen min-h-screen bg-gray-50'>
      <Navbar />
      <div className='p-4'>
        <div className='container mx-auto'>{children}</div>
      </div>
    </div>
  );
};

export const pageLayout = (children: React.ReactNode) => <BaseLayout>{children}</BaseLayout>;

export default BaseLayout;
