import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './pages/AboutMe';
import Main from './pages/main';
import Project from './pages/project';
import Skill from './pages/Skill';

export default function App() {
  return (
    <div className="size-full">
      <Header />

      <AboutMe />
      <Skill />
      <Project />
      <Contact />

      <Footer />
    </div>
  );
}
