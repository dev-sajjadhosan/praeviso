import { Heart, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Link } from "react-router";
import { Avatar, AvatarImage } from "../ui/avatar";

const footerLinks = [
  {
    title: "Product",
    links: [
      {
        name: "Resume Builder",
        href: "#",
      },
      {
        name: "E-mail Builder",
        href: "#",
      },
      {
        name: "CV Builder",
        href: "#",
      },
      {
        name: "Compare",
        href: "#",
      },
      {
        name: "About",
        href: "#",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Github",
        href: "#",
      },
      {
        name: "Discord",
        href: "#",
      },
      {
        name: "Twitter",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Private Policy",
        href: "#",
      },
      {
        name: "Terms & Conditions",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className="w-11/12 h-fit p-11 flex flex-col gap-9 bg-secondary/55 border rounded-xl my-36">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/vite.svg" />
            </Avatar>
            <h1 className="text-2xl">Praeviso</h1>
            <p className="text-lg text-muted-foreground max-w-sm">
              AI-powered career optimization. Privacy-first, professional, and
              designed to help you get noticed.
            </p>
          </div>
          <div className="flex items-start gap-11 pr-10">
            {footerLinks.map((s, i) => (
              <nav key={i}>
                <ul className="space-y-2">
                  <li>{s.title}</li>
                  <Separator />
                  {s.links.map((l, j) => (
                    <Link to={l.href} key={j}>
                      <li className="text-muted-foreground hover:text-primary cursor-pointer">
                        {l.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1">
            <p className="text-md">Want to get updates news ?</p>
            <div className="flex items-center bg-secondary rounded-full px-5 py-2 w-sm">
              <Input
                placeholder="jhonDeo@gmail.com"
                className="bg-transparent! border-0"
              />

              <Button variant={"ghost"}>
                Send <Send />
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">© 2025 Praeviso. All rights reserved.</p>
            <h3 className="text-sm flex items-center gap-1 text-muted-foreground">
              Made by <Heart className="text-orange-400" size={19} /> by
              Developer.
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
