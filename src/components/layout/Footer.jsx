import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { socialLinks } from "../../constants";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-gray-900 py-8 md:py-12 lg:py-16`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-5">
          {/* Left Section */}
          <div className="max-md:col-span-full">
            <img
              src={logo}
              alt="Biryaan Logo"
              width="150px"
              className="mb-6 max-md:mt-3"
            />

            <div>
              {/* <h2 className="text-white mb-2">Address:</h2> */}
              <p className="text-gray-300">
                Metro Station, Plot No 38, Wardha Rd, beside Dhawad Polytechnic,
                near Jayprakash Nagar, Rajiv Nagar, Somalwada, Nagpur,
                Maharashtra 440025
              </p>
            </div>

            <div className="md:hidden flex items-center mt-6">
              <h2 className="text-white mr-4">Social Accounts:</h2>
              {socialLinks &&
                socialLinks.map((socialLink, i) => (
                  <a
                    href={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                  >
                    <img
                      src={socialLink.icon}
                      width={25}
                      alt={socialLink.platformName}
                      className="mr-4"
                    />
                  </a>
                ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col justify-start">
            <h2 className="text-white text-2xl mb-4 md:mb-6">
              Important Links:
            </h2>
            <div className="flex flex-col space-y-4 ">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/franchise"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Franchise
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-start">
            <h2 className="text-white text-2xl mb-4 md:mb-6">Contact Us:</h2>
            <div className="flex flex-col  space-y-4">
              <a
                href="mailto:info@biryaan.in"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                info@biryaan.in
              </a>
              <a
                href="tel:8459124200"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                +91-8459124200
              </a>
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* desktop only */}
          <div className="max-md:hidden flex flex-col justify-start items-start space-y-4">
            <h2 className="text-white text-2xl mr-4">Social Accounts:</h2>
            {socialLinks &&
              socialLinks.map((socialLink, i) => (
                <a
                  href={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="flex text-white"
                >
                  <img
                    src={socialLink.icon}
                    width={25}
                    alt={socialLink.platformName}
                    className="mr-4"
                  />{" "}
                  <span>{socialLink.platformName}</span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
