import "./App.css";
import CharlieIcon from "./media/charlie.png";

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={CharlieIcon} alt="Charlie Ruiz" />
        <div className="name">
          <h1>Charlie Ruiz</h1>
          <h2>Software engineer</h2>
        </div>
      </header>
      <article>
        <p>
          I’m a mexican software engineer. I love to create amazing things and I
          do code @{" "}
          <a
            href="https://wenewlabs.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color: "#A68A41" }}>WENEW</span>
          </a>
          . Based in Austin, TX
        </p>
      </article>
      <footer>
        <ul>
          {links.map((i) => (
            <li>
              <a href={i.url}>{i.text}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default App;
