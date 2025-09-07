import { useState } from "react";
import {
  GraduationCap,
  Compass,
  Users,
  Heart,
  Calendar,
  BookOpen,
  Shield,
  Mail,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FreshStartLanding() {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <Compass className="w-6 h-6" aria-hidden />,
      title: "Orientation Pathways",
      desc: "Step‑by‑step guides for the first 90 days of high school, tailored for 9th graders.",
    },
    {
      icon: <Users className="w-6 h-6" aria-hidden />,
      title: "Peer & Mentor Connect",
      desc: "Find clubs, join interest groups, and connect with student mentors at your school.",
    },
    {
      icon: <BookOpen className="w-6 h-6" aria-hidden />,
      title: "Study Skills Toolkit",
      desc: "Bite‑size lessons on note‑taking, time management, and test prep that actually stick.",
    },
    {
      icon: <Calendar className="w-6 h-6" aria-hidden />,
      title: "Planner & Milestones",
      desc: "Automatic reminders for key dates—orientation, tryouts, counselor meetings, and more.",
    },
    {
      icon: <Heart className="w-6 h-6" aria-hidden />,
      title: "Well‑Being Check‑ins",
      desc: "Guided reflections, stress‑relief exercises, and quick ways to ask for help.",
    },
    {
      icon: <Shield className="w-6 h-6" aria-hidden />,
      title: "Parent & Teacher View",
      desc: "Resources and dashboards to support each student without micromanaging.",
    },
  ];

  const faqs = [
    {
      q: "Who is Fresh Start for?",
      a: "Primarily incoming 9th‑grade students, plus supportive views for parents, counselors, and teachers.",
    },
    {
      q: "Is it free?",
      a: "Core features are free for students. Schools can purchase optional integrations and analytics.",
    },
    {
      q: "Does it work with our school systems?",
      a: "Roadmap includes integrations with Google Classroom and Canvas; CSV import/export is supported at launch.",
    },
    {
      q: "How is my data protected?",
      a: "We follow FERPA‑aware practices, minimize data collection, and give students control over what’s shared.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-sky-600 text-white">
              <GraduationCap className="w-5 h-5" aria-hidden />
            </div>
            <span className="font-bold tracking-tight text-slate-900">
              Fresh Start
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-sky-700">
              Features
            </a>
            <a href="#students" className="hover:text-sky-700">
              Students
            </a>
            <a href="#parents" className="hover:text-sky-700">
              Parents
            </a>
            <a href="#schools" className="hover:text-sky-700">
              Schools
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Get early access <ChevronRight className="w-4 h-4" aria-hidden />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              A calmer, clearer transition into high school
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Fresh Start helps middle‑to‑high school students build confidence
              with guided pathways, skills micro‑lessons, and a supportive
              network.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-sky-600 text-white font-medium shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                Join the pilot
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-white text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Explore features
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500" aria-live="polite">
              Backed by educators. Designed with students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop"
                alt="Students walking through a school hallway, smiling and talking"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            What students get
          </h2>
          <p className="mt-2 text-slate-600">
            Everything you need for a confident start—no fluff.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-sky-50 text-sky-700 group-hover:bg-sky-100">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900">{f.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section id="students" className="py-12 sm:py-16 bg-sky-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">For Students</h3>
              <ul className="mt-4 space-y-3 text-slate-700 list-disc list-inside">
                <li>Personalized 90‑day onboarding with weekly goals</li>
                <li>Club finder with interest matching</li>
                <li>Short skill lessons with practice prompts</li>
                <li>Anonymous well‑being check‑ins and resources</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div
              id="parents"
              className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                For Parents/Guardians
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Guides to support without hovering, conversation starters, and
                opt‑in progress summaries.
              </p>
            </div>
            <div
              id="schools"
              className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                For Schools
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Plug‑and‑play onboarding curriculum, event templates, and
                privacy‑first analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Roadmap
          </h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Phase 1
              </p>
              <p className="mt-1 font-medium">Pilot (Foundations)</p>
              <p className="mt-2 text-sm text-slate-600">
                Guides, skills toolkit, planner, and check‑ins. CSV import for
                rosters.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Phase 2
              </p>
              <p className="mt-1 font-medium">Community & Mentors</p>
              <p className="mt-2 text-sm text-slate-600">
                Interest groups, mentor matching, and safe messaging with
                moderation.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Phase 3
              </p>
              <p className="mt-1 font-medium">Integrations</p>
              <p className="mt-2 text-sm text-slate-600">
                Google Classroom/Canvas, SIS sync, counselor dashboards.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Be part of the pilot
            </h2>
            <p className="mt-2 text-slate-300">
              Sign up to test Fresh Start with your class, school, or district.
              We’ll reach out with next steps.
            </p>
          </div>
          <form
            aria-label="Pilot sign‑up"
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Thanks! We'll be in touch at ${email}.`);
              setEmail("");
            }}
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="flex-1 rounded-2xl bg-white/10 ring-1 ring-white/20 focus-within:ring-white/40 flex items-center px-3">
              <Mail className="w-5 h-5 text-white/80" aria-hidden />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.org"
                className="w-full bg-transparent px-3 py-3 outline-none placeholder:text-white/60"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-white text-slate-900 font-semibold hover:bg-slate-100"
            >
              Request access{" "}
              <ChevronRight className="w-4 h-4 ml-1" aria-hidden />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none marker:content-none flex items-center justify-between">
                  <span className="font-medium text-slate-900">{f.q}</span>
                  <ChevronRight
                    className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-90"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <div className="p-2 rounded-xl bg-sky-600 text-white">
              <GraduationCap className="w-5 h-5" aria-hidden />
            </div>
            <span className="font-semibold">Fresh Start</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">Helping students thrive</span>
          </div>
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Fresh Start. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
