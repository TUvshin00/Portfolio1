import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { GlobeDemo } from "./components/Glob";

const Hero = () => {
  const words = "Hello i am Tuvshin";
  const words1 = "I'am Software Engineer ";
  const words2 =
    "  Hello, my name is Tuvshin, I am 18 years old, I graduated from the 38th German school in the summer of 2024. Then I start studying at Pinecone Academy";
  return (
    <div className="pb-20 pt-36 h-[4000px]">
      <div className="flex justify-end  items-center">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full w-[50vw] h-[80vh]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80  h-[80vh]
          w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="uppercase tracking-widest text-3xl text-center text-blue-100 max-w-80 lg:max-w-[400px] lg:flex lg:justify-start lg:flex-col lg:items-center">
          Tuvshin's Portfolio
        </h3>
        <Menu />
      </div>
      <div className="mt-[200px]  ">
        <div className="h-screen">
          <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
            <div className=" absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
          <div className="flex justify-evenly gap-5">
            <div className="max-w-[89vw] md:max-w-20 lg:max-w[60vw] flex flex-col justify-center items-start ">
              <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 lg:max-w-[400px] lg:flex lg:justify-start lg:flex-col lg:items-center">
                <TextGenerateEffect
                  duration={1}
                  filter={true}
                  words={words}
                  className="text-center text-[40px] lg:w-[300px] md:w-[300px]"
                />
                <TextGenerateEffect
                  duration={1}
                  filter={true}
                  words={words1}
                  className="text-center text-[40px] lg:w-[300px] md:w-[300px]"
                />
              </h1>
            </div>
            <div>
              <Avatar />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center ">
              <h3 className="text-2xl font-thin text-blue-100">About Me</h3>
            </div>
            <div className="flex justify-around items-center mt-[100px] ">
              <div>
                <TextGenerateEffect
                  duration={1}
                  filter={true}
                  words={words2}
                  className="uppercase tracking-widest text-xl  text-white max-w-80 lg:max-w-[400px] lg:flex lg:justify-start lg:flex-col lg:items-center"
                />
              </div>
              <div className="w-[700px]">
                <GlobeDemo />
              </div>
            </div>
            <div className="flex justify-center gap-36 items-center mt-[50px]">
              <div className="avatar">
                <div className="w-[100px] rounded-full">
                  <img src="https://instagram.fuln8-1.fna.fbcdn.net/v/t1.15752-9/462548464_1053133256078031_5498301594125719827_n.jpg?stp=dst-jpg_s403x403&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=pDyjVaztBdQQ7kNvgEIytmM&_nc_zt=23&_nc_ht=instagram.fuln8-1.fna&_nc_gid=ADxPwHg-K_2TZnBegNr6LKh&oh=03_Q7cD1QHpmjr8Gy_bZkpPQUz-iBl6bDCOFIdTV8Ku2iGLmOhTCw&oe=67350DD8" />
                </div>
              </div>
              <div className="border-2 w-[200px] border-blue-500"></div>
              <div className="avatar">
                <div className="w-[100px] rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CiTFpFgtgX6gfMv1ILNcPgDic__3g2ukVw&s" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Hero;
