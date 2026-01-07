import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, Globe } from "lucide-react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    if (ref.current) {
      scrollObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tighter hover:text-blue-500 transition-colors">
            alex<span className="text-blue-500">.dev</span>
          </a>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-blue-500">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-blue-500">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-blue-500">Work</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-blue-500">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
         
         <div className="max-w-3xl text-center z-10">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Digital Reality</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">
                I'm a Full Stack Developer crafting scalable, high-performance web applications with a focus on premium user experiences.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-3 border border-blue-500/30 hover:border-blue-500 rounded text-blue-400 hover:text-blue-300 transition-all hover:-translate-y-1 hover:bg-blue-500/5">
                  Contact Me
                </a>
              </div>
            </RevealOnScroll>
         </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-16 text-center">About <span className="text-blue-500">Me</span></h2>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  I specialize in building robust applications using modern technologies. 
                  My journey started with simple static pages and evolved into complex, 
                  scalable backend systems and interactive frontends.
                </p>
                <p>
                  I believe in clean code, automated testing, and continuous deployment.
                  When I'm not coding, I'm exploring new tech trends or contributing to open source.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:border-blue-500/30 transition-colors">
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Cpu className="text-blue-500" /> Tech Stack</h3>
                 <div className="flex flex-wrap gap-2">
                   {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                     <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-16 text-center">Featured <span className="text-blue-500">Work</span></h2>
          </RevealOnScroll>

          <div className="grid gap-8">
            {[
              {
                title: "Fintech Dashboard",
                desc: "Real-time financial data visualization platform with predictive analytics using Machine Learning models.",
                tech: ["React", "Python", "TensorFlow"],
                icon: <Terminal className="w-8 h-8 text-blue-500" />
              },
              {
                title: "E-Commerce Microservices",
                desc: "A distributed e-commerce backend handling 10k+ concurrent users with fault tolerance and auto-scaling.",
                tech: ["Node.js", "Docker", "Kubernetes"],
                icon: <Globe className="w-8 h-8 text-purple-500" />
              },
              {
                title: "AI Content Generator",
                desc: "SaaS application leveraging LLMs to help creators generate blog posts and social media content instantly.",
                tech: ["Next.js", "OpenAI API", "Stripe"],
                icon: <Code2 className="w-8 h-8 text-green-500" />
              }
            ].map((project, i) => (
              <RevealOnScroll key={i}>
                <div className="group relative p-8 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="p-4 bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(t => (
                          <span key={t} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                         <a href="#" className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300">View Project <ExternalLink size={14} /></a>
                         <a href="#" className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white">GitHub <Github size={14} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-950/50">
         <div className="max-w-xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold mb-6">Let's <span className="text-blue-500">Collaborate</span></h2>
              <p className="text-gray-400 mb-8">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs a premium touch, let's talk.
              </p>
              <a href="mailto:contact@alex.dev" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-all hover:-translate-y-1">
                <Mail size={20} /> Send Message
              </a>
            </RevealOnScroll>
         </div>
      </section>

      <footer className="py-8 text-center text-gray-600 border-t border-white/5 bg-black">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-white transition-colors"><Github /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin /></a>
          <a href="#" className="hover:text-white transition-colors"><Mail /></a>
        </div>
        <p>© 2024 Alex.dev. All rights reserved.</p>
      </footer>
    </div>
  );
}
