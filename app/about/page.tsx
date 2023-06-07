import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Draft Assistant: About',
  description: 'An explanation of this web page'
}

const About = () => {
  return (
    <>
      <main>
        <h2>About</h2>
        <p>This webpage was created</p>
      </main>
    </>
  );
};

export default About;
