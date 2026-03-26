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
  FileSearch,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

export const COURSES = [
  {
    id: 'ds',
    title: 'Data Science',
    icon: Database,
    tools: ['Python', 'Pandas', 'Scikit-Learn', 'SQL'],
    outcome: 'Master the end-to-end data science lifecycle and build predictive models.',
    duration: '12 Weeks'
  },
  {
    id: 'da',
    title: 'Data Analytics',
    icon: BarChart3,
    tools: ['Power BI', 'Tableau', 'Excel', 'SQL'],
    outcome: 'Transform raw data into actionable business insights with advanced visualization.',
    duration: '8 Weeks'
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: Cpu,
    tools: ['TensorFlow', 'Keras', 'PyTorch', 'NLP'],
    outcome: 'Build and deploy intelligent algorithms that learn from complex data patterns.',
    duration: '10 Weeks'
  },
  {
    id: 'genai',
    title: 'Generative AI',
    icon: BrainCircuit,
    tools: ['LLMs', 'OpenAI', 'LangChain', 'Stable Diffusion'],
    outcome: 'Harness the power of foundation models to create text, images, and code.',
    duration: '6 Weeks'
  },
  {
    id: 'agentic',
    title: 'Agentic AI Systems',
    icon: Bot,
    tools: ['AutoGPT', 'CrewAI', 'Multi-Agent Systems'],
    outcome: 'Design autonomous AI agents that can reason, plan, and execute complex tasks.',
    duration: '8 Weeks'
  }
];

export const PROJECTS = [
  {
    title: 'Fraud Detection System',
    problem: 'Financial institutions lose billions to fraudulent transactions.',
    solution: 'Real-time anomaly detection using Random Forest and XGBoost.',
    tech: ['Python', 'Scikit-Learn', 'Flask'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sales Forecasting AI',
    problem: 'Retailers struggle with inventory management and demand prediction.',
    solution: 'Time-series analysis using LSTM and Prophet for 95% accuracy.',
    tech: ['TensorFlow', 'Prophet', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'AI Customer Support Bot',
    problem: 'High operational costs for 24/7 customer support.',
    solution: 'RAG-based chatbot using LangChain and GPT-4 for automated resolution.',
    tech: ['LangChain', 'OpenAI', 'Vector DB'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Resume Screening AI',
    problem: 'HR teams spend hours manually filtering thousands of resumes.',
    solution: 'NLP-based ranking system that matches candidates to job descriptions.',
    tech: ['NLTK', 'Spacy', 'React'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
  }
];

export const ROADMAP = [
  { week: 'Week 1–2', title: 'Python + Basics', description: 'Foundations of programming, data structures, and logic.' },
  { week: 'Week 3–4', title: 'Data Analysis', description: 'Exploratory data analysis with Pandas, NumPy, and SQL.' },
  { week: 'Week 5–6', title: 'Machine Learning', description: 'Supervised and unsupervised learning algorithms.' },
  { week: 'Week 7–8', title: 'AI + LLMs', description: 'Deep learning basics and working with Large Language Models.' },
  { week: 'Week 9–10', title: 'Real Projects', description: 'Building end-to-end industry-grade applications.' },
  { week: 'Week 11–12', title: 'Placement Prep', description: 'Resume building, mock interviews, and job search.' }
];

export const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    role: 'Data Analyst at TCS',
    content: 'The hands-on approach at Pegasus changed my career. Somil sir explains complex concepts with such ease.',
    rating: 5
  },
  {
    name: 'Priya Verma',
    role: 'ML Engineer at Infosys',
    content: 'The projects we built were exactly what interviewers asked about. Highly recommended for freshers!',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Business Intelligence Lead',
    content: 'Even as a professional with 5 years experience, I found the GenAI module incredibly valuable.',
    rating: 5
  }
];
