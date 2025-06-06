import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col justify-center px-4"
		>
			<div className="container max-w-4xl mx-auto text-center z-10">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-6xl tracking-tight font-bold">
						<span className="animate-fade-in opacity-0">
							Hi, I'm
						</span>
						<span className="text-primary animate-fade-in-delay-1 opacity-0">
							{" "}
							Abinesh
						</span>
						<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
							{" "}
							Kumar
						</span>
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3">
						A passionate web developer, who is looking for entry
						jobs in the FrontEnd domain, has been in the game since
						2024. And have the capability to lead own projects.
					</p>
					<div className=" pt-4 opacity-0 animate-fade-in-delay-4">
						<a href="#projects" className="cosmic-button">
							View My Work
						</a>
					</div>
				</div>
			</div>
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
				<span>Scroll</span>
				<ArrowDown className="h-5 w-5 text-primary"/>
			</div>
		</section>
	);
};
