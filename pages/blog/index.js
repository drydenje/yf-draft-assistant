import Head from "next/head";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Draft Assistant: Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>Blog</div>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  );
};

export default Blog;
