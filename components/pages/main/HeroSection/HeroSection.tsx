import { Button } from "@/components/ui/button";
import {HeroCards} from "@/components/pages/main/HeroSection/HeroCards";
import { SectionIntro } from "@/components/common/SectionIntro";

export const HeroSection = () => {
  return (
    <>
      <section className="relative grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start mt-12 md:mt-0 space-y-6 z-30">
          <div className="text-5xl md:text-6xl font-bold flex flex-col gap-4">
            <SectionIntro tag="AI & Robotic Engineering"/>
            <h1 className="inline leading-16">
              <span className="text-gradient-primary">Changing Your Idea</span>{" "}
              of What Automation {""}
              <span className="text-gradient-primary">Can Do.</span>{" "}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Build your React landing page effortlessly with the required
            sections to your project.
          </p>
          <Button
            variant={"primary_gradient"}
            className="rounded-full hover:scale-105 duration-300 ease-in"
          >
            Discover More
          </Button>
        </div>
        {/* Hero cards sections */}
        <div className="z-10">
          <HeroCards />
        </div>
        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </>
  );
};
