import { useRouter } from "next/router";
import React from "react";

const Navbar: React.FC = () => {
  const { push } = useRouter();
  return (
    <div className="w-full p-5 flex flex-row items-center justify-between">
      <h1
        className="font-poppins text-3xl cursor-pointer active:scale-y-150 transition duration-200 ease-linear"
        onClick={() => push("/")}
      >
        Marketizer
      </h1>
      <div className="font-poppins text-2xl">GPT-3</div>
    </div>
  );
};

export default Navbar;
