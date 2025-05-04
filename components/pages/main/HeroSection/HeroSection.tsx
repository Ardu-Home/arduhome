import { Button } from "@/components/ui/button";
import HeroCard from "@/components/pages/main/HeroSection/HeroCard"

export const HeroSection = () => {
  return (
    <>
      <section className="relative grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <div className="text-5xl md:text-6xl font-bold flex flex-col gap-4">
            <span className="block text-sm font-normal uppercase">
              AI & Robotic Engineering
            </span>
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
          <HeroCard/>
        </div>
        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </>
  );
};
