import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionIntroProps from "@/types/SectionIntro";

export const SectionIntro: React.FC<SectionIntroProps> = ({
  tag,
  title,
  href,
  buttonText,
}) => {
  return (
    <>
      <div>
        <span className="block text-sm font-normal uppercase">{tag}</span>
        <div className="flex-between">
            <h2 className="inline leading-12">{title}</h2>
            {buttonText && (
              <Button asChild>
                <Link href={`/${href}`}>{buttonText}</Link>
              </Button>
            )}
        </div>
      </div>
    </>
  );
};
