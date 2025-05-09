import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionIntroProps } from "@/types/common.types.";

export const SectionIntro: React.FC<SectionIntroProps> = ({
  tag,
  title,
  href,
  buttonText,
}) => {
  return (
    <>
      <div className="text-4xl md:text-5xl font-bold space-y-5 lg:text-start text-center">
        <span className="block text-sm font-normal uppercase">{tag}</span>
        <div className="flex-between grid lg:grid-cols-2 gap-5">
          <h2 className="inline leading-14">{title}</h2>
          {buttonText && (
            <div className="flex justify-center lg:justify-end items-center">
              <Button variant={"primary_gradient"} size={"lg"} className=" rounded-full" asChild>
                <Link href={`/${href}`}>{buttonText}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
