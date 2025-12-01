import { AtSign, File, Paperclip } from "lucide-react";
import { Button } from "../ui/button";
import { useStore } from "@/store/useStore";
const categoryTabs = [
  {
    label: "resume",
    icon: File,
  },
  {
    label: "email",
    icon: AtSign,
  },
  {
    label: "cover_letter",
    icon: Paperclip,
  },
];
export default function TabBar() {
  const { categoryTab, setCategoryTabs } = useStore();
  return (
    <>
      <div className="flex items-center justify-center gap-3 bg-secondary/55 px-5 py-4 rounded-2xl">
        {categoryTabs.map((b, i) => (
          <Button
            key={i}
            className={`px-11 capitalize ${
              categoryTab === b.label ? "" : "text-muted-foreground"
            }`}
            variant={categoryTab === b.label ? "secondary" : "ghost"}
            onClick={() => setCategoryTabs(b.label)}
          >
            {b.icon && <b.icon />} {b?.label?.replace("_", " ")}
          </Button>
        ))}
      </div>
    </>
  );
}
