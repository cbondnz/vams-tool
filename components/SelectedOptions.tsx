import React, { FC } from "react";

interface ChildComponentProps {
  happy: number;
  sad: number;
  calm: number;
  tense: number;
  effort: number;
  sleepy: number;
  alert: number;
  weary: number;
  ga: number;
  gv: number;
}

const SelectedOptions: FC<ChildComponentProps> = ({ happy, sad, calm, tense, effort, sleepy, alert, weary, ga, gv }) => {
  return (
    <aside className="hidden w-1/3 bg-white rounded-full p-6 border-2 border-primary shadow-box sm:flex flex-col sm:p-3 lg:p-6">
      <h3 className="text-2xl font-semibold sm:text-lg text-center lg:text-2xl xl:text-2xl xl:mb-5">Mood State Scorings</h3>
      <ul className="p-0 list-inside list-none">
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2756'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-xl xl:mb-10">
          Happy: <span id="stat-happy">{happy}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2756'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-xl xl:mb-10">
          Sad: <span id="stat-sad">{sad}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2756'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-xl xl:mb-10">
          Calm: <span id="stat-calm">{calm}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2756'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-xl xl:mb-10">
          Tense: <span id="stat-tense">{tense}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2756'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-xl xl:mb-10">
          Effort: <span id="stat-effort">{effort}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2756'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-xl xl:mb-10">
          Sleepy: <span id="stat-sleepy">{sleepy}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2756'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-xl xl:mb-10">
          Alert: <span id="stat-alert">{alert}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2756'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-xl xl:mb-10">
          Weary: <span id="stat-weary">{weary}</span>
        </li>
      </ul>
      <div id="global">
        <hr />
        <h3 className="text-2xl font-semibold sm:text-lg text-center xl:text-2xl xl:mt-5">
          Global Affect: <span id="stat-ga">{ga}</span>
        </h3>
        <h3 className="text-2xl font-semibold sm:text-lg text-center xl:text-2xl xl:mt-5">
          Global Vigor: <span id="stat-ga">{gv}</span>
        </h3>
      </div>
    </aside>
  );
};

export default SelectedOptions;
