import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";

const MenuDialog = ({ isShown }: { isShown: boolean }) => {
  return (
    <div
      className={cn(
        "fixed right-2 duration-300",
        isShown ? "bottom-[4rem] md:bottom-[4.8rem]" : "bottom-4"
      )}
      style={{ zIndex: 1000 }}
    >
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

        <DialogContent className="max-w-xs mx-auto sm:max-w-xl w-full py-10 sm:py-16 shadow-xl">
          <div className="relative">
            <ul className="nav__list">
              {["work", "testimonials", "contact"].map((link, index) => (
                <li key={index}>
                  <DialogClose asChild>
                    <a
                      className="font-nav sm:text-lg capitalize font-semibold text-black-900 duration-300 hover:text-emerald-600"
                      href={`#${link}`}
                    >
                      {link}
                    </a>
                  </DialogClose>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuDialog;
