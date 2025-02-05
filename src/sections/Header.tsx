export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-10">
      <nav className="flex md:gap-1 px-1.5 md:p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#testimonials" className="nav-item">Testimonials</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item">Contact</a>
      </nav>
    </div>
  );
};
