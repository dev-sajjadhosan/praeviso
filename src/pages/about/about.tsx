import TooltipBtn from "@/components/custom/tooltip-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  AtSign,
  CircleUserRound,
  Send,
  TextInitialIcon,
  User2,
} from "lucide-react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaRedditAlien,
  FaXTwitter,
} from "react-icons/fa6";

export default function AboutPage() {
  return (
    <>
      <div className="w-11/12 h-full flex flex-col items-center justify-center mx-auto">
        <div className="mt-20 w-full h-84 bg-secondary/55 rounded-2xl flex flex-col items-center justify-center text-center gap-2 relative">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="w-16 h-14 p-3 border">
              <AvatarImage src="/vite.svg" />
            </Avatar>
            <h1 className="text-4xl text-orange-500">Praeviso</h1>
          </div>
          <h3 className="text-md tracking-wide text-muted-foreground md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nulla asperiores illum quidem dolores quod.
          </h3>
          <div className="absolute bottom-4 right-5">
            <TooltipBtn icon={FaFacebook} label="Facebook" />
            <TooltipBtn icon={FaInstagram} label="Instagrame" />
            <TooltipBtn icon={FaXTwitter} label="X" />
            <TooltipBtn icon={FaDiscord} label="Discoard" />
            <TooltipBtn icon={FaRedditAlien} label="Reddit" />
          </div>
        </div>
        <div className="mt-11 flex flex-col gap-2">
          <h3 className="text-xl font-semibold">The Purpose of Praeviso ?</h3>
          <p className="text-md font-normal tracking-wide text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            deleniti molestias excepturi ratione. Accusamus suscipit placeat sit
            ullam cupiditate alias necessitatibus dolore voluptatibus sapiente
            qui rem dignissimos impedit in beatae expedita, praesentium velit
            animi temporibus earum debitis sunt perferendis! Quidem iusto, rem
            exercitationem deleniti perferendis odio repellendus veritatis optio
            aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Saepe quidem autem soluta quo eos repudiandae fuga commodi.
            Sed libero error nobis quaerat mollitia fugit atque distinctio
            dolore velit quam? Quas hic, error odit, facilis molestiae aut
            deleniti quibusdam ullam quidem mollitia incidunt omnis, fugiat
            molestias autem assumenda architecto asperiores soluta!
          </p>
          <h3 className="text-xl font-semibold mt-5">
            The Purpose of Praeviso ?
          </h3>
          <p className="text-md font-normal tracking-wide text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            deleniti molestias excepturi ratione. Accusamus suscipit placeat sit
            ullam cupiditate alias necessitatibus dolore voluptatibus sapiente
            qui rem dignissimos impedit in beatae expedita, praesentium velit
            animi temporibus earum debitis sunt perferendis! Quidem iusto, rem
            exercitationem deleniti perferendis odio repellendus veritatis optio
            aspernatur. Lorem ipsum.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, dolore!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, dolore!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, dolore!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, dolore!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, dolore!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, dolore!
            </li>
          </ul>
          <h3 className="text-3xl font-semibold my-24 mb-5 text-center">
            Has Suggestion for us?
          </h3>
          <div className="w-full h-fit bg-secondary/55 rounded-2xl flex items-center gap-2 p-11">
            <div className="p-5 w-xl flex flex-col items-center justify-center">
              <CircleUserRound size={39} strokeWidth={1.2} />
              <h1 className="text-3xl font-light">Contact US</h1>
            </div>
            <form className="w-full h-full flex flex-col gap-3">
              <div className="flex items-center gap-1 [&_svg]:size-5 [&_svg]:text-muted-foreground bg-secondary px-5 py-2 rounded-lg">
                <User2 />
                <Separator orientation="vertical" className="h-5!" />
                <Input
                  placeholder="Jhon Deo? "
                  className="border-0 bg-transparent!"
                />
              </div>
              <div className="flex items-center gap-1 [&_svg]:size-5 [&_svg]:text-muted-foreground bg-secondary px-5 py-2 rounded-lg">
                <AtSign />
                <Separator orientation="vertical" className="h-5!" />
                <Input
                  placeholder="jhonDeo@gmail.com ? "
                  className="border-0 bg-transparent!"
                />
              </div>
              <div className="flex items-start gap-1 [&_svg]:size-5 [&_svg]:text-muted-foreground bg-secondary px-5 py-3 rounded-lg">
                <TextInitialIcon />
                <Separator orientation="vertical" className="h-5! mr-2" />
                <Textarea
                  placeholder="Write your purpose or suggestion here..."
                  rows={5}
                  className="border-0 bg-transparent! p-0!"
                />
              </div>
              <Button>
                Send <Send />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
