'use client';
// import { Metadata } from "next";
// import { Providers } from '../src/context/providers';
import NavBar from '@/components/NavBar';

import Layout from "@/domain/Layout";
// import { oswald, montserrat } from "@/styles/fonts";
// import "@/styles/normalize.css";
// import "@/styles/globals.css";
// import "@/styles/colours.css";

 
// export const metadata: Metadata = {
//   title: "Draft Assistant",
//   description: "A simple tool to help with a fantasy baseball draft",
// }

export default function RootLayout({
  children
}:{
  children: React.ReactNode
}) {
  return(
    <html suppressHydrationWarning lang="en">
      <body>
        {/* <div className={montserrat.variable + " " + oswald.variable}> */}
          <Layout>
            <NavBar />
            {children}
          </Layout>
        {/* </div> */}
      </body>
    </html>
  );
}