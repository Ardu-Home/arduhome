import { SectionIntro } from "@/components/common/SectionIntro";
import { portfoItem } from "@/data/portfo";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export const PortfoSection = () => {
  return (
    <>
      <section className="section">
        <SectionIntro
          tag="Portfo"
          title="Empowering Industries with Intelligent Automation"
          buttonText="Discover More"
        />
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Image
              src={"/assets/image/background/hero.png"}
              alt=""
              width={650}
              height={50}
              className="w-full h-auto"
            />
          </div>
          <div className="h-full flex flex-col justify-between space-y-5">
              {portfoItem.map((portfo) => (
                <div key={portfo.id} className="lg:flex gap-10">
                  <Icon icon={portfo.icon} width={60} height={60} className="text-ocean" />
                  <div className="space-y-5">
                    <h3 className="text-3xl font-bold">{portfo.title}</h3>
                    <p className="text-slate">{portfo.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
