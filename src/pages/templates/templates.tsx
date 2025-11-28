import TooltipBtn from "@/components/custom/tooltip-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  ScanText,
  Search,
  Share2,
} from "lucide-react";
import WhyRecomandedDialog from "./components/why-recomanded-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/custom/footer";

export default function TemplatesPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center gap-1 mt-20 max-w-3xl">
          <h1 className="text-4xl font-bold">Take's Templates</h1>
          <p className="text-lg text-center text-muted-foreground">
            Serach for your favorite templates here. We try to provide the best
            and most usedul and trending templates for you. So, if you have any
            suggestions, please feel free to reach out to us.
          </p>
          <div className="mt-5 bg-secondary/55 border px-4 py-3 rounded-xl flex items-center gap-3 w-2xl">
            <Input
              placeholder="Search Templates name here..."
              className="bg-transparent! border-0 text-[16px]! tracking-wide"
            />
            <Button variant={"secondary"}>
              <Search /> Search
            </Button>
            <TooltipBtn icon={ScanText} label="Scan Resume" />
          </div>
        </div>
        {/* ---------------------- */}
        <div className="w-full flex flex-col gap-5 mt-14">
          <Separator />
          <div className="flex items-center justify-between w-full my-3">
            <div className=""></div>
            <div className="flex items-center gap-2">
              <Select defaultValue="resume">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Templates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="resume">Resume</SelectItem>
                  <SelectItem value="e_mail">E-mail</SelectItem>
                  <SelectItem value="cv">Cover-Letter</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="popular">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="recently">Recently Added</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-3 gap-5">
              {Array.from({ length: 15 }).map((_, i) => (
                <Card key={i}>
                  <CardContent>
                    <div className="h-40 bg-muted/50 rounded-md mb-5" />
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        Template {i + 1}
                      </h3>
                      <Badge variant={"secondary"}>03 days ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Impedit quisquam accusantium possimus inventore harum
                      laudantium? Dignissimos fuga earum aut ullam.
                    </p>
                    <div className="flex items-center justify-between w-full mt-5">
                      <div className="flex items-center gap-2">
                        <Button size={"sm"} variant={"ghost"} className="group">
                          Try it{" "}
                          <ArrowUpRight className="group-hover:translate-x-1 group-hover:rotate-45 transition-all duration-100" />
                        </Button>
                        <WhyRecomandedDialog />
                      </div>
                      <div className="flex items-center gap-2">
                        <TooltipBtn
                          variant="secondary"
                          icon={Heart}
                          label="Like"
                        />
                        <TooltipBtn icon={Share2} label="Share" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-11">
              <Button variant={"secondary"}>
                <ChevronLeft /> Prev
              </Button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Button variant={"ghost"} className="border bg-transparent">
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button variant={"secondary"}>
                Next <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
