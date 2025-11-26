import Footer from "@/components/custom/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  AtSign,
  Construction,
  Heart,
  PlayCircle,
  Send,
  Zap,
} from "lucide-react";

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

        <Card className="w-xl p-10 mt-28">
          <CardContent className="p-0 flex flex-col items-center justify-center">
            <Construction size={55} />
            <h3 className="text-xl">We are now working on it.</h3>
            <p className="text-md mb-3">Please come back later.</p>
            <Button>
              <AtSign /> Notify via G-mail
            </Button>
          </CardContent>
        </Card>
        <Footer />
      </div>
    </>
  );
}
