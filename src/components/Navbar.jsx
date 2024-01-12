import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import { nav } from "../Data/nav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className=" bg-white w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}
      >
        <div className="flex justify-between">
          <div className="text-black flex flex-row justify-items-center font-bold text-lg cursor-pointer">
            <div className="rounded-full w-[50px] h-[50px] border bg-[#4B0082]">
              <h1 className="p-3 text-white text-sm">Logo</h1>
            </div>
            <div className="p-3">
              <h1 className="text-center text-[#4B0082] text-lg">
                FAZIL SHAIKH
              </h1>
            </div>
          </div>

          {/* for larger device */}
          <div className="lg:flex  gap-3 hidden text-body">
            {nav.map((e) => {
              return (
                <>
                  <Link
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    to={e.path}
                    className="block text-black hover:text-black  py-2 px-4 cursor-pointer"
                  >
                    {e.name}
                  </Link>
                </>
              );
            })}

            {/* contact me btn */}
            <div className="lg:block hidden">
              <a href="" rel="noreferrer">
                <button className="px-2 py-2 bg-transparent border border-[#4B0082] text-[#4B0082] rounded hover:bg-[#4B0082] hover:text-white transition-all duration-300">
                  Sign Up
                </button>
              </a>
            </div>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            {nav.map((e) => {
              return (
                <>
                  <Link
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    to={e.path}
                    className="block font-bold text-[#fff] hover:text-[#000000]  py-2 px-4 cursor-pointer"
                  >
                    {e.name}
                  </Link>
                </>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
