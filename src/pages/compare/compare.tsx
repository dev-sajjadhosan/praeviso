import Footer from "@/components/custom/footer";
import TabBar from "@/components/custom/tab-bar";
import { Button } from "@/components/ui/button";
import { BringToFront, Download } from "lucide-react";
import ResumeEvaluationSection from "./components/compare-result";

export default function ComparePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="p-11 bg-secondary/55 rounded-2xl flex flex-col items-center w-11/12 h-72 justify-center mt-14">
          <h3 className="text-5xl">Compare</h3>
          <p className="mt-1 text-muted-foreground">
            Try to compare your old resume with industrial new resume
          </p>
        </div>
        <div className="mt-20 w-11/12 flex flex-col items-center gap-10">
          <TabBar />
          <div className="w-full h-120 border rounded-2xl flex items-center justify-between gap-5 p-11">
            <div className="p-5 bg-secondary rounded-2xl h-full w-full flex flex-col items-center justify-center ">
              <Button>
                <Download />
              </Button>
              <p className="mt-1">Upload Your Resume</p>
            </div>
            <div className="p-5 bg-secondary rounded-2xl h-full w-full flex flex-col items-center justify-center">
              <h3 className="text-2xl">ATS Resume</h3>
            </div>
          </div>
          <Button>
            <BringToFront />
            Compare Your Resume
          </Button>
        </div>
       <ResumeEvaluationSection/>
      </div>
      <Footer />
    </>
  );
}
