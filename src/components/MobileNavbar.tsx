import { Bars3Icon } from "@heroicons/react/24/solid";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";

const MobileNavbar = () => {
  return (
    <>
      <div className="flex items-center gap-3 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bars3Icon className="w-7 h-7 dark:text-white hover:text-gray-600" />
            </Button>
          </SheetTrigger>
          <SheetContent className="text-black">
            <div className="h-full flex flex-col justify-center items-center">
              <ul className="nav__list">
                {["about", "work", "testimonials", "contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a className="nav__link" href={`#${link}`}>
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileNavbar;
