import { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <motion.div 
    initial = {{
      opacity: 0,
      y: -50
    }}
    animate = {{
      opacity: 1,
      y: 0
    }}
    transition = {{
      duration: 0.6, ease: 'easeOut'
    }}
    className="flex justify-between items-center rounded-[40px] mx-22 px-4 sm:px-12 lg:px-24 xl:px-30 py-4 sticky top-5 z-30 backdrop-blur-3xl font-medium bg-blue-300/30 dark:bg-gray-100/10">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
      />
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? "max-md:w-0 overflow-hidden"
            : "max-md:w-18"
        } max-md:fixed max-md:-top-0 max-md:bottom-0 max-md:-right-20 max-md:min-h-60 max-md:h-4 max-md:flex-col max-md:items-center max-md:bg-primary max-md:text-white max-md:pt-17 flex md:items-center gap-4 transition-all max-md:rounded-bl-2xl max-md:rounded-br-2xl max-md:rounded-tl-4xl max-md:rounded-tr-4xl`}
      >
        <img
          src={assets.close_icon}
          alt=""
          className="w-5 absolute right-50% top-5 md:hidden"
           onClick={() => setSidebarOpen(false)}
        />
        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="relative 
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:w-0 after:h-[2px] after:bg-blue-500 
    after:transition-all after:duration-300 
    hover:after:w-full"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="text-center hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="hover:border-b"
        >
          Contact
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 md:hidden"
        />

        <a
          href="#contact-us"
          className="text-sm max-md:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
