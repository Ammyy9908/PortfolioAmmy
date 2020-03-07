import React from 'react';
import Header from "./components/TopHeader"
import Skills from "./components/Skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
