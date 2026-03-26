import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { 
  Database, 
  BarChart3, 
  Cpu, 
  BrainCircuit, 
  Bot, 
  CheckCircle2, 
  Users, 
  Award, 
  Briefcase, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Menu,
  X,
  ChevronRight,
  Clock,
  PlayCircle
} from 'lucide-react';
import { COURSES, PROJECTS, ROADMAP, TESTIMONIALS } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            PEGASUS <span className="text-sky-400">TECHNOLOGIES</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-500/25 active:scale-95">
            Enroll Now
          </button>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold mt-2">
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              Next Batch Starting Soon
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Become Job-Ready <br />
              <span className="gradient-text">Data Scientist</span> <br />
              with AI in 90 Days
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl">
              Hands-on Training in Data Science, Analytics & Agentic AI with Real Projects. Led by Industry Expert Somil Deshmukh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-sky-500/30 flex items-center justify-center gap-2 group">
                Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5 text-sky-400" /> Book Free Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Students Trained', value: '1000+', icon: Users },
                { label: 'Expert Trainer', value: '18+ Yrs', icon: Award },
                { label: 'Placement Rate', value: '92%', icon: Briefcase },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sky-400">
                    <stat.icon className="w-4 h-4" />
                    <span className="text-xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-sky-500/10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Training" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-white/10 shadow-2xl z-20 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="text-green-400 w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Avg. Salary Hike</div>
                  <div className="text-lg font-bold text-white">75% - 150%</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-green-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-white font-bold ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Trusted by 1000+ Students</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['TCS', 'Infosys', 'Accenture', 'Google', 'Amazon'].map((company) => (
              <span key={company} className="text-xl font-black tracking-tighter text-white">{company}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 uppercase tracking-[0.2em] mb-4">Our Programs</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Master the Future of Tech</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Industry-aligned curriculum designed to take you from beginner to expert in the most in-demand fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="gradient-border group cursor-pointer"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 text-sky-400">
                  <course.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{course.title}</h4>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{course.outcome}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.tools.map((tool) => (
                    <span key={tool} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </div>
                  <button className="text-sky-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: '18+ Years Experience', desc: 'Learn from Somil Deshmukh, a veteran Java Architect & AI Expert.', icon: Award },
    { title: 'Real-world Projects', desc: 'Build portfolio-worthy projects that solve actual business problems.', icon: Zap },
    { title: 'Placement Support', desc: 'Dedicated assistance for resumes, mock interviews, and job referrals.', icon: Briefcase },
    { title: 'Live Mentorship', desc: 'Interactive sessions with direct access to your mentor for doubt clearing.', icon: MessageSquare },
  ];

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-sky-400 uppercase tracking-[0.2em] mb-4">Why Pegasus?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">The Pegasus Advantage</h3>
            <p className="text-slate-400 mb-12 text-lg">
              We don't just teach tools; we build careers. Our training methodology is rooted in industry practices and real-world application.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{f.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass border-white/10 p-4">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team Learning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-sky-500/20 mix-blend-overlay" />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-8 -right-8 bg-white text-brand-dark p-6 rounded-2xl shadow-2xl rotate-6 hidden sm:block">
              <div className="text-4xl font-black mb-1">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-60">Practical Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Industry-Grade Projects</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our students build real systems that showcase their expertise to potential employers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-3xl overflow-hidden border-white/10 group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-sky-500/20 text-sky-400 backdrop-blur-md border border-sky-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">The Problem</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">The Solution</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 uppercase tracking-[0.2em] mb-4">Learning Path</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Your 90-Day Roadmap</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-indigo-500/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {ROADMAP.map((item, idx) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-right">
                  {idx % 2 === 0 ? (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  ) : null}
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full glass border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xs shrink-0 shadow-lg shadow-sky-500/10">
                  {item.week}
                </div>

                <div className="flex-1 text-center md:text-left">
                  {idx % 2 !== 0 ? (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TrainerSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[40px] p-8 md:p-16 border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                <img 
                  src="https://lh3.googleusercontent.com/d/1keNWU0yoMmZOfW0wZjkfINDaKm55XsLa" 
                  alt="Somil Deshmukh" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/80 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-white/10 shadow-2xl z-10">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-white">18+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400 leading-tight">
                    Years Industry<br/>Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-sky-400 uppercase tracking-[0.2em] mb-4">Meet Your Mentor</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Somil Deshmukh</h3>
              <p className="text-sky-400 font-semibold text-xl mb-8">Java Architect & AI Specialist</p>
              
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                With over 18 years of experience in top MNCs, Somil has architected complex systems and led large-scale AI implementations. He brings a unique blend of deep technical expertise and a passion for teaching.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Ex-Architect at Top Tier MNCs',
                  'Trained 1000+ Students globally',
                  'Expert in Java, Data Science & Agentic AI',
                  'Passionate about Career Transformation'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="text-sky-400 w-5 h-5 shrink-0" /> {item}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-8 border border-red-500/20">
          <Clock className="w-4 h-4" /> Limited Time Offer - 40% OFF
        </div>
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">Invest in Your Future</h3>
        
        <div className="glass p-12 rounded-[40px] border-white/10 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-sky-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            Most Popular Choice
          </div>
          
          <div className="mb-8">
            <span className="text-slate-500 text-2xl line-through mr-4">₹49,999</span>
            <span className="text-6xl font-black text-white">₹69,999</span>
            <span className="text-slate-500 text-lg ml-2">/ Full Course</span>
          </div>

          <p className="text-slate-400 mb-10 max-w-md mx-auto">
            Get lifetime access to recordings, project source code, and placement assistance.
          </p>

          <button className="w-full bg-white text-brand-dark hover:bg-sky-50 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl active:scale-[0.98] mb-6">
            Enroll Now & Save ₹20,000
          </button>
          
          <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
            Only 8 Seats Left for the April Batch
          </p>
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: 'Student / Fresher'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store lead in Firebase Firestore
      const leadsCollection = collection(db, 'leads');
      await addDoc(leadsCollection, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        createdAt: serverTimestamp()
      });

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', experience: 'Student / Fresher' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-sky-400 uppercase tracking-[0.2em] mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Start Your Journey Today</h3>
            <p className="text-slate-400 mb-12 text-lg">
              Have questions? Book a free demo session with Somil sir and get your career roadmap cleared.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-sky-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-bold text-white">+91 9764138488</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-sky-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email Us</div>
                  <div className="text-xl font-bold text-white">contact@pegasustechnologies.org</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-sky-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Visit Us</div>
                  <div className="text-xl font-bold text-white">Nagpur, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[40px] border-white/10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-400 w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Request Sent!</h4>
                  <p className="text-slate-400">
                    Thank you! We've received your details and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Experience Level</label>
                    <select 
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors appearance-none"
                    >
                      <option className="bg-brand-surface">Student / Fresher</option>
                      <option className="bg-brand-surface">Working Professional</option>
                      <option className="bg-brand-surface">Career Switcher</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-sky-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Book Free Demo Class"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">PEGASUS TECHNOLOGIES</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation of tech leaders with industry-ready skills in Data Science, Analytics, and AI.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-sky-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-sky-400 transition-colors">Courses</a></li>
              <li><a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Trainer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Courses</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Generative AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Office</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                Nandanvan Main Road Nagpur, Maharashtra, India
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                +91 9764138488 ,9823520987
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                contact@pegasustechnologies.org
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © 2026 Pegasus Technologies & Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919764138488"
        target="_blank"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 text-white"
      >
        <MessageSquare className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <CoursesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <Roadmap />
      <TrainerSection />
      <PricingSection />
      <LeadForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
