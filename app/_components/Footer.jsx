import Image from "next/image";
import Logo from "../public/WhiteBluephaseLogo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-darkAccent mt-36 md:mt-64 ">
      <div className="w-5/6 md:max-w-screen-lg mx-auto pt-10">
        <Image src={Logo} alt="bluephase logo" width={200} />
        <div className="flex gap-4 mt-4">
          <FaFacebookSquare size={30} color="white" />
          <FaInstagram size={30} color="white" />
          <FaLinkedin size={30} color="white" />
        </div>
        <p className="text-white text-sm font-medium md:text-lg mt-4">
          Copyright 2024. Bluephase Electrical. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
