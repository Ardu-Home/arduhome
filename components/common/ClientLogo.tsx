import Image from "next/image";
import React from "react";
import { clientLogo } from "@/data/client";

const ClientLogo = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <ul className="flex-center gap-5 animate-infinite-scroll p-10">
          {clientLogo.map((client, index) => (
            <li key={index} className="min-w-[260px] h-[140px] bg-background rounded-2xl p-4 flex-center card-shadow">
              <Image
                src={client.src}
                width={160}
                height={140}
                alt={client.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ClientLogo;
