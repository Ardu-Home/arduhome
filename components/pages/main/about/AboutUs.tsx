import { SectionIntro } from "@/components/common/SectionIntro";
import React from "react";
import { category } from "@/data/category";
import CategoryCard from "@/components/common/CategoryCard";

const AboutUs: React.FC = () => {
  return (
    <>
      <section className="space-y-16">
        <SectionIntro
          tag="About Us"
          title="Innovating the Future with AI and Robotics"
        />
        <div className="grid lg:grid-cols-3 space-x-28">
          {category.map((categorie) => (
            <CategoryCard
              key={categorie.id}
              icon={categorie.icon}
              title={categorie.title}
              description={categorie.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
