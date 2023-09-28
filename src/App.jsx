import { BrowserRouter } from "react-router-dom";

import { Header, Hero, About, Feedback, Contact, Loader } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Hero />
      <About />
      <Feedback />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
