import { Button } from "@/components/ui/button";
import { CornerLeftUp } from "lucide-react";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center w-full h-full relative">
        <h3 className="text-[9rem] font-family-fira!">404</h3>
        <h1 className="text-3xl font-normal">Page not Found</h1>
        <p className="text-center text-lg mb-3">
          The page you are looking for does not exist or broken.
        </p>
        <Button>
          <CornerLeftUp /> Go Back
        </Button>
      </div>
    </>
  );
}
