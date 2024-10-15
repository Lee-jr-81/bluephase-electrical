import Image from "next/image";
import Button from "./Button";
import BluephaseDark from "../public/BluephaseDark.png";

export default function HeroSection() {
  return (
    <section className="">
      <div className="w-full h-screen overflow-hidden relative">
        <Image
          src={BluephaseDark}
          alt="photo of media wall"
          fill
          quality={80}
          placeholder="blur"
          className="object-cover"
        />

        <div className="relative z-10 text-center mt-28">
          <div className="bg-mediumAccent rounded-md p-4 px-6 max-w-[300px] mx-auto">
            <p className="text-white font-semibold">
              We Stick To What We Know And What We Do Best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg gap-8 mx-auto mt-16 md:mt-32">
            <div className="text-white">
              <h1 className="font-semibold text-2xl md:text-3xl">
                Do You Need A House Rewire?
              </h1>
              <h2 className="text-white font-bold text-4xl md:text-5xl mt-6">
                We Make Ours...
              </h2>
              <h2 className="text-mediumAccent font-bold text-4xl md:text-5xl">
                Stress Free
              </h2>
            </div>
            <div className="text-white mt-4 md:mt-0">
              <p className="px-8 text-lg md:text-xl">
                With over 24 years experience in the electrical industry and
                over 43 years experience being a human, we understand what makes
                a great electrical service. If the lowest quality equipment and
                low price is high on your priorities, then we probably
                aren&apos;t the right rewire company for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-screen-md px-12 gap-6 mt-16">
              <Button
                name="What's Included?"
                bg="bg-mediumAccent"
                textColour="text-white"
              />
              <Button
                name="Contact?"
                bg=""
                textColour="text-white"
                border="border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
