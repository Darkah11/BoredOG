import Image from "next/image";
import Link from "next/link";
import Slider from "./component/Slider";

export default function Home() {
  return (
    <>
      <nav className=" fixed top-0 z-50 flex justify-between items-center w-full px-5 xl:px-24 py-8">
        <Link href={"/"}>
          <img src="/logo.svg" alt="bored og logo" className="w-40" />
        </Link>
        <div className=" md:hidden">
          <button className=" w-[30px] flex flex-col gap-2">
            <span className="w-full bg-white h-[2px]"></span>
            <span className="w-full bg-white h-[2px]"></span>
            <span className="w-full bg-white h-[2px]"></span>
          </button>
        </div>
        <ul className=" hidden md:flex items-center gap-5">
          <li>
            <Link href={"/"} className=" text-white text-sm font-medium">
              HOME
            </Link>
          </li>
          <li>
            <Link href={"/"} className=" text-white text-sm font-medium">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href={"/"} className=" text-white text-sm font-medium">
              VISION
            </Link>
          </li>
          <li>
            <Link href={"/"} className=" text-white text-sm font-medium">
              STORYMAP
            </Link>
          </li>
          <li>
            <Link href={"/"} className=" text-white text-sm font-medium">
              TOKENOMICS
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className=" text-background-10 text-sm font-medium px-7 bg-primary-5 py-3 rounded-md"
            >
              JOIN US
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <section className=" hero relative bg-background-10 flex flex-col justify-center">
          <div className="' flex flex-col gap-5 absolute bottom-1 right-1">
            <Link href={"/"}>
              <img
                src="/x.svg"
                className=" w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                alt=""
              />
            </Link>
            <Link href={"/"}>
              <img
                src="/telegram.svg"
                className="  w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                alt=""
              />
            </Link>
            <Link href={"/"}>
              <img
                src="/tiktok.svg"
                className="  w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
                alt=""
              />
            </Link>
          </div>
          <div>
            <div className=" w-fit m-auto ">
              <h2 className=" text-primary-5 font-bold text-5xl md:text-8xl lg:text-9xl">
                JOIN THE
              </h2>
              <h2 className=" text-primary-5 font-bold text-5xl md:text-8xl lg:text-9xl pl-[120px] md:pl-[250px]  lg:pl-96">
                STRUGGLE
              </h2>
            </div>
            <div className=" mx-auto mt-4 md:ml-24 pr-10 border-t border-primary-5 max-w-52">
              <p className="text-primary-5 ">
                “Why stress? The work gets done… eventually. Or doesn’t. Either
                way, we’re here.”
              </p>
            </div>
          </div>
        </section>
        <section className=" px-5 xl:px-24">
          <div className=" flex flex-col md:flex-row items-center justify-between py-10">
            <div className=" max-w-[550px]">
              <h2 className=" text-4xl font-bold">$BoredOG</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                aut est quae ducimus harum ea consectetur ipsa voluptatem, vel
                temporibus veritatis. Voluptas voluptatum ullam quidem odit quis
                officiis a repellat!
              </p>
              <div className=" flex gap-3 items-center mt-5">
                <button className=" border-background-10 border-[2px] bg-background-10 w-[150px] font-semibold py-3 rounded-lg text-white">
                  Dexscreener
                </button>
                {/* <button className=" border-background-10 border-[2px] w-[150px] font-semibold py-3 rounded-lg text-background-10">Dextools</button> */}
              </div>
            </div>
            <div className=" relative mt-8 md:mt-0">
              <img
                src="/notepad.png"
                alt="notepad"
                className=" w-[600px] md:min-w-[400px] lg:min-w-[500px]"
              />
              <div className=" absolute top-5 md:top-16 left-16 mx-auto flex flex-col">
                <h3 className=" text-xl font-semibold md:text-xl lg:text-2xl">
                  Contract Address
                </h3>
                <p className=" hidden lg:block">
                  8TrFcKJDWc3Co4c7n9PR4Nb <br />
                  K9gnzaXfPfPhpm18gpump/
                </p>
                <p className=" block lg:hidden">
                  8TrFcKJDWc3Co4c7n9
                  <br />
                  PR4NbK9gnzaXfPfPhp
                  <br />
                  m18gpump/
                </p>
                {/* <p className=" text-xs md:hidden">
                  8TrFcKJDWc3Co4c7n
                  <br />
                  9PR4NbK9gnzaXfPfP
                  <br />
                  hpm18gpump/
                </p> */}
                <button className=" mx-auto border-background-10 border-[2px] w-[100px] md:w-[150px] mt-5 md:mt-7 lg:mt-10 font-semibold py-1 md:py-3 rounded-lg text-background-10 text-sm md:text-base">
                  Copy CA
                </button>
              </div>
              <div className=" absolute bottom-16 md:top-32 right-28   lg:right-12 flex flex-col">
                <button className=" border-background-10 border-[2px] bg-background-10 w-[100px] md:w-[150px] font-semibold py-1 md:py-3 rounded-lg text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div>
            <Slider />
          </div>
          <div className=" flex flex-col md:flex-row gap-x-5 items-center justify-between mt-5">
            <div className=" md:max-w-[600px] md:order-2">
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
              <button className=" mt-5 border-primary-5 border-[2px] bg-primary-5 w-[150px] font-semibold py-3 rounded-lg text-white">
                Learn More
              </button>
            </div>
            <div className=" md:max-w-[40%] mt-10 md:mt-0 md:order-1">
              <img
                src="/bored-og-car.jpeg"
                alt="bored og"
                className=" w-full rounded-xl"
              />
            </div>
          </div>
        </section>
        <div className=" mt-10">
          <img src="/bored-og-banner.jpg" alt="bored og banner" />
        </div>
        <section className=" bg-primary-5 py-5 px-5 xl:px-24">
          <div className=" flex flex-col md:flex-row gap-x-5 items-center justify-between">
            <div className=" md:max-w-[600px]">
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
            </div>
            <div className=" md:max-w-[40%] mt-10 md:mt-0">
              <img
                src="/bored-og-vision.jpeg"
                alt="bored og"
                className=" w-full rounded-xl"
              />
            </div>
          </div>
        </section>
        <section className=" bg-primary-10 py-5 px-5 xl:px-24">
          <div>
            <div className=" md:text-center md:max-w-[650px] mx-auto">
              <h2 className=" text-white text-3xl font-bold">Story Map</h2>
              <p className=" text-primary-5 mt-3">
                The story of Bored Office Guy unfolds across ten thrilling
                PowerPoint presentations. Will he escape the endless routine, or
                is he doomed to perpetual Excel Sheets and passive-aggressive
                emails? Only time (and the community) will tell.
              </p>
            </div>
          </div>
          <div className=" mt-10 flex flex-col gap-y-10">
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 1
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  The Monday Grind
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
            </div>
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 2
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  Home, Sweet Home
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
            </div>
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 3
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  Burnout
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
            </div>
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 4
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  A Speech of the Wolf of Wallstreet
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
            </div>
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 5
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  The Big Deal
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
            </div>
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 6
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  Chaos at the Top
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
            </div>
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 7
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  I Know It Was You, Elon!
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
            </div>
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 8
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  Rock Bottom
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
            </div>
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl">
                  Powerpoint Presentation 9
                </h3>
                <h4 className=" text-primary-5 font-bold text-xl mb-4">
                  Judgement Day
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
            </div>
            <div>
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
            </div>
          </div>
        </section>
        <section className=" px-5 py-16 ">
          <div className=" text-center ">
            <h2 className=" text-primary-10 text-3xl font-bold">Join Us</h2>
            <p className=" max-w-[550px] mx-auto mt-3">
              Tired of your boss’s terrible jokes? Sick of mandatory meetings
              about mandatory meetings? Join us. We’re building a community of
              like-minded office escapees who’ve had enough. Let’s turn burnout
              into a movement and memes into freedom.
            </p>
            <div className=" flex items-center gap-4 justify-center mt-5">
              {" "}
              <button className=" border-background-10 border-[2px] w-[150px] lg:mt-10 font-semibold py-3 rounded-lg text-background-10 text-sm md:text-base">
                Join Telegram
              </button>
              <button className=" border-background-10 border-[2px] bg-background-10 w-[150px] font-semibold py-3 rounded-lg text-white">
                Join X
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
