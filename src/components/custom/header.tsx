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
  const location = useLocation();
  const isPath = (path: string) => location.pathname === path;
  const nav = useNavigate();
  console.log(location.pathname.replace("/", ""));
  return (
    <>
      <header
        className={`sticky top-7 flex items-center justify-between ${
          !isPath("/") ? "md:w-6/12" : " md:w-8/12"
        }  h-14 bg-secondary/65 rounded-full mx-auto border px-9 duration-300 transition-all backdrop-blur-xl`}
      >
        {!isPath("/") ? (
          <Button variant={"ghost"} onClick={() => nav(-1)}>
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
            <h3 className="px-5 tracking-wide font-normal capitalize">
              {location.pathname.replace("/", "")} Page
            </h3>
          </nav>
        ) : (
          <nav>
            <ul className="hidden md:flex items-center gap-5">
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
