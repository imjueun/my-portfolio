const Project = () => {
  const projects = [
    { title: 'Portfolio 2026', tech: 'React / Tailwind', img: 'Project 01' },
    { title: 'E-Commerce App', tech: 'UIUX / Branding', img: 'Project 02' },
  ];

  return (
    <section id="projects" className="py-24 border-b border-gray-100">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
        Works
      </span>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <div className="aspect-video bg-gray-100 mb-6 overflow-hidden relative">
              <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-[10px] tracking-widest text-gray-400">
                {project.img}
              </div>
            </div>
            <h3 className="text-xl font-medium tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mt-2 italic font-serif">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
