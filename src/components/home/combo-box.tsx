"use client";
import { useState } from "react";
import RiotFist from "../svg/riot-fist";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const FocusSection = () => {
  return (
    <section className="absolute z-10 rounded-md w-full h-auto min-h-40 top-20 bg-background border border-input">
      {/* <div className="w-full h-full flex flex-col">
        <div className="w-full h-10"></div>
        <Separator />
      </div> */}
    </section>
  );
};

const ComboBox = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      <div className="flex relative ">
        <div className="w-20 h-20 p-1 absolute flex justify-center items-center bg-slate-700 rounded-l-md">
          <div className="w-10 h-12 relative border-b-2 border-b-red-valorant fill-slate-50">
            <RiotFist />
          </div>
        </div>
        <div className="w-full">
          <Input
            id="test"
            type="text"
            placeholder="test"
            className="pl-24 h-20 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        {isInputFocused && <FocusSection />}
      </div>
    </>
  );
};

export default ComboBox;
