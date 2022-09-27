import Header from "./features/header/Header";

function App() {
  return (
    <>
      <Header />

      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container">
          <h1>Volkan Saydam</h1>
          <p>I'm Web Developer</p>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
