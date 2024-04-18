"use client";
import React, { FC } from "react";
import FormHeading from "./FormHeading";

interface ChildComponentProps {
  onMoodChange: (selectedValue: number) => void;
  mood: number;
  lower: string;
  upper: string;
  activeStep: number;
}

const Mood: FC<ChildComponentProps> = ({ onMoodChange, mood, lower, upper, activeStep }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onMoodChange(parseInt(event.target.value));
  };

  return (
    <section>
      {activeStep == 6 ? <FormHeading heading="How much of an effort is it for you to do anything?" /> : <FormHeading heading="Please indicate on the scale the position that best represents how you feel." />}

      <form className="text-2xl font-semibold flex gap-1 xl:text-3xl pt-20">
        <label htmlFor="mood">
          {lower}
          <input type="range" id="mood" name="mood" min={0} max={100} value={mood} onChange={handleChange} className="w-56 mr-5 slider" />
          {upper}
        </label>
      </form>
    </section>
  );
};

export default Mood;
