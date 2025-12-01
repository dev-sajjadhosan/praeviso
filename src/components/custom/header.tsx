import {
  ChevronDown,
  ChevronFirst,
  ChevronsRightLeft,
  Gem,
  House,
  Moon,
  Search,
  Sun,
} from "lucide-react";
import TooltipBtn from "./tooltip-button";
import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "../ui/button";
import {
  TbFileCv,
  TbFileRss,
  TbFileSpark,
  TbInfoCircle,
  TbTemplate,
} from "react-icons/tb";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { useStore } from "@/store/useStore";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: House,
  },

  {
    label: "Templates",
    path: "/templates",
    icon: TbTemplate,
  },
  {
    label: "Operations",
    path: "",
    icon: ChevronDown,
    childrens: [
      {
        label: "Resume Builder",
        path: "/resume-builder",
        icon: TbFileSpark,
      },
      {
        label: "CV Builder",
        path: "/cv-builder",
        icon: TbFileCv,
      },
      {
        label: "E-Mail Builder",
        path: "/e_mail-builder",
        icon: TbFileRss,
      },
    ],
  },
  {
    label: "Compare",
    path: "/compare",
    icon: ChevronsRightLeft,
  },
  {
    label: "About",
    path: "/about",
    icon: TbInfoCircle,
  },
];

export default function Header() {
  const { theme, setTheme } = useStore();
  const location = useLocation();
  const isPath = (path: string) => location.pathname === path;
  const getIcon = (path: string) => {
    const Icon = navItems.find((n) => n.path === path)?.icon;
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  const nav = useNavigate();
  return (
    <>
      <header
        className={`sticky top-7 flex items-center justify-between ${
          !isPath("/") ? "md:w-6/12" : " md:w-9/12"
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
          <nav className="flex items-center gap-1">
            {getIcon(location?.pathname)}
            <h3 className="tracking-wide font-normal capitalize">
              {location.pathname.replace("/", "")} Page
            </h3>
          </nav>
        ) : (
          <nav>
            <ul className="hidden md:flex items-center gap-5">
              {navItems.map((l, i) =>
                l?.childrens ? (
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="p-0 bg-transparent! hover:bg-transparent!">
                          {l.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="w-96! flex flex-wrap gap-3 p-5">
                          {l.childrens.map((c, i) => (
                            <Link to={c.path} key={i} className="w-full">
                              <NavigationMenuLink className="w-full h-24 bg-secondary/33 hover:bg-secondary gap-3 flex-row items-center justify-center text-md cursor-pointer text-muted-foreground hover:text-primary">
                                {c.icon && <c.icon />}
                                {c.label}
                              </NavigationMenuLink>
                            </Link>
                          ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : (
                  <Link to={l?.path} key={i}>
                    <li
                      className={` ${
                        isPath(l.path)
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-primary"
                      } flex items-center gap-1 `}
                    >
                      {l.icon && <l.icon size={13} />}
                      {l.label}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <TooltipBtn
            icon={theme === "dark" ? Sun : Moon}
            label={theme === "dark" ? "Light" : "Dark"}
            action={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <TooltipBtn icon={Search} label="Search Teamplate" />
          <TooltipBtn icon={Gem} label="What's new" />
        </div>
      </header>
    </>
  );
}
