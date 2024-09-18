import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  return (
    <section className="h-screen bg-neutral-900 flex items-center">
                <AnimatedBackground/>
      <div className="w-full h-1/2 flex justify-evenly items-center relative ">
        <div className="relative  h-full">

          <img className="relative rounded-full z-10 h-full" src="./src/assets/avatar.jpeg" alt="" />
        </div>
        <div className="text-white flex flex-col">
          <h1 className="text-5xl">Rian Britto Pereira</h1>
          <h2 className="text-3xl">FullStack Developer</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
