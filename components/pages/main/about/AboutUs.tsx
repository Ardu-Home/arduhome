import { SectionIntro } from "@/components/common/SectionIntro";
import React from "react";
import { category } from "@/data/category";
import CategoryCard from "@/components/common/CategoryCard";
import ClientLogo from "@/components/common/ClientLogo";

const AboutUs: React.FC = () => {
  return (
    <>
      <section className="space-y-16">
        <SectionIntro
          tag="About Us"
          title="Innovating the Future with AI and Robotics"
        />
        <div className="grid lg:grid-cols-3 gap-16">
          {category.map((categorie) => (
            <CategoryCard
              icon={categorie.icon}
              title={categorie.title}
              description={categorie.description}
            />
          ))}
        </div>
        <div>
            <ClientLogo />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
