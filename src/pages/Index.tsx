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
  ShieldCheck, Gift, Infinity as InfinityIcon, PlayCircle, Flame, Menu
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
import l1 from "@/assets/l1.png";
import l2 from "@/assets/l2.png";
import l3 from "@/assets/l3.png";
import l4 from "@/assets/l4.png";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import t4 from "@/assets/t4.jpg";
import certificate from "@/assets/certificate.png";
import { LearnerCard } from "@/components/LearnerCard";
import { LinkedInPostCard } from "@/components/LinkedInPostCard";

const logos = {
  spotify: <div className="flex items-center gap-1 text-[#1DB954]"><div className="w-4 h-4 rounded-full bg-[#1DB954] flex items-center justify-center"><div className="w-2 h-0.5 bg-white rotate-45"></div></div>Spotify</div>,
  google: <div className="flex items-center gap-1"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></div>,
  meta: <div className="text-[#0668E1] font-bold">Meta</div>,
  amazon: <div className="font-extrabold italic text-[#FF9900]">amazon</div>,
  canva: <div className="text-[#00C4CC] font-bold">Canva</div>,
  salesforce: <div className="text-[#00A1E0] font-bold italic">salesforce</div>,
  microsoft: <div className="flex gap-0.5"><div className="grid grid-cols-2 gap-0.5"><div className="w-1.5 h-1.5 bg-[#F25022]"></div><div className="w-1.5 h-1.5 bg-[#7FBA00]"></div><div className="w-1.5 h-1.5 bg-[#00A1F1]"></div><div className="w-1.5 h-1.5 bg-[#FFB900]"></div></div>Microsoft</div>
};

const learnerData = [
  { name: "John", image: l1, logo: logos.spotify },
  { name: "Sarah", image: l2, logo: logos.google },
  { name: "Mike", image: l3, logo: logos.meta },
  { name: "Elena", image: l4, logo: logos.amazon },
  { name: "Alex", image: t1, logo: logos.canva },
  { name: "Priya", image: t2, logo: logos.salesforce },
  { name: "David", image: t3, logo: logos.microsoft },
  { name: "Emma", image: t4, logo: logos.google },
  { name: "Chris", image: l1, logo: logos.meta },
  { name: "Anita", image: l2, logo: logos.spotify },
];

