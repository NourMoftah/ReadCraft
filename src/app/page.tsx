"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Braces,
  Check,
  ChevronDown,
  Cloud,
  Github,
  Globe2,
  Layers3,
  Sparkles,
  Terminal,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  { icon: Sparkles, title: "AI Powered", text: "Deep context analysis of your codebase. We don't just list files; we explain the architecture and design decisions behind your project." },
  { icon: Bot, title: "Customizable Styles", text: "Choose from professional, minimal, or creative templates. Add badges, tech-stack icons, and dynamic status charts with one click." },
  { icon: Braces, title: "Real-time Preview", text: "Edit and preview side-by-side with a VS Code-grade markdown engine. What you see is exactly what your GitHub visitors will experience." },
];

const plans = [
  { name: "FREE", price: "$0", period: "/month", perks: ["3 Public Repos / Month", "Standard Templates", "Markdown Export"], action: "GET STARTED" },
  { name: "PRO", price: "$12", period: "/month", perks: ["Unlimited Public & Private Repos", "Custom Brand Templates", "GitHub Action Automation", "AI Image Generation for Headers"], action: "GO PRO", popular: true },
  { name: "ENTERPRISE", price: "Custom", period: "", perks: ["SSO / SAML", "Self-hosted AI Engine", "Dedicated Account Manager"], action: "CONTACT SALES" },
];

const faqs = [
  {
    question: "Is my code safe?",
    answer: "Yes. Your repository is analyzed securely and is only used to generate your documentation. We never publish your source code or share it with third parties.",
  },
  {
    question: "Does it support languages other than JavaScript?",
    answer: "Yes. DevReadme AI supports projects written in popular languages including TypeScript, Python, Java, Go, Rust, Ruby, PHP, and more.",
  },
];

function Mark() {
  return <span className="brand-mark"><Terminal size={13} strokeWidth={2.6} /></span>;
}

export default function Home() {
  const router = useRouter();
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  function openGenerator() { router.push(`/dashboard/generate${repositoryUrl ? `?repository=${encodeURIComponent(repositoryUrl)}` : ""}`); }
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top"><Mark /> <span>ReadCraft AI</span></a>
        <div className="nav-links"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><Link href="/dashboard">Dashboard</Link></div>
        <div className="nav-actions"><Link href="/signin" className="nav-signin">SIGN IN</Link><Button className="nav-button" onClick={() => router.push("/signup")}>GET STARTED</Button></div>
      </nav>

      <section className="hero" id="top">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="hero-content shell">
          <motion.p variants={fadeUp} className="release"><i /> New: v2.0 powered by nour</motion.p>
          <motion.h1 variants={fadeUp}>Generate Professional GitHub <em>READMEs</em><br />with AI</motion.h1>
          <motion.p variants={fadeUp} className="hero-copy">Transform your source code into world-class documentation in seconds. Our AI analyzes<br className="desktop-only" /> your repository structure, dependencies, and logic to craft perfect READMEs.</motion.p>
          <motion.form variants={fadeUp} className="repo-form" onSubmit={(event) => { event.preventDefault(); openGenerator(); }}>
            <Cloud size={13} /><input value={repositoryUrl} onChange={(event) => setRepositoryUrl(event.target.value)} aria-label="GitHub repository URL" placeholder="https://github.com/username/repo" /><Button type="submit">GENERATE README</Button>
          </motion.form>
          <motion.div variants={fadeUp} className="hero-notes"><span>◉&nbsp; NO CREDIT CARD</span><b /> <span>✧&nbsp; INSTANT EXPORT</span></motion.div>
        </motion.div>
      </section>

      <section className="features section" id="features"><div className="shell feature-grid">
        {features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><span className="icon-box"><Icon size={16} /></span><h2>{title}</h2><p>{text}</p></article>)}
      </div></section>

      <section className="process section"><div className="shell process-layout">
        <div className="process-copy"><p className="eyebrow">PROCESS</p><h2>From repo to readme in 3 minutes.</h2>
          <ol>{[["Connect Repository", "Paste your GitHub public URL or link your private organization account securely via OAuth."], ["Configure & Refine", "Select your tone, specify key features, and let our AI generate multiple variations for you to choose from."], ["Export Directly", "Commit the README.md directly to a new branch or copy-paste the raw markdown into your editor."]].map(([title, text], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        </div>
        <div className="code-window"><div className="window-top"><i /><i /><i /><b /></div><code><span># Project Phoenix</span><br /><br />{"> git clone https://github.com/acidra/todolist-resume-NETR-flux.git"}<br />{"> /src/components/architecture.md"}<br /><br /><span># Overview</span><br />A high-performance orchestration engine built in Rust...</code><div className="generating">Generating intelligent summary... <strong>✓</strong></div><div className="analysis"><Check size={12} /> Analysis Complete<br /><small>8 FILES SCANNED</small></div></div>
      </div></section>

      <section className="pricing section" id="pricing"><div className="shell"><div className="section-heading"><h2>Plans for every developer</h2><p>Start for free, scale when you need to.</p></div><div className="plan-grid">{plans.map((plan) => <article className={`plan ${plan.popular ? "plan--popular" : ""}`} key={plan.name}>{plan.popular && <span className="popular">MOST POPULAR</span>}<p className="plan-name">{plan.name}</p><h3>{plan.price}<small>{plan.period}</small></h3><ul>{plan.perks.map((perk) => <li key={perk}><Check size={12} /> {perk}</li>)}</ul><Button variant={plan.popular ? "secondary" : "outline"} onClick={() => router.push(plan.name === "ENTERPRISE" ? "/signup" : "/dashboard")}>{plan.action}</Button></article>)}</div></div></section>

      <section className="faq section" id="faq"><div className="shell narrow"><h2>Frequently Asked Questions</h2><div className="accordions">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <div className={`accordion ${isOpen ? "accordion--open" : ""}`} key={faq.question}><button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{faq.question}</span><ChevronDown size={15} aria-hidden="true" /></button><div className="accordion-answer" id={`faq-answer-${index}`} hidden={!isOpen}><p>{faq.answer}</p></div></div>; })}</div><div className="testimonials"><blockquote>“I used to spend 2 hours writing READMEs. Now I spend 2 minutes refining what DevReadme generates. It’s a game changer for my open source productivity.”<footer><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80" alt="Sarah Chen" /> Sarah Chen <small>DEV AT VERCEL</small></footer></blockquote><blockquote>“The architecture analysis is scary good. It correctly identified our micro-frontend routing logic without any hints. Truly impressive AI implementation.”<footer><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80" alt="Marcus Thorne" /> Marcus Thorne <small>CTO AT FLUXFLOW</small></footer></blockquote></div></div></section>

      <section className="cta-section"><div className="shell"><div className="cta"><h2>Ready to automate your docs?</h2><p>Join 15,000+ developers documenting projects with intelligence.</p><div><Button onClick={() => router.push("/signup")}> SIGN UP FOR FREE</Button><Button variant="outline" onClick={openGenerator}>VIEW EXAMPLES <ArrowRight size={12} /></Button></div></div></div></section>

      <footer className="footer shell"><span><Mark /> DevReadme AI © 2024</span><div><a href="#faq">Privacy Policy</a><a href="#faq">Terms of Service</a></div></footer>
    </main>
  );
}
