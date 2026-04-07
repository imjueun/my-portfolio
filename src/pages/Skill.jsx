const Skill = () => {
  const skillList = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    { category: 'Tools', items: ['Git/GitHub', 'Figma', 'Vercel', 'VS Code'] },
  ];

  return (
    <section id="skills" className="py-24 border-b border-gray-100">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
        Expertise
      </span>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillList.map((skill) => (
          <div key={skill.category}>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest">
              {skill.category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 border border-gray-200 text-sm hover:bg-black hover:text-white transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
