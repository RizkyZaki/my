"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useMediaQuery from "@/hooks/use-media-query";
import { MagicButton } from "./aceternity/StyledButton";
import { FaLocationArrow } from "react-icons/fa";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { LoaderCircle } from "lucide-react";
import { sendMail } from "@/lib/actions/contact.action";

export function ContactDrawerDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="max-sm:w-full">
          <MagicButton
            title="Send a Quick Note"
            icon={<FaLocationArrow />}
            position="right"
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Quick Note</DialogTitle>
            <DialogDescription>
              Hey! I&apos;m glad that you&apos;re here. Feel free to send me a
              quick note about anything.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="max-sm:w-full">
        <MagicButton
          title="Send a Quick Note"
          icon={<FaLocationArrow />}
          position="right"
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center text-white">
            Quick Note
          </DrawerTitle>
          <DrawerDescription className="text-left">
            Hey! I&apos;m glad that you&apos;re here. Feel free to send me a
            quick note about anything.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialvalues = {
    email: "",
    note: "",
  };

  const [data, setData] = useState(initialvalues);

  const handleSubmit = async (e: any) => {
    setIsSubmitting(true);
    e.preventDefault();

    if (data.note == "" || data.email == "") {
      setIsSubmitting(false);
      return toast({
        title: "Oops, Something went wrong!",
        description: "Please enter both the fields.",
      });
    }

    if (
      !data.email.endsWith("@gmail.com") &&
      !data.email.endsWith("@hotmail.com") &&
      !data.email.endsWith("@outlook.com")
    ) {
      setIsSubmitting(false);
      return toast({
        title: "Sorry!",
        description: "Only gmail, hotmail and outlook Mail IDs are accepted.",
      });
    }

    const res = await sendMail({ data });
    setIsSubmitting(false);

    if (res) {
      return toast({
        title: "Thank you!",
        description: "I will get back to you soon.",
      });
      setData(initialvalues);
    } else {
      return toast({
        title: "Apologies!",
        description: "Something went wrong.",
      });
    }
  };

  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="No disposable email please 😅"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="note" className="text-white">
          Your message
        </Label>
        <Textarea
          id="note"
          name="note"
          placeholder="Write here..."
          value={data.note}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
      </div>
      <Button type="submit" onClick={handleSubmit}>
        {isSubmitting ? (
          <div className="flex gap-2 items-center justify-center">
            <LoaderCircle size={18} className="animate-spin-custom" />
            <p>Sending</p>
          </div>
        ) : (
          <p>Send Note</p>
        )}
      </Button>
    </form>
  );
}
