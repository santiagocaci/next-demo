import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