const linkedInPosts = [
  {
    name: "Tammy Norfolk CHRL",
    avatar: t1,
    connectionLevel: "2nd+",
    headline: "Strategic Learning and Development Leader | Talent...",
    timestamp: "1w",
    content: "I recently participated in a Generative AI workshop offered by AI Mastery, focusing on how ChatGPT integrates with other GPT applications. This session provided a solid introduction to the capabilities of Generative AI, extending beyond simple Q&A interactions to include creating custom GPT models.\n\nA key insight for me was seeing the diverse applications of these technologies and understanding their potential beyond simple text generation. The workshop used practical examples to demonstrate how Generative AI can be used in various contexts.",
    hashtags: ["GenerativeAI", "AI", "ChatGPT", "Technology", "Learning", "AIMastery"],
    image: certificate,
    likes: 24,
    comments: 1
  },
  {
    name: "Alfredo Garcia Quevedo",
    avatar: t2,
    connectionLevel: "3rd+",
    headline: "Encargado de Costos en Empacadora del Golfo SA d...",
    timestamp: "2w",
    content: "Just wrapped up the Generative AI workshop and had to share my thoughts!\n\nRecently attended the Generative AI workshop, and it was an incredible experience!\nThe insights gained and hands-on learning were beyond valuable. Big thanks to Vaibhav and the AI Mastery team for organizing such an insightful event.\n\nHighlights:\n- In-depth discussions on the latest trends in Generative AI.\n- Practical sessions that demystified complex concepts.\n- Engaging Q&A sessions that added immense value.",
    hashtags: ["GenerativeAI", "AI Workshop", "LearningExperience"],
    image: certificate,
    likes: 42,
    comments: 5
  },
  {
    name: "Jason Sequeira",
    avatar: t3,
    connectionLevel: "2nd",
    headline: "Content Writer | Copywriter | SEO | Content Strategy...",
    timestamp: "4d",
    content: "AI Mastery's mind blowing workshop! It was amazing to know about ChatGPT & Generative AI. Vaibhav explains very well, that it really blew my mind.\n\nI think more than just the content what I really loved about Vaibhav is his passion to help students, a right mentor can drive you towards your goal.",
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
  { name: "ChatGPT", logo: <div className="flex items-center gap-2 font-bold text-[#10A37F] font-mono"><Sparkles className="h-5 w-5 fill-[#10A37F] text-[#10A37F]"/> ChatGPT</div> },
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
              <Star className="h-4 w-4 fill-current" /> Flat 90% Off
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
            <span className="font-extrabold text-xl tracking-tight">AI Mastery</span>
            <Badge variant="secondary" className="ml-2 hidden lg:flex items-center gap-1.5 bg-secondary/50 text-[10px] py-0 px-2 border-none font-bold">
              <TrendingUp className="h-3 w-3" /> Top Workshop 2026
            </Badge>
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
                  <SheetTitle className="text-left font-extrabold text-xl">AI Mastery</SheetTitle>
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
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/20 text-sm font-semibold text-primary">
              <Flame className="h-4 w-4" /> Live 2-Day AI Workshop
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-up">
              Master Generative AI <br />
              <span className="text-gradient-primary">& Become Top 1%</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-up delay-100 px-4">
              Don't get left behind. Learn Chat GPT, Midjourney, and 25+ AI tools to automate your work & boost your productivity by 10x.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge icon={<Calendar className="h-4 w-4" />} text="18th April · Saturday" dark />
              <Badge icon={<Clock className="h-4 w-4" />} text="10 AM – 7 PM IST" dark />
              <Badge icon={<Calendar className="h-4 w-4" />} text="19th April · Sunday" dark />
              <Badge icon={<Clock className="h-4 w-4" />} text="10 AM – 7 PM IST" dark />
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
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
                Join Now · ₹199
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6 h-14 text-base border-2">
                <Play className="mr-2 h-4 w-4" /> Watch Preview
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-cta blur-3xl opacity-20 rounded-full" />
            <div className="relative rounded-3xl overflow-hidden shadow-card bg-card">
              <img src={heroImg} alt="AI workshop mentor teaching ChatGPT and AI tools" className="w-full h-auto" width={1280} height={896} />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="h-20 w-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-cta hover:scale-110 transition">
                  <Play className="h-8 w-8 text-primary ml-1 fill-primary" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-semibold text-sm">Vaibhav Sharma</p>
                <p className="text-white/80 text-xs">Founder · AI Mastery · Ex-Uber</p>
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
            Join who have successfully completed the program to become an AI-powered professional <span className="text-gradient-primary">2 Million+ Global Learners</span>
          </h2>
          <div className="mt-12 space-y-6 overflow-hidden">
            {/* Row 1 */}
            <div className="flex animate-marquee whitespace-nowrap gap-4">
              {[...learnerData, ...learnerData].map((learner, i) => (
                <LearnerCard key={i} name={learner.name} image={learner.image} companyLogo={learner.logo} />
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-4">
              {[...learnerData, ...learnerData].map((learner, i) => (
                <LearnerCard key={`r2-${i}`} name={learner.name} image={learner.image} companyLogo={learner.logo} />
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-cta p-6 text-center text-white shadow-cta">
            <p className="font-bold tracking-wide mb-3">Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-xl font-bold opacity-90">
              <span>yahoo!</span><span className="italic">Entrepreneur</span><span>TED<sup className="text-sm">x</sup></span><span className="font-serif">Forbes</span><span className="italic">The Statesman</span><span>BuzzFeed</span>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 md:py-24 bg-gradient-soft overflow-hidden">
        <div className="container">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-16">Learn 25+ AI Tools</h2>
          
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

      {/* CURRICULUM */}
      <section id="curriculum" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">
            Here's What You'll Learn in the<br />
            <span className="text-gradient-primary">2-Day AI Mastermind</span>
          </h2>
          <Accordion type="single" collapsible className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-0">
            {curriculumData.map((c, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="group border-0">
                <Card className="overflow-hidden bg-primary-soft border-primary/15 hover:shadow-glow transition-all duration-300">
                  <AccordionTrigger className="p-5 hover:no-underline [&[data-state=open]>div>div]:scale-110">
                    <div className="flex items-start gap-4 text-left">
                      <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 transition-transform duration-300">
                        <c.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-foreground leading-snug pt-1 pr-4">{c.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <ul className="space-y-3">
                      {c.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-foreground/80 leading-relaxed">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bonuses */}
          <div className="mt-16">
            <h3 className="text-center text-2xl md:text-3xl font-bold">
              And Also Enjoy <span className="text-gradient-primary">Bonuses Worth ₹5000 for FREE!</span>
            </h3>
            <div className="mt-8 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {[
                "List of Gold-Standard and Hidden Prompts for GPT-4",
                "Copy-Paste Templates for All-in-One AI Tools like Simplified",
                "Step-by-Step Method to Code a Website with 0 prior tech knowledge",
                "Create AI-generated personas that give you support of 10 humans using Synthesia",
              ].map((b, i) => (
                <div key={i} className="rounded-2xl bg-secondary text-secondary-foreground p-5 flex gap-4 items-start shadow-card">
                  <span className="text-3xl font-extrabold opacity-70">{i + 1}</span>
                  <p className="font-semibold leading-snug pt-1">{b}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button onClick={join} size="lg" className="bg-gradient-cta shadow-cta animate-pulse-glow text-white rounded-full px-10 h-14">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">Why Join This Workshop</h2>
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
              { name: "Raghuveer Nishthala", title: "Brand Marketer", company: "Uber" },
              { name: "Shantanu Tungare", title: "AI Film Maker · Bulb Chumka", company: "" },
              { name: "Vaibhav Sharma", title: "Founder · AI Mastery", company: "" },
              { name: "KVS Dileep", title: "Head of AI Initiatives", company: "" },
            ].map((m, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-glow hover:-translate-y-1 transition">
                <img src={[mentorImg, t2, mentorImg, t4][i]} alt={m.name} className="w-full aspect-square object-cover" loading="lazy" />
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
          <h2 className="text-3xl md:text-4xl font-extrabold">Why AI Mastery?</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            AI Mastery is where you become the <span className="text-primary font-bold">Top 1%</span> in your field. We bring the best of Product, Growth, Design, Tech, Data and Business mentors from brands like <span className="text-primary font-bold">Google, Meta, Uber</span> doing the jobs you want to do tomorrow.
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
            <span className="font-bold">AI Mastery</span>
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
              <p className="text-5xl font-extrabold">₹199</p>
              <p className="mt-2"><span className="line-through opacity-80">₹1,999</span> <span className="font-bold">(Save 90%)</span></p>
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
              { q: "What kind of support and resources will be available to me after the workshop?", a: "Lifetime access to our private community, recordings for 7 days, the AI Toolkit PDF, and 50+ ready-to-use prompts." },
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
            Join Now · ₹199
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
            <span className="font-bold">AI Mastery</span>
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
        <p className="text-center text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} AI Mastery. All rights reserved.</p>
      </footer>

      {/* STICKY BOTTOM CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-primary-soft/95 backdrop-blur border-t-2 border-primary/30 shadow-card">
        <div className="container flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold">₹199</span>
              <span className="text-sm line-through text-muted-foreground">₹1,999</span>
              <span className="text-sm font-bold text-promo">90% OFF</span>
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

const Badge = ({ icon, text, dark }: { icon: React.ReactNode; text: string; dark?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold ${dark ? "bg-secondary text-secondary-foreground" : "bg-primary-soft text-primary"}`}>
    {icon} {text}
  </div>
);

export default Index;
