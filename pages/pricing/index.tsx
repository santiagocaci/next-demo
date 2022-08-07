import Link from 'next/link';
import React from 'react';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function PricingPage() {
  return (
    <MainLayout>
      <h1 className={'title'}>Pricing Page</h1>
      <h2 className={'secundaryTitle'}>
        Ir a{' '}
        <Link href='/'>
          <a>Home</a>
        </Link>
      </h2>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing/index.jsx</code>
      </p>
    </MainLayout>
  );
}
