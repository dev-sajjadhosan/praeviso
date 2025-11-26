import { ChevronFirst, Gem, Search, Sun } from "lucide-react";
import TooltipBtn from "./tooltip-button";
import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "../ui/button";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: "",
  },

  {
    label: "Templates",
    path: "/templates",
    icon: "",
  },
  {
    label: "Operations",
    path: "",
    icon: "",
    childrens: [
      {
        label: "Resume Builder",
        path: "",
        icon: "",
      },
      {
        label: "Cover Letter Builder",
        path: "",
        icon: "",
      },
      {
        label: "E-Mail Template Builder",
        path: "",
        icon: "",
      },
    ],
  },
  {
    label: "Compare",
    path: "/compare",
    icon: "",
  },
  {
    label: "About",
    path: "/about",
    icon: "",
  },
];

export default function Header() {
  const isPath = (path: string) => useLocation().pathname === path;
  const nav = useNavigate();
  return (
    <>
      <header
        className={`sticky top-7 flex items-center justify-between ${
          !isPath("/") ? "w-6/12" : "w-8/12"
        }  h-14 bg-muted/55 rounded-full mx-auto border px-9 duration-300 transition-all`}
      >
        {!isPath("/") ? (
          <Button  variant={"ghost"} onClick={() => nav(-1)}>
            <ChevronFirst /> Go Back
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <img src="/vite.svg" alt="" width={30} />
            <h2 className="text-xl font-normal tracking-wide">Praeviso</h2>
          </div>
        )}

        {!isPath("/") ? (
          <nav>
            <h3 className="text-xl">About Page</h3>
          </nav>
        ) : (
          <nav>
            <ul className="flex items-center gap-5">
              {navItems.map((l, i) => (
                <Link to={l?.path} key={i}>
                  <li
                    className={` ${
                      isPath(l.path)
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {l.label}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <TooltipBtn icon={Sun} label="Light" />
          <TooltipBtn icon={Search} label="Search Teamplate" />
          <TooltipBtn icon={Gem} label="What's new" />
        </div>
      </header>
    </>
  );
}
