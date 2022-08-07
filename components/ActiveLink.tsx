import { CSSProperties } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

type Props = {
  text: string;
  href: string;
};

export const ActiveLink: React.FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : {}}>{text}</a>
    </Link>
  );
};
