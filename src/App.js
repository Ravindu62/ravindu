import "./App.css";
import "bulma/css/bulma.min.css";
import Header from "./screens/Header";
import AboutMe from "./screens/AboutMe";
import Services from "./screens/Services";
import MyWorlk from "./screens/MyWork";
import Contact from "./screens/Contact";
import CopyRight from "./screens/Copyright";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Services />
      <MyWorlk />
      <Contact />
      <CopyRight />
    </>
  );
}

export default App;
