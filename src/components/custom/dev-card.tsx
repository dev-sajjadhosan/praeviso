import { AtSign, Construction, EyeOff } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { useStore } from "@/store/useStore";

export default function DevCard() {
  const { devCard, setDevCard } = useStore();
  return (
    <>
      <Dialog open={devCard} onOpenChange={() => setDevCard(!devCard)}>
        <DialogContent className="w-xl p-10 bg-secondary/65">
          <Card className="bg-transparent border-0">
            <CardContent className="p-0 flex flex-col items-center justify-center">
              <Construction size={55} />
              <h3 className="text-xl">We are now working on it.</h3>
              <p className="text-md mb-3">Please come back later.</p>
              <div className="flex items-center gap-3 mt-5">
                <Button variant={"secondary"} className="px-7!">
                  <AtSign /> Notify via E-mail
                </Button>
                <Button
                  variant={"ghost"}
                  className="px-5!"
                  onClick={() => setDevCard(!devCard)}
                >
                  <EyeOff /> Hide
                </Button>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
}
