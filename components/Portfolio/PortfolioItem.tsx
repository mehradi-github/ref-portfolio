import React, { FC } from "react";
import Image from "next/image";

const PortfolioItem: FC = () => {
  return (
    <div className="w-full  border-gray-200 border-2 ">
      <Image
        height={180}
        width={180}
        src="/assets/images/profile.jpg"
        alt="profile"
        className="mx-auto"
      />
      <div className="bg-gray-300 bottom-0 py-4 transition-all duration-500 ease-linear text-center">
        <a href="#">
          <h3 className="text-gray-700 font-semibold text-lg ">Profile</h3>
        </a>
        <h5>Next.js and TailwindCSS</h5>
      </div>
    </div>
  );
};
export default PortfolioItem;
