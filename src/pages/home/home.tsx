import Footer from "@/components/custom/footer";
import TooltipBtn from "@/components/custom/tooltip-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  AtSign,
  BellRing,
  CheckCircle2,
  File,
  FileText,
  MailCheck,
  Paperclip,
  Play,
  PlayCircle,
  ScanLine,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  Wand2,
  Zap,
} from "lucide-react";

const whatDoes = [
  {
    title: "Resume Analysis",
    icon: FileText,
    description:
      "Get ATS insights, keyword optimization, and actionable scoring to boost your chances.",
  },
  {
    title: "Cover Letters & Emails",
    icon: MailCheck,
    description:
      "Improve tone, clarity, and structure for professional communication.",
  },
  {
    title: "Rewrite Suggestions",
    icon: Wand2,
    description:
      "AI-powered rewrites that make every sentence sharper, clearer, and more impactful.",
  },
  {
    title: "Privacy-First",
    icon: ShieldCheck,
    description:
      "Your documents stay local and secure. No data selling, no tracking — ever.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <div className="w-full h-full flex gap-5 flex-col items-center justify-center mt-36">
        <section className="max-w-3xl mx-auto flex flex-col items-center justify-center">
          <Badge className="bg-secondary/55 text-secondary-foreground px-11 py-2 tracking-wider border flex items-center gap-2 rounded-full">
            <Send className="w-5 h-5 animate-pulse" /> Designed to help you get
            hired!
          </Badge>

          <h1 className="text-7xl text-center font-normal mt-9">
            Upgrade Your
            <span className="italic font-semibold text-orange-400">
              Career Documents
            </span>{" "}
            with AI
          </h1>
          <h3 className="text-lg mt-5 text-center max-w-2xl font-light tracking-wide">
            Upload your resume, cover letter, or emails — Praeviso analyzes,
            optimizes, and enhances them automatically. Just focus on your
            goals; we handle the rest. The smarter, faster, privacy-first way to
            get noticed by top employers.
          </h3>
          <div className="mt-7 flex items-center gap-3">
            <Button variant={"secondary"}>
              {" "}
              Analyze My Resume <Zap />
            </Button>
            <Button variant={"ghost"}>
              See a Demo <PlayCircle />
            </Button>
          </div>
        </section>
        {/* ------------------------------------------------- */}
        <section className="w-full mt-32 max-w-11/12 mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold tracking-tight">
              What Praeviso Does For You ?
            </h2>
            <p className="text-muted-foreground mt-1 max-w-2xl mx-auto">
              Designed to improve your career documents with precision, speed,
              and total privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {/* Resume Analysis */}
            {whatDoes.map((l, i) => (
              <Card
                key={i}
                className="shadow-sm border text-center items-center gap-0"
              >
                <CardHeader className="w-full">
                  <l.icon
                    className="w-10 h-10 text-orange-500 mx-auto"
                    strokeWidth={1.2}
                  />
                  <CardTitle className="text-xl font-normal mt-3">
                    {l.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-1! pt-0! text-sm text-muted-foreground tracking-wide w-3/4 ">
                  {l.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* --------------------------------------- */}
        <section className="w-full mt-36 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold tracking-tight">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              A simple, fast, and privacy-first workflow that helps you improve
              your career documents effortlessly.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Upload className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mt-4">1. Upload</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Upload your resume, cover letter, or email draft in seconds.
              </p>
            </div>

            {/* Divider for desktop */}
            <div className="hidden md:block w-14 h-px bg-primary"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center">
                <ScanLine className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mt-4">2. AI Analysis</h3>
              <p className="text-sm text-muted-foreground mt-2">
                The system reviews structure, tone, keywords, and ATS alignment.
              </p>
            </div>

            {/* Divider for desktop */}
            <div className="hidden md:block w-14 h-px bg-primary"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center">
                <CheckCircle2 className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mt-4">3. Improve</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Get clear insights and rewritten suggestions you can apply
                instantly.
              </p>
            </div>
          </div>
        </section>
        {/* ------------------------------------- */}
        <section className="w-full mt-36 max-w-11/12 mx-auto px-4">
          <div className="text-center mb-12 w-full">
            <h2 className="text-4xl font-semibold tracking-tight">
              See It in Action
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Praeviso instantly transforms weak, unstructured writing into
              polished, professional content — before you even upload your own
              document.
            </p>
            <div className="flex items-center justify-center gap-3 w-full mt-5">
              <Button variant={"secondary"}>
                <Upload />
                Upload Resume
              </Button>
              {/* <Button size={"sm"}>Demo Video </Button> */}
            </div>
          </div>

          <div className="bg-secondary/40 rounded-2xl p-8 border shadow-sm">
            {/* Title */}
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-orange-500" />
              <h3 className="text-xl font-semibold">AI Rewrite Preview</h3>
            </div>

            <div className="flex flex-col gap-14">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="bg-background border rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    Before (Your Original Text)
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4 text-sm leading-relaxed">
                    • I worked on some tasks in my previous job. • I know how to
                    collaborate with teams. • I’m familiar with web development.
                  </div>
                </div>

                {/* After */}
                <div className="bg-background border rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    After (AI Optimized Rewrite)
                  </p>
                  <div className="bg-orange-500/10 rounded-lg p-4 text-sm leading-relaxed">
                    • Led multiple project tasks with measurable impact on
                    delivery timelines. • Collaborated cross-functionally with
                    engineering and design teams. • Applied modern web
                    technologies to build responsive, high-quality features.
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="bg-background border rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    Before (Your Original Text)
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4 text-sm leading-relaxed">
                    • I worked on some tasks in my previous job. • I know how to
                    collaborate with teams. • I’m familiar with web development.
                  </div>
                </div>

                {/* After */}
                <div className="bg-background border rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    After (AI Optimized Rewrite)
                  </p>
                  <div className="bg-orange-500/10 rounded-lg p-4 text-sm leading-relaxed">
                    • Led multiple project tasks with measurable impact on
                    delivery timelines. • Collaborated cross-functionally with
                    engineering and design teams. • Applied modern web
                    technologies to build responsive, high-quality features.
                  </div>
                </div>
              </div>
            </div>
            {/* Before / After Grid */}
          </div>
        </section>
        {/* ---------------------------------- */}
        <section className="w-full mt-36 max-w-11/12 mx-auto">
          <div className="flex flex-col items-center gap-5">
            <h3 className="text-4xl">Use Praeviso To</h3>
            <div className="flex items-center justify-center gap-3 bg-secondary/55 px-5 py-4 rounded-2xl">
              <Button className="px-11" variant={"secondary"}>
                <File /> Resume
              </Button>
              <Button className="px-11" variant={"ghost"}>
                <AtSign /> Email
              </Button>
              <Button className="px-11" variant={"ghost"}>
                <Paperclip /> Cover Letter
              </Button>
            </div>
          </div>
          <div className="mt-9 bg-secondary/55 border flex items-center justify-center w-full h-140 rounded-2xl">
            <TooltipBtn icon={Play} label="Play" variant="default" />
          </div>
        </section>
        {/* ---------------------------------- */}
        <section className="w-11/12 rounded-2xl mt-32 py-20 bg-secondary/40 border">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-4xl font-semibold tracking-tight">
              Ready to Improve Your Resume?
            </h2>

            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Let Praeviso analyze and upgrade your career documents with
              precision. Save time, reduce stress, and present the strongest
              version of yourself to employers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="px-7 py-5 text-base">
                <Zap />
                Analyze My Resume
              </Button>

              <Button variant="secondary" className="px-7 py-5 text-base">
                <BellRing />
                Notify Me
              </Button>
            </div>
          </div>
        </section>
        {/* <Card className="w-xl p-10 mt-28">
          <CardContent className="p-0 flex flex-col items-center justify-center">
            <Construction size={55} />
            <h3 className="text-xl">We are now working on it.</h3>
            <p className="text-md mb-3">Please come back later.</p>
            <Button>
              <AtSign /> Notify via G-mail
            </Button>
          </CardContent>
        </Card> */}
        <Footer />
      </div>
    </>
  );
}
