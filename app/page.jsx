"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "./component/Slider";
import Navbar from "./component/Navbar";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className=" hero relative flex flex-col justify-center">
          <div className=" absolute top-0 -z-10 h-full w-full">
            <div className=" bg-background-10 bg-opacity-55 absolute w-full h-full" />
            <img
              src="/bored-og-banner.jpg"
              alt="bored og banner"
              className=" w-full h-full object-cover"
            />
          </div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className="' flex flex-col gap-5 absolute bottom-1 right-1"
          >
            <Link
              href={
                "https://x.com/boredofficeguy_?s=21&t=Z5JU_OZ_VRtAy5u0T8DTIA"
              }
            >
              <img
                src="/x.svg"
                className=" w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                alt=""
              />
            </Link>
            <Link href={"https://t.me/BoredOfficeGuyPortal"}>
              <img
                src="/telegram.svg"
                className="  w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                alt=""
              />
            </Link>
            <Link
              href={
                "https://www.tiktok.com/@boredofficeguy?_t=ZN-8t60DXUcrQc&_r=1"
              }
            >
              <img
                src="/tiktok.svg"
                className="  w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                alt=""
              />
            </Link>
          </motion.div>
          <div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" w-fit m-auto z-30"
            >
              <h2 className=" text-primary-5 font-bold text-5xl md:text-8xl lg:text-9xl">
                JOIN THE
              </h2>
              <h2 className=" text-primary-5 font-bold text-5xl md:text-8xl lg:text-9xl pl-[120px] md:pl-[250px]  lg:pl-96">
                STRUGGLE
              </h2>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" mx-auto mt-4 md:ml-24 pr-10 border-t border-primary-5 max-w-52"
            >
              <p className="text-primary-5 ">
                “Why stress? The work gets done… eventually. Or doesn’t. Either
                way, we’re here.”
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" mt-5"
            >
              <div className=" border-white border-[2px] w-fit py-3 px-8 rounded-full mx-auto">
                <p className=" text-white text-xs md:text-base font-medium">0xCAFBf889bef0617d9209Cf96f18c850e901A6D61</p>
              </div>
              <div className=" flex items-center gap-5 justify-center mt-3">
                <button className=" hover:bg-primary-5 hover:text-primary-10 border-primary-5 border-[2px] w-[150px] font-semibold py-3 rounded-lg text-primary-5 text-sm md:text-base">
                  Buy $BoredOG
                </button>
                <button className="hover:bg-transparent hover:text-primary-5 border-primary-5 border-[2px] bg-primary-5 w-[150px] font-semibold py-3 rounded-lg text-primary-10">
                  Copy CA
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="about">
          <div className="px-5 xl:px-24 flex flex-col md:flex-row items-center justify-between py-10">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" max-w-[550px]"
            >
              <h2 className=" text-4xl font-bold mb-4">
                Break the Chains, Start the Journey
              </h2>

              <p>
                Life’s too short to stay stuck on the grind. $BoredOG is a call
                to break free from the mundane, challenge the status quo, and
                rediscover what makes you come alive. Ready to start your
                journey? Explore where we’re making waves and join the
                rebellion. Check us out on your favorite platforms and let’s
                rewrite the script together.
              </p>
              <div className=" flex gap-3 items-center mt-5">
                <button className=" border-background-10 border-[2px] bg-background-10 w-[150px] font-semibold py-3 rounded-lg text-white">
                  Dexscreener
                </button>
                {/* <button className=" border-background-10 border-[2px] w-[150px] font-semibold py-3 rounded-lg text-background-10">Dextools</button> */}
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" relative mt-8 md:mt-0"
            >
              <img
                src="/bored-og.jpg"
                alt="bored og"
                className=" max-w-[400px] md:min-w-[400px] lg:min-w-[500px] rounded-lg"
              />
            </motion.div>
          </div>
          <div>
            <Slider />
          </div>
          <div className=" px-5 xl:px-24 flex flex-col md:flex-row pb-8 gap-x-5 items-center justify-between mt-5">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" md:max-w-[600px] md:order-2"
            >
              <h2 className="text-4xl font-bold">
                About BoredOG -<span> From Office Slaves to Meme Kings</span>
              </h2>
              <p className=" mt-5">
                The “Bored Office Guy” is the memecoin for anyone who has ever
                stared at the clock, praying for it to hit 5 PM. Our mission is
                to embody the despair, exhaustion, and dark humor of office
                life.
              </p>
              {/* <br /> */}
              <p className=" mt-5">
                Bored Office Guy represents the thousands of lifeless meetings,
                ridiculous deadlines, and awkward small talk that haunt us all.
                With $BoredOG, we’re turning the grind into a laugh and a
                movement. Why? Because if we can’t beat the system, we might as
                well meme it.
              </p>
              <Link href={"https://t.me/BoredOfficeGuyPortal"}>
                <button className=" hover:bg-background-10 hover:border-background-10 mt-5 border-primary-5 border-[2px] bg-primary-5 w-[150px] font-semibold py-3 rounded-lg text-white">
                  Learn More
                </button>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" md:max-w-[40%] mt-10 md:mt-0 md:order-1"
            >
              <img
                src="/bored-og-car.jpeg"
                alt="bored og"
                className=" w-full rounded-xl"
              />
            </motion.div>
          </div>
        </section>
        <section id="vision" className=" bg-primary-5 py-5 px-5 xl:px-24">
          <div className=" flex flex-col md:flex-row gap-x-5 items-center justify-between">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" md:max-w-[600px]"
            >
              <h2 className="text-4xl font-bold">
                Redefining the Vision -<span> Life Beyond the 9-to-5</span>
              </h2>
              <p className=" mt-5">
                Bored Office Guy is not alone, and neither are you. We stand
                with every 9-to-5 warrior who’s dreamed of smashing their alarm
                clock, flipping their desk, and walking into the sunset. Office
                life? It’s modern-day slavery, and we’ve had enough.
              </p>
              {/* <br /> */}
              <p className=" mt-5">
                At $BoredOG, we envision a world where office workers unite, not
                for a team-building seminar, but to rise above the drudgery
                together. We’re here to build a community that doesn’t just
                survive the grind, but escapes it. Ironically, our goal is to
                enslave you to our movement. Together, we’ll meme, laugh, and
                strategize our way out of the cubicle life.
              </p>
              {/* <button className=" mt-5 border-primary-5 border-[2px] bg-primary-5 w-[150px] font-semibold py-3 rounded-lg text-white">
                  Learn More
                </button> */}
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className=" md:max-w-[40%] mt-10 md:mt-0"
            >
              <img
                src="/bored-og-vision.jpeg"
                alt="bored og"
                className=" w-full rounded-xl"
              />
            </motion.div>
          </div>
        </section>
        <section id="storymap" className="  py-5 px-5 xl:px-24">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
          >
            <div className=" md:text-center md:max-w-[650px] mx-auto">
              <h2 className=" text-primary-10 text-3xl font-bold">Story Map</h2>
              <p className=" text-background-10 mt-3">
                The story of Bored Office Guy unfolds across ten thrilling
                PowerPoint presentations. Will he escape the endless routine, or
                is he doomed to perpetual Excel Sheets and passive-aggressive
                emails? Only time (and the community) will tell.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className=" mt-10 flex flex-col justify-center md:justify-center md:flex-row gap-y-10 gap-x-5 flex-wrap"
          >
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 1
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  The Monday Grind
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$250k</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 2
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  Home, Sweet Home
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$500k</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 3
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  Burnout
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$1m</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 4
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  A Speech of the Wolf of Wallstreet
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$2.5m</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 5
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  The Big Deal
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$5m</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 6
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  Chaos at the Top
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$10m</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 7
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  I Know It Was You, Elon!
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$25m</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 8
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  Rock Bottom
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$50m</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 9
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  Judgement Day
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$75m</p>
              </div>
            </div>
            <div className="w-fit mx-auto md:mx-0 flex flex-col items-center bg-gray-100 shadow-lg rounded-lg px-5 py-12">
              <div className=" ">
                <h3 className=" text-background-10 font-bold text-2xl text-center">
                  Powerpoint Presentation 10
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl text-center mb-4">
                  I Am Not Fucking Leaving
                </h4>
              </div>
              <div className=" mt-2">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
              <div>
                <p className=" font-bold text-2xl">$100m</p>
              </div>
            </div>

            {/* <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 10
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  I Am Not Fucking Leaving
                </h4>
                <Link
                  href={"/"}
                  className=" text-background-10 text-sm font-medium px-7 bg-primary-5 py-3 rounded-md "
                >
                  JOIN US
                </Link>
              </div>
              <div className=" mt-7">
                <img
                  src="/lock.png"
                  alt="lock image"
                  className=" w-[200px] h-[200px]"
                />
              </div>
            </div> */}
          </motion.div>
        </section>
        <section id="joinUs" className=" bg-primary-10 px-5 py-16 ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className=" text-center "
          >
            <h2 className=" text-white text-3xl font-bold">Join Us</h2>
            <p className=" text-gray-300 max-w-[550px] mx-auto mt-3">
              Tired of your boss’s terrible jokes? Sick of mandatory meetings
              about mandatory meetings? Join us. We’re building a community of
              like-minded office escapees who’ve had enough. Let’s turn burnout
              into a movement and memes into freedom.
            </p>
            <div className=" flex items-center gap-4 justify-center mt-5">
              {" "}
              <Link href={"https://t.me/BoredOfficeGuyPortal"}>
                <button className=" hover:bg-primary-5 hover:text-primary-10 border-primary-5 border-[2px] w-[150px] font-semibold py-3 rounded-lg text-primary-5 text-sm md:text-base">
                  Join Telegram
                </button>
              </Link>
              <Link
                href={
                  "https://x.com/boredofficeguy_?s=21&t=Z5JU_OZ_VRtAy5u0T8DTIA"
                }
              >
                <button className="hover:bg-transparent hover:text-primary-5 border-primary-5 border-[2px] bg-primary-5 w-[150px] font-semibold py-3 rounded-lg text-primary-10">
                  Join X
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className=" bg-background-10 px-5 md:12 lg:px-24 py-16">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
        >
          <div className=" flex items-center justify-center">
            <img src="/logo.svg" alt="logo" className=" w-64" />
          </div>
          <ul className="flex flex-col md:flex-row items-center gap-5 justify-center mt-5">
            <li>
              <Link
                href={"/"}
                className=" hover:text-white text-primary-5 text-sm font-medium"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href={"#about"}
                className=" hover:text-white text-primary-5 text-sm font-medium"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href={"#vision"}
                className=" hover:text-white text-primary-5 text-sm font-medium"
              >
                VISION
              </Link>
            </li>
            <li>
              <Link
                href={"#storymap"}
                className=" hover:text-white text-primary-5 text-sm font-medium"
              >
                STORYMAP
              </Link>
            </li>
            {/* <li>
              <Link href={"/"} className=" text-white text-sm font-medium">
                TOKENOMICS
              </Link>
            </li> */}
            <li>
              <Link
                href={"#joinUs"}
                className=" hover:bg-primary-10 hover:text-white text-background-10 text-sm font-medium px-7 bg-primary-5 py-3 rounded-md"
              >
                JOIN US
              </Link>
            </li>
          </ul>
          <p className=" text-white max-w-[650px] mx-auto mt-10">
            <b>Legal Disclaimer:</b> this token is a fun meme with no intrinsic
            financial value. Investors should only invest what they are prepared
            to lose, given the possibility of price volatility. We do not hold
            any responsibility for changes in market value or price
            fluctuations.
          </p>
          <p className=" text-center font-bold text-white text-sm mt-16">
            Copyright Notice: © 2025 $BoredOG
          </p>
        </motion.div>
      </footer>
    </>
  );
}
