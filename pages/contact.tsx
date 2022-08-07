import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

export default function contact() {
  return (
    <MainLayout>
      <h1 className={'title'}>Contact Page</h1>
      <h2 className={'secundaryTitle'}>
        Ir a{' '}
        <Link href='/'>
          <a>Home</a>
        </Link>
      </h2>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
