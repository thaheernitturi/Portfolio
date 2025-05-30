import { INTRO_CONTENT } from "../constants";
import profile from "../assets/profile.png"
const Intro= () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-15 text-6xl font-sans font-thin tracking-tight lg:mt-16
                lg:text-8xl">
                  <span className="bg-gradient-to-r from-pink-50 via-slate-500 to-purple-400
                bg-clip-text  tracking-tight 
                text-transparent">Thaheer Nitturi</span>
                </h1>
                <span className="bg-gradient-to-r from-pink-50 via-slate-500 to-purple-400 
                bg-clip-text text-4xl tracking-tight 
                text-transparent">Full Stack Developer</span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{INTRO_CONTENT}</p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-content">
                    <img src={profile} alt="profilepic"/>
            </div>
            </div>
        </div>

    </div>
  );
};

export default Intro;