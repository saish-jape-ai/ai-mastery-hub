import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RegistrationDialog } from "@/components/RegistrationDialog";
import {
  Star, Calendar, Clock, Sparkles, Award, Users, Check, Play,
  Brain, Wand2, FileSpreadsheet, Globe, Briefcase, Zap,
  TrendingUp, DollarSign, Rocket, Target, Layers, Trophy,
  ChevronLeft, ChevronRight, Quote, Linkedin, Youtube, Instagram, Twitter,
  ShieldCheck, Gift, Infinity as InfinityIcon, PlayCircle, Flame, Menu, ArrowRight, Palette
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import heroImg from "@/assets/hero-mentor.jpg";
import mentorImg from "@/assets/mentor.jpg";
import gotaker from "@/assets/gotaker.png";
import jadish from "@/assets/jadish.png";
import mahi from "@/assets/mahi.png";
import prathamesh from "@/assets/prathamesh.png";
import sahil from "@/assets/sahil.png";
import saish from "@/assets/saish.png";
import sharad from "@/assets/sharad.png";
import sanika from "@/assets/sanika.png";
import jay from "@/assets/jay.png";
import rushi from "@/assets/rushi.png";
import rahul from "@/assets/rahul.png";
import ashu from "@/assets/ashu.png";
import raosir from "@/assets/raosir.mp4";
import certificate from "@/assets/certificate.png";
import { LearnerCard } from "@/components/LearnerCard";
import { LinkedInPostCard } from "@/components/LinkedInPostCard";
import { applyMethod, modulesData, sessionsList, dayDetails } from "@/data/syllabus";

const learnerData = [
  { name: "Saish Jape", image: saish },
  { name: "Sahil Wable", image: sahil },
  { name: "Sharad Waje", image: sharad },
  { name: "Jadish", image: jadish },
  { name: "Mahi", image: mahi },
  { name: "Prathamesh", image: prathamesh },
  { name: "Gotaker", image: gotaker },
  { name: "Sanika", image: sanika },
  { name: "Jay", image: jay },
  { name: "Rushi", image: rushi },
  { name: "Rahul", image: rahul },
  { name: "Ashu", image: ashu },
  { name: "rushi", image: rushi },
];

const linkedInPosts = [
  {
    name: "Ashutosh Gadekar",
    avatar: ashu,
    connectionLevel: "2nd+",
    headline: "Strategic Learning and Development Leader | Talent...",
    timestamp: "1w",
    content: "I recently participated in a Generative AI workshop offered by BAAP Academy, focusing on how ChatGPT integrates with other GPT applications. This session provided a solid introduction to the capabilities of Generative AI, extending beyond simple Q&A interactions to include creating custom GPT models.\n\nA key insight for me was seeing the diverse applications of these technologies and understanding their potential beyond simple text generation. The workshop used practical examples to demonstrate how Generative AI can be used in various contexts.",
    hashtags: ["GenerativeAI", "AI", "ChatGPT", "Technology", "Learning", "AIMastery"],
    image: certificate,
    likes: 24,
    comments: 1
  },
  {
    name: "Sahil Wable",
    avatar: sahil,
    connectionLevel: "3rd+",
    headline: "Encargado de Costos en Empacadora del Golfo SA d...",
    timestamp: "2w",
    content: "Just wrapped up the Generative AI workshop and had to share my thoughts!\n\nRecently attended the Generative AI workshop, and it was an incredible experience!\nThe insights gained and hands-on learning were beyond valuable. Big thanks to Vaibhav and the BAAP Academy team for organizing such an insightful event.\n\nHighlights:\n- In-depth discussions on the latest trends in Generative AI.\n- Practical sessions that demystified complex concepts.\n- Engaging Q&A sessions that added immense value.",
    hashtags: ["GenerativeAI", "AI Workshop", "LearningExperience"],
    image: certificate,
    likes: 42,
    comments: 5
  },
  {
    name: "Rushikesh Lodhe",
    avatar: rushi,
    connectionLevel: "2nd",
    headline: "Content Writer | Copywriter | SEO | Content Strategy...",
    timestamp: "4d",
    content: "BAAP Academy's mind blowing workshop! It was amazing to know about ChatGPT & Generative AI. Vaibhav explains very well, that it really blew my mind.\n\nI think more than just the content what I really loved about Vaibhav is his passion to help students, a right mentor can drive you towards your goal.",
    hashtags: ["ai", "content", "learning"],
    image: certificate,
    likes: 38,
    comments: 2
  }
];

const featuredTools = [
  { name: "descript", logo: <div className="flex items-center gap-2 font-bold text-[#00A3FF]"><div className="w-6 h-6 flex flex-col gap-0.5"><div className="w-full h-1.5 bg-[#00A3FF]"></div><div className="w-3/4 h-1.5 bg-[#00A3FF]"></div><div className="w-full h-1.5 bg-[#00A3FF]"></div></div>descript</div> },
  { name: "HeyGen", logo: <div className="flex items-center gap-2 font-bold"><div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500"></div>HeyGen</div> },
  { name: "tome", logo: <div className="flex items-center gap-2 font-bold"><div className="w-6 h-6 rounded-full border-4 border-[#FF00FF]"></div>tome</div> },
  { name: "ChatGPT", logo: <div className="flex items-center gap-2 font-bold text-[#10A37F] font-mono"><Sparkles className="h-5 w-5 fill-[#10A37F] text-[#10A37F]" /> ChatGPT</div> },
  { name: "D-ID", logo: <div className="flex items-center gap-2 font-black italic tracking-tighter">D-ID<span className="text-orange-500 text-2xl font-normal">{"}"}</span></div> },
  { name: "vidyo.ai", logo: <div className="flex items-center gap-2 font-bold"><div className="w-6 h-6 flex items-center justify-center"><div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#7000FF] border-b-[8px] border-b-transparent"></div></div>vidyo.ai</div> },
];

const moreToolsRow1 = ["Claude", "Midjourney", "Canva AI", "Notion AI", "Zapier", "Gamma"];
const moreToolsRow2 = ["Perplexity", "Copilot", "ElevenLabs", "Runway", "Synthesia", "Firefly"];

const curriculumData = [
  {
    icon: Brain,
    title: "Understanding Generative AI & Prompt Engineering",
    details: [
      "Gain a deep, working knowledge of how generative AI models like ChatGPT, Claude, and Gemini function.",
      "Learn the key principles of prompt engineering to get precise, high-quality outputs from any AI tool.",
      "Understand how to effectively communicate with AI, whether for generating content, code, images, or strategy ideas.",
      "Walk away with practical skills to leverage AI for a variety of tasks and business needs."
    ]
  },
  {
    icon: Sparkles,
    title: "ChatGPT and 20+ AI Tools",
    details: [
      "Mastering ChatGPT for advanced business automation and complex problem solving.",
      "Hands-on exploration of image generation tools like Midjourney, DALL-E, and Leonardo.",
      "Professional video creation and editing using AI tools like HeyGen, Runway, and Descript.",
      "Daily productivity transformation with Notion AI, Microsoft Copilot, and Google Gemini."
    ]
  },
  {
    icon: Wand2,
    title: "Create AI-Powered Writing Assistants",
    details: [
      "Building and training custom GPTs tailored to your unique business writing style.",
      "Automating high-conversion email marketing, blog drafting, and social media content.",
      "Using AI to maintain a consistent brand voice across all digital platforms.",
      "Rapidly summarizing long documents and extracting key insights with AI."
    ]
  },
  {
    icon: Zap,
    title: "Automate Workflows with AI and No-Code Platforms",
    details: [
      "Integrating ChatGPT with Zapier and Make.com to build autonomous workflows.",
      "Creating AI-powered lead magnets and automated customer support bots.",
      "Seamlessly connecting AI outputs to your CRM and task management tools.",
      "Eliminating repetitive data entry tasks using smart AI automation."
    ]
  },
  {
    icon: Layers,
    title: "Explore Image and Video Generation with AI",
    details: [
      "Mastering text-to-video and video-to-video transformations with Runway Gen-2.",
      "Generating consistent AI characters for brand storytelling and marketing.",
      "High-end product photography and background replacement using AI creative suites.",
      "Cinematic image creation and prompt-based art direction."
    ]
  },
  {
    icon: Globe,
    title: "Build Digital Products without Code",
    details: [
      "Generating complete, high-converting landing pages in minutes using AI tools.",
      "Architecting and launching AI-powered micro-SaaS and digital tools.",
      "Rapid prototyping of web and mobile apps using AI-first design platforms.",
      "Monetizing AI by creating and selling digital assets and specialized prompts."
    ]
  },
];

const CustomBadge = ({ icon, text, dark }: { icon?: React.ReactNode; text: string; dark?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest ${dark ? "bg-secondary text-secondary-foreground" : "bg-primary-soft text-primary shadow-sm"}`}>
    {icon} {text}
  </div>
);

const Index = () => {
  const [open, setOpen] = useState(false);
  const join = () => setOpen(true);

  // Animated counters
  const [seats, setSeats] = useState(83);
  useEffect(() => {
    const t = setInterval(() => setSeats((s) => (s > 37 ? s - 1 : s)), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Promo strip */}
      <div className="bg-gradient-promo text-promo-foreground overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2 text-sm font-bold">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" /> Flat 48% Off
              <Star className="h-4 w-4 fill-current ml-6" /> Limited Period Offer
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20 px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">BAAP Academy</span>
            {/* <Badge variant="secondary" className="ml-2 hidden lg:flex items-center gap-1.5 bg-secondary/50 text-[10px] py-0 px-2 border-none font-bold">
              <TrendingUp className="h-3 w-3" /> Top Workshop 2026
            </Badge> */}
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
            {["Benefits", "Curriculum", "Mentor", "Reviews", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button onClick={join} className="hidden sm:flex rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 font-bold shadow-lg shadow-primary/20">
              Join Now
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left font-extrabold text-xl">BAAP Academy</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {["Benefits", "Curriculum", "Mentor", "Reviews", "FAQ"].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors border-b pb-2">{item}</a>
                  ))}
                  <Button onClick={join} className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-extrabold shadow-lg shadow-primary/20 mt-4">
                    Join Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative grid lg:grid-cols-2 gap-16 items-center py-16 md:py-24">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" /> 28-Day BAAP Academy Plan
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-up">
              AI FROM <span className="text-secondary">ZERO</span> TO <span className="text-gradient-primary">HERO</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl animate-up delay-100 italic">
              A 28-Day Structured Teaching Plan designed for Grades 7-12. <br className="hidden md:block" />
              Complete PPT Outlines · Zero Coding Required · All Free Tools.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "26 Days", desc: "Structured Plan" },
                { label: "15 Modules", desc: "Full Coverage" },
                { label: "30+ Tools", desc: "All Free Tiers" },
                { label: "Zero Code", desc: "Needed" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/60 border border-border/50 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <p className="text-2xl font-black text-primary leading-tight">{stat.label}</p>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-sm font-semibold">4.8/5 · 5,625 reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Users className="h-4 w-4 text-primary" /> 2 Million+ Learners
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Award className="h-4 w-4 text-primary" /> Certificate Included
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button onClick={join} size="lg" className="bg-gradient-cta shadow-cta animate-pulse-glow text-white rounded-full px-8 h-14 text-base">
                Join Now · ₹2599
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6 h-14 text-base border-2">
                <Play className="mr-2 h-4 w-4" /> Watch Preview
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-cta blur-3xl opacity-20 rounded-full" />
            <div className="relative rounded-3xl overflow-hidden shadow-card bg-card border-4 border-white/10 shadow-glow max-w-[380px] mx-auto">
              <video
                src={raosir}
                className="w-full h-full object-cover max-h-[450px]"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-semibold text-sm">Raosir</p>
                <p className="text-white/80 text-xs">Expert Mentor · BAAP Academy</p>
              </div>
            </div>

            {/* Rating card */}
            <div className="mt-6 mx-auto max-w-md rounded-2xl border-2 border-primary/30 bg-card p-4 shadow-glow">
              <p className="text-center text-xs uppercase tracking-wider text-muted-foreground mb-2">Rated</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-primary-soft p-3 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-5 w-5 fill-green-600 text-green-600" />
                    <span className="font-bold">4.7/5 (5625)</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Trustpilot</p>
                </div>
                <div className="rounded-xl bg-primary-soft p-3 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-bold text-blue-600">G</span>
                    <span className="font-bold">4.4/5 (3704)</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / LEARNERS */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            Trusted by Educators and Professionals to master the future of work <span className="text-gradient-primary">2 Million+ Global Learners</span>
          </h2>
          <div className="mt-12 space-y-6 overflow-hidden">
            {/* Row 1 */}
            <div className="flex animate-marquee whitespace-nowrap gap-4">
              {[...learnerData, ...learnerData].map((learner, i) => (
                <LearnerCard key={i} name={learner.name} image={learner.image} />
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/50 border border-border/50 rounded-[2.5rem] p-8 md:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-black text-primary mb-3">Teaching Approach</p>
              <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">The <span className="text-gradient-primary">APPLY</span> Method</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Every session is built on a proven pedagogical framework that ensures students don't just "watch" AI — they **master** it through active creation.
              </p>
              <div className="space-y-4">
                {applyMethod.map((m, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className={`h-12 w-12 rounded-xl ${m.color} text-white flex items-center justify-center shrink-0 font-black text-xl shadow-lg transition-transform group-hover:scale-110`}>
                      {m.letter}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">{m.title}</h4>
                      <p className="text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-secondary text-secondary-foreground rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                <h4 className="text-2xl font-extrabold mb-4 relative z-10 italic">How to use this plan</h4>
                <ul className="space-y-4 relative z-10">
                  <li className="flex gap-3 items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm"><b>Structure of Each Day:</b> Objectives, Topics, PPT Breakdown, Classroom Activity, and Homework.</p>
                  </li>
                  {/* <li className="flex gap-3 items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm"><b>PPT Colour Legend:</b> Use Navy for concepts, Orange for activities, and Green for takeaways.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm"><b>Teacher Tips:</b> Expert delivery advice provided for every single session.</p>
                  </li> */}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  {/* <div className="flex gap-2">
                    <div className="w-8 h-8 rounded bg-blue-900 border border-white/20" />
                    <div className="w-8 h-8 rounded bg-orange-600 border border-white/20" />
                    <div className="w-8 h-8 rounded bg-green-700 border border-white/20" />
                  </div> */}
                  {/* <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">PPT Style Guide</span> */}
                </div>
              </div>
              <Card className="bg-primary p-8 text-white rounded-3xl shadow-glow overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Globe className="w-24 h-24" />
                </div>
                <h4 className="text-2xl font-black mb-2">Multi-Tool Mastery</h4>
                <p className="text-primary-foreground/90 text-sm mb-6">Designed to work with all major free AI platforms.</p>
                <div className="flex flex-wrap gap-2">
                  {["ChatGPT", "Claude", "Gemini", "Canva", "ElevenLabs"].map(t => (
                    <span key={t} className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 md:py-24 bg-gradient-soft overflow-hidden">
        <div className="container">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-16 italic">Learn <span className="text-gradient-primary">30+ AI Tools</span> In 26 Days</h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Row 1 - Featured & Clear */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up">
              {featuredTools.map((tool) => (
                <div key={tool.name} className="flex-shrink-0 bg-white border border-border px-8 py-5 rounded-2xl shadow-card hover:shadow-glow hover:-translate-y-1 transition duration-300">
                  {tool.logo}
                </div>
              ))}
            </div>

            {/* Row 2 - Slightly Blurred */}
            <div className="flex flex-wrap justify-center gap-4 opacity-50 blur-[2px] select-none pointer-events-none">
              {moreToolsRow1.map((tool) => (
                <div key={tool} className="flex-shrink-0 bg-white/60 border border-border/50 px-8 py-4 rounded-xl shadow-sm italic font-medium">
                  {tool}
                </div>
              ))}
            </div>

            {/* Row 3 - More Blurred / Fading Out */}
            <div className="flex flex-wrap justify-center gap-4 opacity-20 blur-[5px] select-none pointer-events-none scale-95">
              {moreToolsRow2.map((tool) => (
                <div key={tool} className="flex-shrink-0 bg-white/40 border border-border/30 px-6 py-3 rounded-lg shadow-none">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM OVERVIEW */}
      <section id="curriculum" className="py-20 bg-white relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">The <span className="text-gradient-primary">26-Day</span> Mastery Road</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto italic font-medium">From fundamental concepts to sophisticated AI workflows in four transformative weeks.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white border border-border/60 rounded-3xl shadow-xl overflow-hidden animate-fade-in">
                <div className="bg-secondary/50 px-6 py-4 border-b border-border/60 flex justify-between items-center">
                  <h3 className="font-bold flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> Full 26-Day Schedule
                  </h3>
                  <CustomBadge text="15 Modules · 28 Sessions" />
                </div>
                <div className="max-h-[650px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-white shadow-sm z-10">
                      <tr className="border-b border-border/40">
                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground/60">Day</th>
                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground/60">Session Title</th>
                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground/60">Module</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessionsList.map((session, idx) => (
                        <tr key={idx} className="border-b border-border/30 hover:bg-primary-soft/30 transition-colors group">
                          <td className="px-6 py-4 font-black text-primary/40 group-hover:text-primary transition-colors">{session.day}</td>
                          <td className="px-6 py-4 font-bold text-sm leading-tight">{session.title}</td>
                          <td className="px-6 py-4">
                            <span className="text-[9px] font-black tracking-tighter bg-secondary text-secondary-foreground px-2 py-1 rounded-md whitespace-nowrap">{session.module}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                  <Layers className="text-primary h-6 w-6" /> Week 1 Deep Dive
                </h3>
                <div className="space-y-4">
                  {dayDetails.map((detail, idx) => (
                    <Accordion key={idx} type="single" collapsible>
                      <AccordionItem value={`item-${idx}`} className="border border-border/50 rounded-2xl px-4 bg-secondary/15 overflow-hidden transition-all hover:bg-secondary/25">
                        <AccordionTrigger className="hover:no-underline py-4">
                          <div className="flex items-center gap-4 text-left">
                            <div className="h-10 w-10 rounded-xl bg-white border border-border/60 flex items-center justify-center font-black text-primary shadow-sm shrink-0">
                              {detail.day}
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest leading-none mb-1">{detail.module}</p>
                              <p className="font-extrabold leading-tight">{detail.title}</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6">
                          <div className="space-y-5 pt-2">
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-secondary-foreground/60 flex items-center gap-2">
                                <ShieldCheck className="h-3 w-3" /> Learning Objectives
                              </p>
                              <ul className="grid grid-cols-1 gap-2">
                                {detail.objectives.map((obj, i) => (
                                  <li key={i} className="text-xs flex gap-2 items-start font-medium text-foreground/80">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1 shrink-0" />
                                    <span>{obj}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-4 bg-white/60 rounded-xl border border-border/50">
                              <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-secondary-foreground/60">Topics To Cover</p>
                              <div className="flex flex-wrap gap-2">
                                {detail.topics.map((topic, i) => (
                                  <span key={i} className="text-[9px] font-bold bg-white text-foreground/70 border border-border/60 px-2 py-1 rounded shadow-sm">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </div>

              <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-glow relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-10 transition-transform group-hover:scale-110">
                  <Sparkles size={120} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-2 italic">Teacher Outlines Included</h4>
                  <p className="text-sm text-primary-foreground/80 mb-6 font-medium">Get full access to the 26-Day PPTs, activity guides, and expert delivery tips.</p>
                  <RegistrationDialog trigger={
                    <Button variant="secondary" size="lg" className="w-full font-black text-primary shadow-xl hover:scale-105 transition-transform py-7 text-lg rounded-2xl">
                      Get The Full Access <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  } />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-black italic">And Also Get <span className="text-gradient-primary">Teacher-Ready Bonuses</span></h3>
              <p className="text-muted-foreground mt-2">Everything you need to deliver high-impact AI sessions immediately.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                { title: "Full PPT Outlines", desc: "For every single session across all 26 days.", icon: Palette },
                { title: "Free Tool Directory", desc: "Access 30+ tools with zero-cost accounts.", icon: Zap },
                { title: "Classroom Activities", desc: "Hands-on exercises designed for engagement.", icon: Sparkles },
                { title: "Teacher Tips", desc: "Expert delivery advice for every session.", icon: Briefcase }
              ].map((b, i) => (
                <div key={i} className="rounded-3xl bg-secondary/30 border border-border/40 p-6 shadow-sm hover:shadow-md transition">
                  <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-4">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-extrabold text-lg mb-1 leading-tight">{b.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <RegistrationDialog trigger={
                <Button onClick={join} size="xl" className="bg-gradient-primary text-white rounded-full px-12 group h-16 text-lg font-black shadow-lg">
                  Start Your 26-Day Journey <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              } />
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 italic">Why This <span className="text-gradient-primary">26-Day Plan?</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "Save 10+ hours every week", desc: "Automate repetitive work and focus on what matters." },
              { icon: DollarSign, title: "Increase income opportunities", desc: "Use AI to land freelance gigs and side income." },
              { icon: Rocket, title: "Become future-ready", desc: "Stay ahead of 99% who haven't adopted AI yet." },
              { icon: TrendingUp, title: "Boost office productivity", desc: "Outperform your peers with AI-driven workflows." },
              { icon: Target, title: "Create business assets faster", desc: "Decks, copy, designs, code — in minutes." },
              { icon: Briefcase, title: "Stand out in the job market", desc: "AI-skilled professionals get hired 3x faster." },
            ].map((b, i) => (
              <Card key={i} className="p-6 bg-card hover:shadow-glow transition">
                <b.icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg">{b.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MENTOR */}
      <section id="mentor" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">Learn from the <span className="text-gradient-primary">top 1% in AI</span></h2>
          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">…as they guide you through cutting-edge tools — transforming the way you work and create</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Sanika Shelke", title: "Brand Marketer", company: "" },
              { name: "Saish Jape", title: "AI Film Maker · Bulb Chumka", company: "" },
              { name: "Rahul Wale", title: "Founder · BAAP Academy", company: "" },
              { name: "Sharad Waje", title: "Head of AI Initiatives", company: "" },
            ].map((m, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-glow hover:-translate-y-1 transition">
                <img src={[sanika, saish, rahul, sharad][i]} alt={m.name} className="w-full aspect-square object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-bold">{m.name}</h4>
                  <p className="text-sm text-primary font-medium">{m.title}</p>
                  {m.company && <p className="text-xs text-muted-foreground mt-1">{m.company}</p>}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-16 md:py-24 bg-gradient-soft overflow-hidden">
        <div className="container">
          <p className="text-center text-xs tracking-widest font-semibold text-muted-foreground uppercase opacity-80">HEAR IT FROM THEM</p>
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mt-3">See what's possible here</h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {linkedInPosts.map((post, i) => (
              <LinkedInPostCard key={i} {...post} />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button className="h-12 w-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-primary-soft hover:text-primary transition-colors cursor-pointer group">
              <ChevronLeft className="h-6 w-6 group-active:scale-95" />
            </button>
            <button className="h-12 w-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-primary-soft hover:text-primary transition-colors cursor-pointer group">
              <ChevronRight className="h-6 w-6 group-active:scale-95" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY GROWTHSCHOOL / Trust */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Why BAAP Academy?</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            BAAP Academy is where you become the <span className="text-primary font-bold">Top 1%</span> in your field. We bring the best of Product, Growth, Design, Tech, Data and Business mentors from brands like <span className="text-primary font-bold">Google, Meta, Uber</span> doing the jobs you want to do tomorrow.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 max-w-md mx-auto">
            <div className="rounded-2xl border-2 border-border bg-card p-6 text-center">
              <Star className="h-8 w-8 mx-auto fill-yellow-400 text-yellow-400" />
              <p className="mt-3 text-2xl font-extrabold"><span className="text-3xl">4.7</span><span className="text-base text-muted-foreground">/5</span></p>
              <p className="text-xs text-primary mt-1">Trustpilot Rating</p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-6 text-center">
              <Users className="h-8 w-8 mx-auto text-foreground" />
              <p className="mt-3 text-2xl font-extrabold">10.2M+</p>
              <p className="text-xs text-primary mt-1">Global Learners</p>
            </div>
          </div>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-5 py-3">
            <span className="font-bold">BAAP Academy</span>
            <span className="text-border">|</span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold"><Linkedin className="h-4 w-4" /> Top Startup 2026</span>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="container max-w-2xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
            <span className="text-primary">ChatGPT</span> for Professionals Workshop
          </h2>
          <Card className="bg-gradient-cta text-white p-8 shadow-cta border-0">
            <div className="text-center">
              <p className="text-5xl font-extrabold">₹2599</p>
              <p className="mt-2"><span className="line-through opacity-80">₹5,000</span> <span className="font-bold">(Save 48%)</span></p>
            </div>
            <p className="mt-6 font-semibold">Register now and get our bestselling workshop at 100% that includes:</p>
            <ul className="mt-4 space-y-3">
              {[
                "₹2000 worth of course content on leveraging AI & ChatGPT as a professional",
                "₹5000 in bonuses to help you become an AI-powered professional",
                "₹2300 access pass to a global community of professionals and AI-enthusiasts",
              ].map((f, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button onClick={join} size="lg" className="w-full mt-8 bg-white text-foreground hover:bg-white/90 rounded-full h-14 text-base font-bold">
              Reserve My Seat
            </Button>
            <p className="text-center text-sm mt-4 font-semibold">
              <Flame className="inline h-4 w-4 mr-1" /> Only {seats} seats left
            </p>
          </Card>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10">You Also Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Sparkles, t: "50 Ready Prompts" },
              { icon: Gift, t: "AI Toolkit PDF" },
              { icon: Award, t: "Certificate" },
              { icon: InfinityIcon, t: "Lifetime Community" },
              { icon: PlayCircle, t: "7-Day Replay" },
            ].map((b, i) => (
              <Card key={i} className="p-5 text-center bg-primary-soft border-primary/15 hover:shadow-glow transition">
                <b.icon className="h-10 w-10 text-primary mx-auto" />
                <p className="font-bold mt-3 text-sm">{b.t}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-muted">
        <div className="container max-w-3xl">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "What is ChatGPT, and how can it benefit my business?", a: "ChatGPT is an AI language model that can automate tasks, improve efficiency, and enhance customer engagement across content, support, sales, and operations." },
              { q: "Can I expect hands-on training and practical examples during the workshop?", a: "Yes. Every module includes live demos, exercises, and real workflows you build alongside the mentor." },
              { q: "How can ChatGPT help me save time and resources in my business operations?", a: "By automating writing, research, data analysis, customer replies, and content creation that previously took hours." },
              { q: "What kind of support and resources will be available to me after the workshop?", a: "Lifetime access to our private community, recordings for 7 days, the AI Toolkit PDF, and 30+ ready-to-use prompts." },
              { q: "How can I stay updated on future developments, workshops, and courses?", a: "You'll be added to our learner newsletter and Discord community for first access to new drops." },
              { q: "When does the workshop start?", a: "It runs across two days: 18th & 19th April, 10 AM – 7 PM IST." },
              { q: "Will this be live or pre-recorded?", a: "100% live with the mentor. Replays are available for 7 days." },
              { q: "Is this beginner friendly?", a: "Absolutely — no prior tech or AI experience required." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="bg-card rounded-xl border px-5 shadow-card">
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cta opacity-10" />
        <div className="container relative text-center max-w-3xl">
          <ShieldCheck className="h-12 w-12 mx-auto text-primary-glow" />
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4">Your Career Will Change Faster With AI</h2>
          <p className="mt-4 text-lg opacity-80">Join thousands of professionals learning practical AI skills today.</p>
          <Button onClick={join} size="lg" className="mt-8 bg-gradient-cta shadow-cta animate-pulse-glow text-white rounded-full px-10 h-14">
            Join Now · ₹2599
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-cta flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold">BAAP Academy</span>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
            <a href="#" className="hover:text-foreground">Support</a>
          </nav>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-primary" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5 hover:text-primary" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary" /></a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} BAAP Academy. All rights reserved.</p>
      </footer>

      {/* STICKY BOTTOM CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-primary-soft/95 backdrop-blur border-t-2 border-primary/30 shadow-card">
        <div className="container flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold">₹2599</span>
              <span className="text-sm line-through text-muted-foreground">₹5,000</span>
              <span className="text-sm font-bold text-promo">48% OFF</span>
            </div>
            <p className="text-xs text-muted-foreground truncate">Deadline 17 April · Only {seats} seats left</p>
          </div>
          <Button onClick={join} className="bg-gradient-cta shadow-cta animate-pulse-glow text-white rounded-full px-6 md:px-10 h-12 shrink-0">
            Join Now
          </Button>
        </div>
      </div>

      <RegistrationDialog open={open} onOpenChange={setOpen} />
      <div className="h-20" />
    </div>
  );
};


export default Index;
