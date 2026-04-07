import About from './pages/About';
import Skills from './pages/Skills';

export default function App() {
  return (
    /* w-full: 너비 100%
       overflow-x-hidden: 가로 스크롤 방지
       p-0: 모든 패딩 제거 
    */
    <div className="w-full min-h-screen p-0 m-0 overflow-x-hidden bg-[#fafafa]">
      <About />
      <Skills />
    </div>
  );
}
