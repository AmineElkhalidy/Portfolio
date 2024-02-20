import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import Switcher from "./Switcher";

const MenuDialog = () => {
  return (
    <div className="fixed right-4 bottom-4">
      <Dialog>
        <DialogTrigger>
          <div className="w-12 md:w-16 h-12 md:h-16 rounded-full border bg-white flex items-center justify-center shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-justify text-black-700 "
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-xl py-16 shadow-xl">
          <div className="relative">
            <ul className="nav__list">
              {["about", "work", "testimonials", "contact"].map(
                (link, index) => (
                  <li key={index}>
                    <DialogClose asChild>
                      <a className="nav__link" href={`#${link}`}>
                        {link}
                      </a>
                    </DialogClose>
                  </li>
                )
              )}
            </ul>

            <div className="absolute -top-[43px] right-8">
              <Switcher />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuDialog;
