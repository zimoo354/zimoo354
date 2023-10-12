import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const links = [
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/zimoo354/",
  },
  {
    text: "resume",
    url: "/pdf/CVCarlosRuiz.pdf",
  },
  {
    text: "github",
    url: "https://github.com/zimoo354",
  },
  // {
  //   text: "twitter",
  //   url: "https://twitter.com/zimoo354",
  // },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charlie Ruiz 🧑🏻‍💻</title>
      </Head>
      <div className="App">
        <header className="App-header">
          <div className="img">
            <Image
              src="/charlie.png"
              alt="Charlie Ruiz"
              height={160}
              width={160}
            />
          </div>
          <div className="name">
            <h1>Charlie Ruiz</h1>
            <h2>Software engineer</h2>
          </div>
        </header>
        <article>
          <p>
            <b>Hi there!</b>
            <br />
            <br />
            I'm a SWE with 9-yoe. Proficient in Javascript/Typescript, React,
            Next.js, Solidity, SQL/No-SQL, AWS, and more, with diverse skills
            and leadership experience.
            <br />
            <br />
            <b>📍 Austin, TX</b>
          </p>
        </article>
        <footer>
          <ul>
            {links.map((el, idx) => (
              <li key={`Link-${idx}`}>
                <a href={el.url} target="_blank">
                  {el.text}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Home;
