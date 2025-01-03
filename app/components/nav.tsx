"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useMediaQuery from "../hooks/helper";
import { BiMenu, BiX } from "react-icons/bi";

export default function Nav() {
  const isMobile = useMediaQuery("(max-width: 800px)");
  let anchorRef = useRef<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [anchor, setAnchor] = useState<
    "home" | "about" | "blogs" | "feedback" | null
  >(
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname === "/about"
        ? "about"
        : window.location.pathname === "/blogs"
          ? "blogs"
          : window.location.pathname === "/feedback"
            ? "feedback"
            : window.location.pathname.includes("/readblog") ? "blogs"
            : null
  );

  function setLinePosition() {
    if (anchor === "home") {
      anchorRef.current.style.left = "0px";
    } else if (anchor === "about") {
      anchorRef.current.style.left = "73px";
    } else if (anchor === "blogs") {
      anchorRef.current.style.left = "145px";
    } else if (anchor === "feedback") {
      anchorRef.current.style.left = "228px";
    }
  }

  function changeAbout() {
    if (anchor === "home") {
      anchorRef.current.style.animation = "home-about 0.8s ease-in-out";
    } else if (anchor === "blogs") {
      anchorRef.current.style.animation = "blog-about 0.8s ease-in-out";
    } else if (anchor === "feedback") {
      anchorRef.current.style.animation = "feedback-about 0.8s ease-in-out";
    }
  }

  function changeHome() {
    if (anchor === "about") {
      anchorRef.current.style.animation = "about-home 0.8s ease-in-out";
    } else if (anchor === "blogs") {
      anchorRef.current.style.animation = "blog-home 0.8s ease-in-out";
    } else if (anchor === "feedback") {
      anchorRef.current.style.animation = "feedback-home 0.8s ease-in-out";
    }
  }
  function changeBlogs() {
    if (anchor === "about") {
      anchorRef.current.style.animation = "about-blog 0.8s ease-in-out";
    } else if (anchor === "home") {
      anchorRef.current.style.animation = "home-blog 0.8s ease-in-out";
    } else if (anchor === "feedback") {
      anchorRef.current.style.animation = "feedback-blog 0.8s ease-in-out";
    }
  }

  function changeFeedback() {
    if (anchor === "about") {
      anchorRef.current.style.animation = "about-feedback 0.8s ease-in-out";
    } else if (anchor === "home") {
      anchorRef.current.style.animation = "home-feedback 0.8s ease-in-out";
    } else if (anchor === "blogs") {
      anchorRef.current.style.animation = "blog-feedback 0.8s ease-in-out";
    }
  }

  const openMenu = () => {
    setIsMenuOpen(true);

  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    console.log(anchor);
    setLinePosition();
  }, []);
  return (
    <div className="nav w-full h-[80px] bg-gray-800">
      <div className="main flex justify-between items-center h-full px-10">
        <div className="logo-section">
          <h1 className="font-bold text-4xl  text-white">Okay</h1>
        </div>
        <div className={` text-white cursor-pointer ${isMobile ? "block" : "hidden"}`}>
          {isMenuOpen ? (
            <BiX size={30} onClick={() => closeMenu()} />
          ) : (
            <BiMenu size={30} onClick={() => openMenu()} />
          )}
        </div>
        <div className={`${isMobile ? "hidden" : "block"} relative h-full`}>
          <div
            ref={anchorRef}
            className="line"
            onAnimationEnd={setLinePosition}
          ></div>
          <div
            className={`anchor-section flex justify-center gap-8 h-full items-center`}
          >
            <div
              className="items text-white cursor-pointer"
              onClick={() => {
                changeHome();
                setAnchor("home");
              }}
            >
              <Link href={"/"}>Home</Link>
            </div>
            <div
              className="items text-white cursor-pointer"
              onClick={() => {
                changeAbout();
                setAnchor("about");
              }}
            >
              <Link href={"/about"}>About</Link>
            </div>
            <div
              className="items text-white cursor-pointer"
              onClick={() => {
                changeBlogs();
                setAnchor("blogs");
              }}
            >
              <Link href="/blogs">Blogs</Link>
            </div>
            <div
              className="items text-white cursor-pointer"
              onClick={() => {
                changeFeedback();
                setAnchor("feedback");
              }}
            >
              <Link href={"/feedback"}>Feedback</Link>
            </div>
            <div className=" flex items-center gap-5">
              <input
                className="border border-white h-10 w-52 rounded-full bg-transparent px-3 text-white text-md"
                type="text"
              />
              <button onClick={() => {}} className="search-btn text-white">
                <FaMagnifyingGlass size={25} />
              </button>
            </div>
          </div>
        </div>{
          isMenuOpen ? (
            <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 z-10 flex flex-col items-center justify-center gap-10 text-lg">
              <div className="absolute top-7 right-10 text-white cursor-pointer"> 
                <BiX size={30} onClick={() => closeMenu()} />
              </div>
              <div
                className="text-white cursor-pointer"
                onClick={() => {
                  changeHome();
                  setAnchor("home");
                  closeMenu();
                }}
              >
                <Link href={"/"}>Home</Link>
              </div>
              <div
                className="text-white cursor-pointer"
                onClick={() => {
                  changeAbout();
                  setAnchor("about");
                  closeMenu();
                }}
              >
                <Link href={"/about"}>About</Link>
              </div>
              <div
                className="text-white cursor-pointer"
                onClick={() => {
                  changeBlogs();
                  setAnchor("blogs");
                  closeMenu();
                }}
              >
                <Link href="/blogs">Blogs</Link>
              </div>
              <div
                className="text-white cursor-pointer"
                onClick={() => {
                  changeFeedback();
                  setAnchor("feedback");
                  closeMenu();
                }}
              >
                <Link href={"/feedback"}>Feedback</Link>
              </div>
              <div className=" flex items-center gap-5 ps-10">
                <input
                  className="border border-white h-10 w-52 rounded-full bg-transparent px-3 text-white text-md"
                  type="text"
                />
                <button onClick={() => {}} className="search-btn text-white">
                  <FaMagnifyingGlass size={25} />
                </button>
              </div>
            </div>
          ) : null
        }
      </div>
    </div>
  );
}
