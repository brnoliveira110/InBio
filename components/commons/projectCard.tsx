import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-[430px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src="/assets/images/project1.jpg"
          alt="Projeto"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          10 cliques
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold">Projeto 1</span>
          <span className="text-content-body text-sm">
            Descrição super detalhada do que o projeto faz
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
