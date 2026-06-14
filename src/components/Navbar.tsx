function Navbar() {
	return (
		<nav className="navbar">
			<a href="#home" className="logo">
				Robert Evans
			</a>

			<div className="nav-links">
				<a href="#about">About</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
				<a href="/Robert_Evans_Resume.pdf" download="Robert_Evans_Resume.pdf">
					Resume
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
