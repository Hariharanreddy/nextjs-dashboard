import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  // style: "normal",
  // display: /* Specify a Display value if available */,
  preload: false,
  subsets: ['latin'], // Remove this line if subsets are intended to be defined
});
