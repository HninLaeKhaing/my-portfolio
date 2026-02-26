<script src="https://cdn.tailwindcss.com"></script>
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  GraduationCap,
  Briefcase,
  BrainCircuit,
  Layout,
  Calendar,
  Code
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('About');
  const [scrolled, setScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // Updated roles to reflect a broader exploration
  const roles = [
    "Tech Explorer",
    "Fullstack Developer",
    "Data Enthusiast",
    "Problem Solver",
    "Aspiring Engineer"
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(roleInterval);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  const profile = {
    name: "Hnin Lae Khaing",
    // Updated bio to be more exploratory and professional
    bio: "I'm a Computer Science and Engineering undergraduate at Manav Rachna University, driven by a deep curiosity for how technology shapes our world. Currently, I am navigating the intersections of Full-stack Engineering, Data Analytics, and Artificial Intelligence, building hands-on projects to bridge the gap between complex data and intuitive user experiences.",
    email: "hlaekhine@gmail.com",
    linkedin: "https://www.linkedin.com/in/hnin-lae-khaing-181hlk2003",
    github: "https://github.com/HninLaeKhaing",
    image: "https://i.ibb.co/rR6Hj8Db/Whats-App-Image-2025-10-24-at-00-01-29-c8798c042.jpg"
  };

  const skills = [
    { title: "Data & Insights", items: ["Data Analysis", "Python", "Machine Learning", "Streamlit", "SAP Analytic Cloud"], icon: <BrainCircuit className="text-pink-400" /> },
    { title: "Web & Fullstack", items: ["Matplotlib", "Node JS", "Seaborn", "Tailwind CSS", "MongoDB", "SQL"], icon: <Layout className="text-pink-500" /> },
    { title: "Languages", items: ["C", "C++", "Java", "Python", "R"], icon: <Terminal className="text-pink-300" /> },
    { title: "Core Tech", items: ["Power BI", "Git", "Google Cloud", "SAP Build Apps", "Vercel"], icon: <Cpu className="text-pink-600" /> }
  ];

  const projects = [
    {
      title: "Atlas AI Interview Builder",
      description: "An advanced orchestration of Agentic AI. Developed custom autonomous agents capable of facilitating multi-lingual, voice-integrated interviews with real-time proctoring and behavioral analysis.",
      tags: ["Agentic AI", "React JS", "AI Integration", "Node.js"],
      live: "https://atlasai9.netlify.app/",
      code: "https://github.com/HninLaeKhaing/Atlas_platform",
      image: "https://i.ibb.co/gML88rMz/premium-photo-1676666379090-e0fc81f41e7e.avif" 
    },
    {
      title: "Personal Finance Forecasting",
      description: "Leveraging historical spending data to build predictive models. This project utilizes machine learning algorithms to forecast future financial health and automate budget categorization.",
      tags: ["ML", "Python", "Data Analysis", "Finance"],
      live: "#",
      code: "https://github.com/HninLaeKhaing/Personal_Data_Driven_Finance_Forecasting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
    },
    {
      title: "Suicidal Behaviour Analysis",
      description: "A data science initiative that transforms raw behavioral metrics into actionable insights. Implemented graph-based visualizations and AI-driven chatbots to support adolescent mental health research.",
      tags: ["Data Science", "Python", "Visualization", "Analysis"],
      live: "https://suicidalbehaviouramongadolescenceanalysis-nhtkh2d3qopbiqhp43jn.streamlit.app/",
      code: "https://github.com/HninLaeKhaing/Suicidal_Behaviour_Among_Adolescence_Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
    },
    {
      title: "Amica - Mental Health Support",
      description: "A holistic mental wellness platform grounded in Cognitive Behavioral Therapy (CBT). Designed as a secure, full-stack application providing a compassionate digital companion for users.",
      tags: ["Fullstack", "JavaScript", "CBT", "HealthTech"],
      live: "https://hninlaekhaing.github.io/Amica/",
      code: "https://github.com/HninLaeKhaing/Amica/",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
    }
  ];

  const experienceData = [
    {
      title: "Software Development Job Simulation",
      company: "Citi (Forage)",
      duration: "Jan 2026",
      description: "Gained insights into enterprise-level development workflows, focusing on software design principles and scalable system architectures within the financial sector.",
      tech: ["Software Design", "Java"],
      icon: <Briefcase size={18} />
    },
    {
      title: "Cyber Security & Ethical Hacking Intern",
      company: "CODTECH IT SOLUTIONS",
      duration: "2025",
      description: "Identified vulnerabilities and fortified network security through rigorous auditing and ethical hacking simulations.",
      tech: ["Security", "Networking", "Linux"],
      icon: <Briefcase size={18} />
    },
    {
      title: "Investment Banking Virtual Intern",
      company: "Citi (Forage)",
      duration: "2023",
      description: "Simulated market analysis and investment strategies, applying analytical thinking to complex corporate financial data.",
      tech: ["Data Analysis", "Finance"],
      icon: <Briefcase size={18} />
    },
    {
      title: "Founder & Project Manager",
      company: "Bridge To Heaven (BTH)",
      duration: "Present",
      description: "Orchestrating social impact initiatives by leading a diverse team through high-stakes project lifecycles to serve local communities.",
      tech: ["Project Management", "Leadership"],
      icon: <Briefcase size={18} />
    }
  ];

  const educationData = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "Manav Rachna University",
      duration: "2024 - 2028",
      grade: "CGPA: 8.86 (Academic Distinction)",
      description: "Actively involved in technical societies; Google Cloud Hackthon, Finalist at IEEE NSUT Hackvision and Winner of Innoskill 2025 Code Debugging.",
      icon: <GraduationCap size={18} />
    },
    {
      title: "Secondary Education (PCM)",
      institution: "No (1) BEHS / Pakokku/ Myanmar",
      duration: "2017 - 2019",
      grade: "Distinction in Mathematics",
      description: "Built a solid foundation in logic and computational mathematics, graduating with top honors.",
      icon: <GraduationCap size={18} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pink-500/30 font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-pink-600/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-pink-500 tracking-widest uppercase text-sm font-black">Hnin Lae Khaing</span>
          </div>
          <div className="hidden md:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10">
            {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)} 
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTab === item ? 'bg-pink-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href={profile.github} target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="About" className="relative pt-48 pb-12 px-6 flex flex-col items-center text-center">
        {/* Floating Pop-up Image Container */}
        <div className="mb-12 relative group animate-bounce-slow">
            {/* Glow effect behind the image */}
            <div className="absolute inset-0 bg-pink-500/30 blur-[60px] rounded-full scale-110 group-hover:scale-125 transition-transform duration-700"></div>
            
            {/* Main Image Frame (Floating Pop-up Style) */}
            <div className="relative p-2 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-1">
                <img 
                    src={profile.image} 
                    alt={profile.name} 
                    className="w-56 h-56 md:w-72 md:h-72 rounded-[2.5rem] object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 shadow-inner border border-white/5"
                />
            </div>
            
            {/* Bottom floating tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] uppercase font-black tracking-widest text-gray-300">Open to exploration</span>
            </div>
        </div>
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">{profile.name}</span>
          </h1>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <p className="text-sm font-medium text-pink-400">{roles[roleIndex]}</p>
          </div>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">{profile.bio}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-white text-black rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all text-sm shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all text-sm">
              Say Hello
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="Skills" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold tracking-widest text-xs uppercase">Curated Stack</span>
          <h2 className="text-4xl font-bold mt-2 tracking-tight">Technical Toolset</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-gray-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section (Z-Pattern) */}
      <section id="Experience" className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
        <div className="text-center mb-20">
          <span className="text-pink-500 font-bold tracking-widest text-xs uppercase">Professional Path</span>
          <h2 className="text-4xl font-bold mt-2 tracking-tight">Experience</h2>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 via-pink-500/20 to-transparent -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12 md:space-y-24">
            {experienceData.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-5/12">
                  <div className={`p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:border-pink-500/30 transition-all group relative ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-pink-500 transition-colors">{item.title}</h3>
                    <p className="text-white font-semibold mb-2">{item.company}</p>
                    <div className={`flex items-center gap-2 text-gray-500 text-xs mb-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar size={14} /> {item.duration}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                    {item.tech && (
                      <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.tech.map((t, i) => (
                          <span key={i} className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative z-10 my-8 md:my-0 flex items-center justify-center w-full md:w-2/12">
                  <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-pink-600 shadow-xl flex items-center justify-center transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (Z-Pattern) */}
      <section id="Projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold tracking-widest text-xs uppercase">Portfolio</span>
          <h2 className="text-4xl font-bold mt-2 tracking-tight">Featured Projects</h2>
        </div>
        <div className="space-y-24">
          {projects.map((proj, idx) => (
            <div key={idx} className={`flex flex-col gap-12 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 shadow-2xl">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                     <div className="flex gap-3">
                        <a href={proj.code} target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-pink-600 transition-all"><Github size={20}/></a>
                        {proj.live !== "#" && <a href={proj.live} target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-pink-600 transition-all"><ExternalLink size={20}/></a>}
                     </div>
                  </div>
                </div>
              </div>
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-[10px] font-black uppercase tracking-widest mb-4">
                  Project {idx + 1}
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{proj.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 bg-white/5 text-gray-400 rounded-lg border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={proj.code} target="_blank" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all font-bold text-xs border border-white/10">
                    View Repository
                  </a>
                  {proj.live !== "#" && (
                    <a href={proj.live} target="_blank" className="px-6 py-3 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition-all font-bold text-xs shadow-lg shadow-pink-500/20">
                      View Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section (Z-Pattern) */}
      <section id="Education" className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">Academic Journey</span>
          <h2 className="text-4xl font-bold mt-2 tracking-tight">Education</h2>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12 md:space-y-24">
            {educationData.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-5/12">
                  <div className={`p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:border-blue-500/30 transition-all group relative ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors">{item.title}</h3>
                    <p className="text-white font-semibold mb-2">{item.institution}</p>
                    <div className={`flex items-center gap-2 text-gray-500 text-xs mb-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar size={14} /> {item.duration}
                    </div>
                    <div className={`inline-block px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded border border-blue-500/20 mb-4`}>
                      {item.grade}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="relative z-10 my-8 md:my-0 flex items-center justify-center w-full md:w-2/12">
                  <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-blue-600 shadow-xl flex items-center justify-center transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Let's build something.</h2>
        <p className="text-gray-500 mb-10">Exploring the boundaries of code, data, and design.</p>
        <div className="flex justify-center gap-6 mb-16">
          <a href={`mailto:${profile.email}`} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold">Email</span>
          </a>
          <a href={profile.linkedin} target="_blank" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold">LinkedIn</span>
          </a>
          <a href={profile.github} target="_blank" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Github size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold">GitHub</span>
          </a>
        </div>
        <div className="pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} {profile.name} &mdash; Growing through curiosity
        </div>
      </footer>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
