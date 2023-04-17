import Head from 'next/head';
import { useEffect, useState } from 'react';
import GitHub_Logo from '../public/GitHub_Logo.png';
import LI_Logo from '../public/LI_Logo.png';

const phrases = [
  'Hello!',
  "I'm Gulam!",
  'This site is still under construction...',
  'Check out my accounts in the meantime!',
];

let n = 0;
export default function Home() {
  const [phrase, setPhrase] = useState('');
  useEffect(() => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  });
  console.log(phrase);
  return (
    <>
      <Head>
        <title>Gulam's Portfolio Site</title>
      </Head>
      <div className="typewriter">
        <h2>Hi! I'm Gulam</h2>
        <h4>Thanks for checking out my portfolio site!</h4>
        <h5>
          I'm still working on it so in the meantime check out my work here.
        </h5>
        <div className="link-container">
          <div className="links">
            <a href="https://github.com/gulamcs">GitHub</a>
            <a href="https://www.linkedin.com/in/gulamcs/">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
}
