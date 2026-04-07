const AboutMe = () => {
  return (
    <section id="about" className="pt-48 pb-32 border-b border-gray-100">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
        Introduction
      </span>
      <h2 className="mt-12 text-5xl md:text-8xl font-light leading-[1.1] tracking-tighter">
        Creating{' '}
        <span className="italic text-gray-400 font-serif">meaningful</span>{' '}
        <br />
        digital experiences.
      </h2>
      <p className="mt-16 text-lg text-gray-500 max-w-xl leading-relaxed">
        안녕하세요, 간결함 속에 힘이 있는 디자인과 코드를 지향하는 개발자
        임주은입니다. 복잡한 문제를 직관적인 솔루션으로 바꾸는 과정을 즐깁니다.
      </p>
    </section>
  );
};

export default AboutMe;
