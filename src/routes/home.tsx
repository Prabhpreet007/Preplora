import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/ui/marquee-img";
import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee"
import { Link } from "react-router";


const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold">
              – A better way to
            </span>
            <br />
            improve your interview chances and skills
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Enhance your interview preparation with AI-driven insights. Get
            tailored guidance, practice smarter, and boost your chances of
            standing out in every interview.
          </p>
        </div>

        {/* image section */}

        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md relative overflow-hidden">
          {/* Background Image */}
          <img
            src="src/assets/img/hero.jpg"
            alt="AI Interview"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Top-left Label */}
          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/80 text-sm font-medium shadow-sm">
            Inteviews Copilot&copy;
          </div>

          {/* Bottom-right Content */}
          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-4 rounded-lg bg-white/90 shadow-md">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-neutral-500 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              distinctio natus, quos voluptatibus magni sapiente.
            </p>
            <Button className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition">
              Generate <span className="text-lg">✨</span>
            </Button>
          </div>
        </div>


      </Container>

      {/* marquee section */}
<div className="w-full my-12">
  <Marquee pauseOnHover>
    <MarqueImg img="src/assets/img/logo/firebase.png" />
        <MarqueImg img="src/assets/img/logo/meet.png" />
        <MarqueImg img="src/assets/img/logo/zoom.png" />
        <MarqueImg img="src/assets/img/logo/microsoft.png" />
        <MarqueImg img="src/assets/img/logo/tailwindcss.png" />
        <MarqueImg img="src/assets/img/logo/firebase.png" />
        <MarqueImg img="src/assets/img/logo/meet.png" />
        <MarqueImg img="src/assets/img/logo/zoom.png" />
        <MarqueImg img="src/assets/img/logo/microsoft.png" />
        <MarqueImg img="src/assets/img/logo/tailwindcss.png" />
  </Marquee>
</div>


<Container className="py-8 space-y-8">
  <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
    Unleash your potential with personalized AI insights and targeted
    interview practice.
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
    {/* Left Side - Image */}
    <div className="col-span-1 md:col-span-3">
      <img
        src="src/assets/img/office.jpg"
        alt="Office workspace"
        className="w-full max-h-96 rounded-md object-cover"
      />
    </div>

    {/* Right Side - Text & Button */}
    <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col justify-center">
      <p className="text-center text-muted-foreground">
        Transform the way you prepare, gain confidence, and boost your chances
        of landing your dream job. Let AI be your edge in today&apos;s
        competitive job market.
      </p>

      <Link to={"/generate"} className="w-full flex justify-center">
        <Button className="w-3/4">
          Generate <Sparkles className="ml-2" />
        </Button>
      </Link>
    </div>
  </div>
</Container>


    </div>
  );
};

export default HomePage;
