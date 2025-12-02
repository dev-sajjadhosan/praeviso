import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowBigDownDash, CornerRightDown } from "lucide-react";

export default function ResumeEvaluationSection() {
  return (
    <div className="mt-20 w-11/12 rounded-2xl border bg-secondary/55 backdrop-blur p-11 space-y-10">
        <h3 className="text-2xl">Your Compare Result:</h3>
      {/* ---------------- SUMMARY SCORE GRID ---------------- */}
      <div className="w-full rounded-xl bg-secondary/60 backdrop-blur p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <ScoreCard title="ATS Score" value="78%" />
        <ScoreCard title="Hire Probability" value="62%" />
        <ScoreCard title="Skill Match" value="83%" />
        <ScoreCard title="Completeness" value="71%" />
      </div>

      {/* ---------------- STRENGTHS & WEAKNESSES ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StrengthCard
          title="Strengths"
          badgeColor="bg-green-600"
          items={[
            "Clear skill section",
            "Strong project descriptions",
            "Good use of metrics",
          ]}
        />

        <StrengthCard
          title="Needs Improvement"
          badgeColor="bg-yellow-600"
          items={[
            "Experience lacks measurable results",
            "Missing keyword optimization",
            "Formatting inconsistencies",
          ]}
        />
      </div>

      {/* ---------------- DETAILED BREAKDOWN ---------------- */}
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="experience">
          <AccordionTrigger>Experience Section</AccordionTrigger>
          <AccordionContent>
            <IssueCard
              issue="Descriptions lack measurable results"
              reason="ATS systems prioritize quantifiable impact in job bullets."
              fix="Rewrite bullet points using metrics, tools, and outcomes."
              example="- Improved API response time by 35% by optimizing MongoDB queries"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger>Skill Section</AccordionTrigger>
          <AccordionContent>
            <IssueCard
              issue="Missing key industry terms"
              reason="Reduces keyword match score for targeted roles."
              fix="Add role-specific skills from the job description."
              example="E.g., Redux Toolkit, Prisma ORM, CI/CD, Jest, Docker"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="keywords">
          <AccordionTrigger>Keyword Optimization</AccordionTrigger>
          <AccordionContent>
            <IssueCard
              issue="Low keyword density"
              reason="ATS matches your resume against job description terminology."
              fix="Blend important keywords naturally into bullet points."
              example="Replaced: 'handled frontend' → 'developed React & TypeScript interfaces'"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex items-center justify-end gap-3">
        <Button variant={"secondary"}>
          ReSubmit
          <CornerRightDown />
        </Button>
        <Button>
          Download fix file <ArrowBigDownDash />
        </Button>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
                      REUSABLE COMPONENTS
---------------------------------------------------------- */

function ScoreCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border bg-background/50 backdrop-blur p-7 flex flex-col items-start">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-3xl font-semibold mt-1">{value}</p>
    </div>
  );
}

function StrengthCard({
  title,
  badgeColor,
  items,
}: {
  title: string;
  badgeColor: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border bg-background/40 backdrop-blur p-6 space-y-3">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${badgeColor}`} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function IssueCard({
  issue,
  reason,
  fix,
  example,
}: {
  issue: string;
  reason: string;
  fix: string;
  example: string;
}) {
  return (
    <div className="rounded-lg border bg-background/40 backdrop-blur p-5 space-y-3">
      <div>
        <h4 className="font-semibold">Issue</h4>
        <p className="text-muted-foreground text-sm">{issue}</p>
      </div>

      <div>
        <h4 className="font-semibold">Why it matters</h4>
        <p className="text-muted-foreground text-sm">{reason}</p>
      </div>

      <div>
        <h4 className="font-semibold">How to fix</h4>
        <p className="text-muted-foreground text-sm">{fix}</p>
      </div>

      <div>
        <h4 className="font-semibold">Example</h4>
        <p className="text-sm text-green-600">{example}</p>
      </div>
    </div>
  );
}
