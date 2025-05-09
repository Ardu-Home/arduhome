import { CategoryItem } from "@/types/common.types.";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CategoryCard: React.FC<CategoryItem> = ({
  icon,
  title,
  description,
  background,
  href,
}) => {
  return (
    <>
      <div className={`space-y-4 ${background ? "bg-ocean p-4" : ""}`}>
        <Icon icon={icon} width={50} height={50} />
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-slate">{description}</p>
        {href && (
          <a href={href} className="uppercase">
            Saiba Mais
          </a>
        )}
      </div>
    </>
  );
};

export default CategoryCard;
