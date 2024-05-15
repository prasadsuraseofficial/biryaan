import { Popover } from "@headlessui/react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 p-4">
      <nav
        className="mx-auto flex items-center justify-between max-w-7xl px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-10 w-auto" src={logo} alt="biryaan logo" />
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link to="/" className="font-semibold leading-6 text-white">
              Home
            </Link>
            <Link
              to="/franchise"
              className="font-semibold leading-6 text-white"
            >
              Franchise
            </Link>
          </Popover.Group>
        </div>
      </nav>
    </header>
  );
}
