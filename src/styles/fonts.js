import { Montserrat, Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--heading-font",
  subsets: ["latin"],
  // weight: ['400', '700']
});

const montserrat = Montserrat({
  variable: "--paragraph-font",
  subsets: ["latin"],
  // weight: ['400', '700'],
});

export { oswald, montserrat };
