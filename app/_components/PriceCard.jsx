import Image from "next/image";
import House from "../public/bluHouse.png";
import ColouredLine from "./ColouredLine";

export default function PriceCard({ beds, price }) {
  return (
    <div className="bg-darkAccent w-[300px] mx-auto rounded-md p-2 grid grid-cols-3">
      <div className="flex flex-col items-center justify-center mt-2">
        <Image
          src={House}
          alt="image of a blue house"
          width={30}
          className=""
        />
        <p className="text-mediumAccent font-bold text-lg">{`${beds} BEDS`}</p>
      </div>
      <div className="self-center col-span-2 pr-6">
        <p className="text-white font-bold text-2xl text-left">
          {beds === 5 ? `£ ${price}+` : `£ ${price}`}
        </p>
        <ColouredLine colour="red" />
      </div>
    </div>
  );
}
