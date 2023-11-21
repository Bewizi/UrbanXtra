import HeroImg from "../assets/img/Tokunbo.png";

const Hero = () => {
  return (
    <section id="home" className="flex space-x-4 justify-center items-center px-24 py-10 sm:flex-wrap padding bg-cyan-950 ">
      <div>
        <h1 className="text-center text-5xl font-bold leading-tight sm:text-2xl md:text-start lg:text-start xl:text-start 2xl:text-start mb-5 md:text-">
          Welcome to the world of <span> Urban Xtra </span>
        </h1>
        <p className="text-center md:text-start lg:text-start xl:text-start 2xl:text-start mb-5 sm:text-[0.7rem] md:text-[0.8rem]">
          Step into the world of style and functionality with our exquisite bead
          bag collection. These vibrant and eye-catching accessories are more
          than just fashion statements; they're a fusion of artistry and
          utility.
        </p>
      </div>
      <div>
        <img src={HeroImg} alt="" className="rounded-md  overflow-hidden" width={1000} height={500} />
      </div>
    </section>
  );
};

export default Hero;
