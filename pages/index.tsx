import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const links = [
  {
    text: "github",
    url: "https://github.com/zimoo354",
  },
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/zimoo354/",
  },
  {
    text: "twitter",
    url: "https://twitter.com/zimoo354",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charlie Ruiz 🧑🏻‍💻</title>
      </Head>
      <div className="App">
        <header className="App-header">
          <Image
            src="/charlie.png"
            alt="Charlie Ruiz"
            height={160}
            width={160}
          />
          <div className="name">
            <h1>Charlie Ruiz</h1>
            <h2>Software engineer</h2>
          </div>
        </header>
        <article>
          <p>
            I’m a mexican software engineer. I love to create amazing things and
            I do code @{" "}
            <a
              href="https://wenewlabs.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WENEW
            </a>
            . Based in Austin, TX
          </p>
        </article>
        <footer>
          <ul>
            {links.map((el, idx) => (
              <li key={`Link-${idx}`}>
                <a href={el.url}>{el.text}</a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Home;
