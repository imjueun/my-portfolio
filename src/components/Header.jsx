const Header = () => {
  return (
    <header className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-[#fafafa]/80 backdrop-blur-md">
      <h1 className="text-xl font-bold tracking-tighter">IM JUEUN</h1>
      <nav className="hidden md:flex space-x-10 text-[12px] font-medium uppercase tracking-[0.2em]">
        <a href="#about" className="hover:text-gray-400 transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-gray-400 transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-gray-400 transition-colors">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-400 transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
