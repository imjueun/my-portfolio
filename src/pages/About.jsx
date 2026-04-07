const About = () => {
  return (
    // min-h-screen으로 최소 높이를 화면 전체로 잡고, flex로 중앙 정렬을 제어합니다.

    <section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 bg-[#fafafa]"
    >
      {/* 상단 라벨 */}

      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 animate-fade-in">
          Introduction
        </span>
      </div>

      {/* 메인 타이틀: 화면의 주인공 역할 */}

      <h2 className="text-5xl md:text-8xl font-light leading-[1.1] tracking-tighter text-[#1a1a1a]">
        Frontend Developer & UI/UX Publisher
      </h2>

      {/* 상세 설명: 적절한 여백과 줄간격 */}

      <br />

      <div className="mt-12 md:mt-20">
        <p className="text-xl md:text-2xl text-gray-600 leading-[1.8] font-light tracking-tight">
          안녕하세요, <br />
          사용자 경험을 이해하고 구현하는 개발자{' '}
          <span className="font-bold text-black">이주은</span>입니다.
        </p>

        <br />

        <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
          단순히 기능을 구현하는 것을 넘어, <br />
          사용자가 느끼는 가치를 코드에 담아내고자 합니다. <br />
          복잡한 문제를 직관적인 솔루션으로 바꾸는 과정을 즐깁니다.
        </p>
      </div>

      {/* 스크롤 유도 아이콘 (선택 사항) */}

      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <span className="text-[10px] uppercase tracking-widest text-black">
          Scroll Down
        </span>
      </div>
    </section>
  );
};

export default About;
