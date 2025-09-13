import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-fit px-4 py-2 gap-5 bg-indigo-600 text-zinc-300 rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
