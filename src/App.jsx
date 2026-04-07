import AboutMe from './pages/AboutMe';
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
