"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import CustomButton from "./CustomButton";

const Headers = () => {
  const header = useRef<HTMLElement>(null);
  const HEADER_WHITE_SCROLL_PX = 100;

  useEffect(() => {
    const handleScroll = () => {
      if (header.current && globalThis) {
        if (globalThis.scrollY > HEADER_WHITE_SCROLL_PX) {
          // document.getElementById('header').classList.add()
          header.current.classList.add("bg-white");
          header.current.classList.add("shadow-sm");
        } else {
          header.current.classList.remove("bg-white");
          header.current.classList.remove("shadow-sm");
        }
      }
    };
    globalThis.addEventListener("scroll", handleScroll);
    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={header}
      id="header"
      className={`${
        // window !== "undefined" &&
        globalThis.scrollY > HEADER_WHITE_SCROLL_PX ? "bg-white shadow-sm" : ""
      } header fixed  t-0 w-screen p-6 hidden md:block z-40`}
    >
      <div className="flex items-center justify-between">
        <div className="pt-2 text-xl">
          <Link href="/" className="flex">
            <Image
              src="/images/lady-look-creation_logo.jpeg"
              alt="logo"
              width={30}
              height={20}
            />
            Lady Look Creation
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {/* <Link href='/about'>Terms & Conditions</Link> */}
        </div>
        <Link href="/login">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="min-w-[130px]"
          />
        </Link>
      </div>
    </header>
  );
};

export default Headers;
