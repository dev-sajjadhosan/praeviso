import TooltipBtn from "@/components/custom/tooltip-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUpRight, ChevronDown, ChevronRight, Share2 } from "lucide-react";

export default function WhyRecomandedDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button size={"sm"}>
            Why Recomanded <ChevronRight />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl! h-8/12 bg-secondary/90 backdrop-blur-lg! border-0 flex flex-col gap-1">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl font-normal">Template 01</h2>
            <div className="flex items-center gap-2 border px-5 py-1.5 rounded-full">
              <Avatar className="w-6 h-6 text-xs! border">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-sm font-medium">Jony Deo</h3>
              <TooltipBtn size={"icon-sm"} icon={ChevronDown} label="Options" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            This template is recommended because it has a clean and modern
            design that is easy to read and navigate. It also includes sections
            for all the important information that employers look for in a
            resume, such as skills, experience, and education. Additionally,
            this template is fully customizable, allowing you to tailor it to
            your specific needs and preferences.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            fugit ad similique ipsa vitae adipisci alias, error laboriosam
            provident repellendus!
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Clean and modern design that stands out to recruiters</li>
            <li>Easy to read layout that highlights key qualifications</li>
            <li>Includes all essential sections employers look for</li>
            <li>Fully customizable to match your personal brand</li>
            <li>Professional appearance increases callback rates</li>
          </ul>
          <div className="mt-5 flex items-center justify-end gap-2 w-full">
            <Button size={"sm"} className="group">
              Try it
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:rotate-45 transition-all duration-100" />
            </Button>
            <Button size={"sm"} variant={"outline"} className="group">
              Share
              <Share2 className="group-hover:translate-x-1 group-hover:rotate-45 transition-all duration-100" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
