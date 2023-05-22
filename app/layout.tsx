import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Website description",
}

export default function RootLayout({
  children
}:{
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}