import { React, useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  //Refs for custom cursor Position tracking

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        (dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 6
        }px, ${mouse.current.y - 6}px, 0)`),
          (outlineRef.current.style.transform = `translate3d(${
            mouse.current.x - 20
          }px, ${mouse.current.y - 20}px, 0)`);
      }

      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <DotLottieReact
          src="https://lottie.host/48133ac4-9703-43dd-a99e-d6291eaadbfc/5zvtrDyQOf.lottie"
          className="bg-black min-h-screen flex items-center justify-center"
          loop
          autoplay
        />
      ) : (
        <div className="dark:bg-black relative">
          <Toaster />
          <Navbar theme={theme} setTheme={setTheme} />
          <Hero />
          <TrustedBy />
          <Services />
          <OurWork />
          <Team />
          <ContactUs />
          <Footer theme={theme} />

          {/* Custom Cursor */}
          <div
            ref={outlineRef}
            className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[999]"
            style={{ transition: "transform 0.4s ease-out" }}
          ></div>
          {/* Custom cursor dot */}
          <div
            ref={dotRef}
            className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[999]"
          ></div>
        </div>
      )}
    </>
  );
};

export default App;
