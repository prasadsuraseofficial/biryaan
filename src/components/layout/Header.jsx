import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { Link as ScrollableLink } from "react-scroll";

export default function Header() {
  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 p-4">
      <nav
        className="mx-auto flex items-center justify-between gap-12 max-w-7xl px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-10 w-auto" src={logo} alt="biryaan logo" />
          </Link>
        </div>

        <div className="flex max-md:flex-1 gap-3 lg:gap-x-12">
          {/* <Popover.Group className="hidden lg:flex lg:gap-x-12"> */}
          <Link
            to="/"
            className="font-semibold leading-6 text-white max-md:text-xs"
          >
            Home
          </Link>
          <ScrollableLink
            to="about"
            smooth={true}
            duration={500}
            className="font-semibold leading-6 text-white cursor-pointer max-md:text-xs"
          >
            About Us
          </ScrollableLink>
          <Link
            to="/franchise"
            className="font-semibold leading-6 text-white max-md:text-xs"
          >
            Franchise
          </Link>
          {/* </Popover.Group> */}
        </div>
      </nav>
    </header>
  );
}
