import '../styles/global.scss';
import { NextComponentType } from 'next/types';

export default function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: {};
}) {
  return <Component {...pageProps} />;
}
