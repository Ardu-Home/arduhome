import { CategoryCardProps } from "@/types/SectionIntro";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  description,
  background,
  href,
}) => {
  return (
    <>
      <div className={`space-y-4 ${background ? "bg-ocean p-4" : ""}`}>
        <Icon icon={icon} width={30} height={30} />
        <h3>{title}</h3>
        <p>{description}</p>
        {href && <a href={href} className="uppercase">Saiba Mais</a>}
      </div>
    </>
  );
};

export default CategoryCard;
