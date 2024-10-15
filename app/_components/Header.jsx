import Image from "next/image";
import Logo from "../public/BluephaseLogo.png";

export default function Header() {
  return (
    <header className="bg-white my-4  w-5/6 md:max-w-screen-lg mx-auto">
      <Image src={Logo} alt="bluephase logo" width={150} />
    </header>
  );
}
