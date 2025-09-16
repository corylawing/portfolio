import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase, Layers, Rocket, Linkedin, Mail, Clock, Code2, Wrench, Workflow,
  Map, Gauge, ShieldCheck, LineChart, Box, Building2, Cpu, GitBranch, Globe2, Sparkles
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

const brand = { primary: "#00A3AD", dark: "#0B0B0C" };

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 md:px-10 ${className}`}>{children}</section>
);

const highlights = [
  { icon: <LineChart className="h-5 w-5" />, title: "RevOps Leadership",
    body: "Owned global GTM initiatives across Sales, Marketing, Success & Finance. Built data-driven operating cadence tied to pipeline, conversion, and retention KPIs." },
  { icon: <Code2 className="h-5 w-5" />, title: "Senior Salesforce Architect",
    body: "12+ years building scalable Salesforce ecosystems (Sales Cloud, Service, CPQ, Experience, Account Engagement). Apex, LWC, Flows at enterprise scale." },
  { icon: <Rocket className="h-5 w-5" />, title: "Outcome-First Delivery",
    body: "Measurable lift in speed-to-revenue, data quality, and field execution. Strategy + hands-on build." },
];

const capabilities = [
  { icon: <Workflow className="h-5 w-5" />, title: "RevOps System Design", items: ["ICP & segmentation", "Lifecycle & SLAs", "Territories", "Forecast", "Playbooks"] },
  { icon: <Wrench className="h-5 w-5" />, title: "Salesforce Engineering", items: ["Apex / Triggers", "LWC", "Flows", "SOQL", "Metadata/API"] },
  { icon: <Map className="h-5 w-5" />, title: "DM Maps-style LWC", items: ["Routing & clustering", "Geo-filters", "Route templates", "Usage analytics"] },
  { icon: <Gauge className="h-5 w-5" />, title: "Performance & Scale", items: ["Governor-safe patterns", "Caching", "Bulkification", "Async"] },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Governance", items: ["Change control", "Field-level security", "Auditability", "SOX-friendly"] },
  { icon: <Sparkles className="h-5 w-5" />, title: "AI & Automation", items: ["Prompt ops", "Slack + SF", "QuickSight embeds", "Docs & insights"] },
];

const caseStudies = [
  { tag: "RevOps + LWC", title: "Field Routing Platform (DM Maps LWC)",
    bullets: [
      "Custom LWC with account clustering, geo-filters, and route optimization",
      "Saved reps hours/week; improved visit coverage and territory execution",
      "Tracker objects for route, stops, and adoption to prove ROI to leadership"
    ],
    stack: ["LWC", "Apex", "Custom Objects", "Maps API", "SOQL", "FLS/CRUD"], icon: <Globe2 className="h-5 w-5" /> },
  { tag: "Sales → Cash", title: "E-Signature + Payments Flow",
    bullets: [
      "Order forms auto-populated from Opportunity products/pricing",
      "Signed PDF stored on Account; Closed-Won automation; billing request created",
      "Phase 2 blueprint: price verification, invoice, payment links"
    ],
    stack: ["GetAccept/DocuSign", "Stripe", "Apex", "Flow", "Experience"], icon: <GitBranch className="h-5 w-5" /> },
  { tag: "Analytics", title: "Embedded QuickSight Dashboards in Salesforce",
    bullets: [
      "Dynamic filtering by Account/Contact IDs and device identifiers",
      "Revenue funnels + product usage surfaced to AEs in-context",
      "Least-privilege, row-level security"
    ],
    stack: ["QuickSight", "SFDC", "Apex", "JWT", "LWC"], icon: <Box className="h-5 w-5" /> },
];

const tech = [
  "Sales Cloud","Service Cloud","Account Engagement (Pardot)","Experience Cloud",
  "Apex","LWC","Flow","Platform Events","OAuth/JWT","CPQ",
  "Slack + Salesforce","AWS QuickSight","Stripe","NetSuite","REST/SOAP",
];

const logos = [{name:"Salesforce"},{name:"Slack"},{name:"AWS"},{name:"Stripe"},{name:"NetSuite"}];

export default function App() {
  return (
    <div className="min-h-screen text-white" style={{ background: brand.dark }}>
      {/* BG glow */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0" style={{
          background: `radial-gradient(1200px 600px at 10% -20%, rgba(0,163,173,0.35), transparent 40%),
                       radial-gradient(800px 400px at 90% -10%, rgba(0,163,173,0.25), transparent 45%),
                       linear-gradient(180deg, rgba(255,255,255,0.03), transparent)` }} />
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl" style={{ background: brand.primary }} />
            <span className="font-semibold tracking-tight">Cory Lawing</span>
            <Badge className="ml-3">RevOps × Salesforce</Badge>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href="#work" className="px-3 py-2 text-sm hover:text-cyan-300">Work</a>
            <a href="#capabilities" className="px-3 py-2 text-sm hover:text-cyan-300">Capabilities</a>
            <a href="#stack" className="px-3 py-2 text-sm hover:text-cyan-300">Stack</a>
            <a href="#contact" className="px-3 py-2 text-sm hover:text-cyan-300">Contact</a>
            <Button href="#contact" className="ml-2 border-transparent" style={{ background: brand.primary }}>
              <Sparkles className="mr-2 h-4 w-4" />Start a Project
            </Button>
          </div>
        </Section>
      </nav>

      {/* HERO */}
      <header>
        <Section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              <Badge>RevOps Leader • Senior Salesforce Architect</Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Scale revenue <span style={{ color: brand.primary }}>faster</span> with systems that actually ship.
              </h1>
              <p className="text-white/80 max-w-xl">
                I build the connective tissue between strategy and execution: Salesforce architecture, LWCs, automation, analytics, and operating cadence that drives pipeline, conversion, and retention.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#work" className="bg-white text-black border-white hover:bg-white/90">
                  <Briefcase className="mr-2 h-4 w-4" />See Case Studies
                </Button>
                <Button href="#contact" className="border-white/30 hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />Book a Chat
                </Button>
                <Button href="https://www.linkedin.com/in/corylawing" target="_blank" rel="noreferrer" className="border-white/30 hover:bg-white/10">
                  <Linkedin className="mr-2 h-4 w-4" />LinkedIn
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                {logos.map((l) => (
                  <div key={l.name} className="text-xs uppercase tracking-widest text-white/60 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full" style={{ background: brand.primary }} /> {l.name}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show" className="md:justify-self-end">
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Layers className="h-5 w-5" /> Snapshot</CardTitle>
                  <CardDescription>Creds & focus areas at a glance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {highlights.map((h) => (
                    <div key={h.title} className="flex gap-3">
                      <div className="mt-1" style={{ color: brand.primary }}>{h.icon}</div>
                      <div>
                        <div className="font-semibold">{h.title}</div>
                        <p className="text-white/70 text-sm">{h.body}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Badge>12+ years • US & EU time zones • Hands-on</Badge>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </Section>
      </header>

      {/* CASE STUDIES */}
      <Section id="work" className="py-14 md:py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Selected Work</h2>
          <Badge>Outcome-driven</Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {caseStudies.map((cs) => (
            <motion.div key={cs.title} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge>{cs.tag}</Badge>
                    <div style={{ color: brand.primary }}>{cs.icon}</div>
                  </div>
                  <CardTitle className="mt-2">{cs.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                    {cs.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cs.stack.map((s) => <Badge key={s} className="border-white/20 bg-transparent">{s}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full border-white/30 hover:bg-white/10">Request a deep dive</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section id="capabilities" className="py-14 md:py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Capabilities</h2>
          <Badge>Strategy + Build</Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {capabilities.map((cap) => (
            <Card key={cap.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">{cap.icon}{cap.title}</CardTitle>
                <CardDescription>What you can plug me into</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {cap.items.map((i) => (
                  <Badge key={i}>{i}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* METRICS */}
      <Section className="py-6">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "12+", k: "Years in SFDC" },
            { n: "200+", k: "Flows & LWCs shipped" },
            { n: "<1 wk", k: "Time to impact" },
            { n: "Global", k: "US & EU time zones" },
          ].map((m) => (
            <Card key={m.k} className="text-center">
              <CardContent className="py-8">
                <div className="text-3xl font-extrabold" style={{ color: brand.primary }}>{m.n}</div>
                <div className="text-white/70 mt-1">{m.k}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* STACK */}
      <Section id="stack" className="py-14 md:py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5" /> Platforms & Clouds</CardTitle>
              <CardDescription>Where I build and orchestrate</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {tech.map((t) => <Badge key={t} className="border-white/20 bg-transparent text-white/80">{t}</Badge>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Workflow className="h-5 w-5" /> Patterns I Use</CardTitle>
              <CardDescription>Built to scale & be audited</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 text-sm text-white/80">
              {[
                "Bulkified Apex & SOQL","Platform Events & Async","Layered Flow + LWC","Least-privilege security",
                "Config over code (when right)","Observability & logs","Feature toggles & packaging","Testing & change control",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: brand.primary }}></div>{p}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Start a Project</h2>
            <p className="text-white/75 mt-3 max-w-xl">
              Need high-impact help without adding headcount? I drive measurable outcomes in weeks, not quarters.
            </p>
            <div className="mt-6 space-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-white/60" /> US & EU time zones</div>
              <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-white/60" /> B2B, Health-tech, SaaS focus</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-white/60" /> Compliance-friendly delivery</div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" /> Tell me about your needs</CardTitle>
              <CardDescription>I’ll reply with next steps</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()}>
                <div>
                  <label className="text-sm text-white/70">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Email</label>
                  <Input type="email" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="text-sm text-white/70">What do you need help with?</label>
                  <Textarea placeholder="Briefly describe the project, goals, timeline" className="min-h-[120px]" />
                </div>
                <Button className="bg-white text-black border-white hover:bg-white/90">Send inquiry</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <Section className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} Cory Lawing — RevOps × Salesforce</div>
          <div className="flex items-center gap-3">
            <Button href="mailto:cory@example.com" className="border-white/30 hover:bg-white/10"><Mail className="mr-2 h-4 w-4" />Email</Button>
            <Button href="https://www.linkedin.com/in/corylawing" target="_blank" rel="noreferrer" className="border-white/30 hover:bg-white/10"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</Button>
          </div>
        </Section>
      </footer>
    </div>
  );
}