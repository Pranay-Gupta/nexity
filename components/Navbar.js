import React from "react";
import Image from "next/image";
import logo from "../images/HomeImages/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-12 flex items-center bg-gray-800 rounded-full w-[30rem] pt-2 pb-2 pl-6 pr-6 justify-between">
      <Link href="#">
        <a>
          <Image src={logo} width={60} height={60} />
        </a>
      </Link>
      <div>
        MENU
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
