import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/logo/logo.svg"
          alt="ProjectInBio Logo"
          width={27}
          height={32}
        />
        <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha Página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  );
};

export default Header;
