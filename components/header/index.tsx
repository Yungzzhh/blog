"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Header: React.FC = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar")!;

    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        navbar.classList.add("shadow-md");
      } else {
        navbar.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 清理函数
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className=" flex justify-end items-center p-4 fixed w-full top-0 z-10 bg-slate-50 transition-shadow duration-300"
        id="navbar"
      >
        <div className=" absolute left-0">
          <Link href={"/"}>
            <Image
              src="/signature.svg"
              alt=""
              width={200}
              height={50}
              id="l1"
            ></Image>
          </Link>
        </div>
        <div className="flex">
          <div className="flex gap-8 mr-8  ">
            <Link href={"/articles"}>Articles</Link>
            <Link href={"/trick"}>Trick</Link>
            <Link href={"/photo-wall"}>PhotoWall</Link>
            <Link href={"/links"}>Links</Link>
          </div>
          <div className=" h-6 w-[2px] p-3 bg-slate-200"></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Header;
