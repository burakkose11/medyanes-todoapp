import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderComp = () => {
  return (
    <div className="bg-[#014FB6] text-white justify-between">
      <div className="container h-20 flex items-center justify-between mx-auto ">
        <div>
          <Image src="/medyanes-360-logo.webp" width={201} height={50} />
        </div>
        <div className="space-x-4 font-semibold">
          <Link href="/">Üye Ol</Link>
          <Link href="/">Giriş Yap</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
