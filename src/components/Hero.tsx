const Hero = () => {
	return (
		<section className="hero">
			<p className="eyebrow">Hello, I'm Robert</p>
			<h1>Software Engineer</h1>
			<p className="hero-text">
				I recently graduated with a degree in computer science! I enjoy building
				applications and learning new things.
			</p>

			<div className="hero-buttons">
        <a href="#projects">View Projects</a>
        <a href="contact" className="secondary">Contact Me</a>
      </div>
		</section>
	);
};

export default Hero;
