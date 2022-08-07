import Link from 'next/link';
import { ReactElement } from 'react';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

export default function about() {
  return (
    <>
      <h1 className={'title'}>About Page</h1>
      <h2 className={'secundaryTitle'}>
        Ir a{' '}
        <Link href='/'>
          <a>Home</a>
        </Link>
      </h2>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/about.js</code>
      </p>
    </>
  );
}

about.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
