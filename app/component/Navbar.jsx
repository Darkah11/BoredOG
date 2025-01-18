"use client"
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <nav className=" bg-background-10 bg-opacity-40 fixed top-0 z-50 flex justify-between items-center w-full px-5 xl:px-24 py-8">
      <Link href={"/"}>
        <img src="/logo.svg" alt="bored og logo" className="w-40" />
      </Link>
      <div className=" md:hidden">
        <button className=" w-[30px] flex flex-col gap-2" onClick={() => setActive(true)}>
          <span className="w-full bg-white h-[2px]"></span>
          <span className="w-full bg-white h-[2px]"></span>
          <span className="w-full bg-white h-[2px]"></span>
        </button>
      </div>
      <ul className=" hidden md:flex items-center gap-5">
        <li>
          <Link href={"/"} className=" text-white text-sm font-medium hover:text-primary-5">
            HOME
          </Link>
        </li>
        <li>
          <Link href={"#about"} className=" text-white text-sm font-medium hover:text-primary-5">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href={"#vision"} className=" text-white text-sm font-medium hover:text-primary-5">
            VISION
          </Link>
        </li>
        <li>
          <Link href={"#storymap"} className=" text-white text-sm font-medium hover:text-primary-5">
            STORYMAP
          </Link>
        </li>
        <li>
          <Link
            href={"#joinUs"}
            className="hover:bg-primary-10 hover:text-white  text-background-10 text-sm font-medium px-7 bg-primary-5 py-3 rounded-md"
          >
            JOIN US
          </Link>
        </li>
      </ul>
      <div
        className={[
          active
            ? "flex justify-end fixed h-screen top-0 right-0 w-full md:hidden"
            : "hidden",
        ]}
      >
        <div
          className="absolute bg-background-10 bg-opacity-70 w-full h-full"
          onClick={() => {
            setActive(false);
          }}
        ></div>
        <div className="bg-primary-5 w-[300px] h-full z-20">
          <div className=" absolute top-5 right-5">
            <button
              className=" h-[30px] flex flex-row hover:rotate-90 transition-all"
              onClick={() => setActive(false)}
            >
  <img src="/close.svg" className=" w-10"  alt="" />
            </button>
          </div>
          <ul className=" h-full flex flex-col items-center justify-center gap-2 text-sm text-center">
            <li className=" block w-full py-3">
              <Link
                onClick={() => setActive(false)}
                className=" text-xl font-medium text-background-10 block hover:text-primary-10"
                href={"/"}
              >
                HOME
              </Link>
            </li>
            <li className=" block w-full py-3">
              <Link
                onClick={() => setActive(false)}
                className=" text-xl font-medium text-background-10 block hover:text-primary-10"
                href={"#about"}
              >
                ABOUT
              </Link>
            </li>
            <li className=" block w-full py-3">
              <Link
                onClick={() => setActive(false)}
                className=" text-xl font-medium text-background-10 block hover:text-primary-10"
                href={"#vision"}
              >
                VISION
              </Link>
            </li>
            <li className=" block w-full py-3">
              <Link
                onClick={() => setActive(false)}
                className=" text-xl font-medium text-background-10 block hover:text-primary-10"
                href={"#storymap"}
              >
                STORYMAP
              </Link>
            </li>
            <Link
              className=""
              target="_blank"
              href={
                "#joinUs"
              }
            >
              <button className=" bg-background-10 text-primary-5 w-[180px] px-7 py-3 rounded-lg font-semibold hover:bg-primary-10 transition-all">
                JOIN US
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
