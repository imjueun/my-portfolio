import About from './pages/About'; // 1. 실제 파일명이 About.jsx인지 확인!

export default function App() {
  return (
    <div className="size-full">
      {/* 2. 태그를 /> 로 반드시 닫아주세요 */}
      <About />
    </div>
  );
}
