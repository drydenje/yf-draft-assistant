// These are all variable weight fonts, and use the next.js image
// component to preload, etc
// (that's why this is in a .js file instead of .css)

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
