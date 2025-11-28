import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

export default function WhyRecomandedDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button size={"sm"}>
            Why Recomanded <ChevronRight />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl! h-10/12 bg-secondary/90 backdrop-blur-lg! flex flex-col items-center justify-center">
          <h3 className="text-3xl">Why Recomanded ??</h3>
        </DialogContent>
      </Dialog>
    </>
  );
}
