"use client";
import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;
}

const Welcome: FC<ButtonProps> = ({ onClick }) => {
  return (
    <section className="text-lg h-screen sm:bg-bg sm:bg-no-repeat sm:bg-right-top sm:text-base xl:bg-contain">
      <div className="sm:max-w-2xl sm:mx-auto sm:flex sm:flex-col sm:justify-center h-full md:max-w-2xl md:justify-start lg:max-w-4xl xl:max-w-7xl xl:justify-center">
        <h1 className="font-black mt-0 text-4.5xl leading-none mb-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:mt-10">
          Visual <br />
          Analogue <br />
          Measurement <br />
          Scales <br />
          <span className="text-secondary text-4xl">Mood State Assessment Tool</span>
        </h1>
        <p className="sm:w-3/5 md:text-2xl md:font-medium md:w-5/6 lg:w-3/5 lg:text-xl xl:text-2xl xl:w-4/5">Use this tool to assess your mood state on a scale from 0 to 100 .</p>
        <div className="p-5 bg-white rounded-3xl mt-5 sm:w-4/5 md:w-5/6 md:font-medium md:text-xl md:px-8 xl:text-2xl lg:w-4/5">
          <p className="paragraph-dark md:py-4">The questionnaire consists of 8 questions and will take approximately 2 minutes to answer. If you are ready, click on the Get Started button below.</p>
          <input id="btn-getStarted" type="button" value="Get Started" onClick={onClick} className="transition-all duration-500 hover:bg-bgAccentHover hover:cursor-pointer mt-5 bg-accent p-5 px-10 sm:p-4 sm:px-10 xl:text-2xl lg:text-xl border-none rounded-br-full rounded-bl-half rounded-tl-half text-white font-bold" />
        </div>
        <p className="text-sm italic hidden md:block mt-5 w-3/5 md:text-sm md:w-5/6 lg:w-3/5 lg:text-sm xl:w-4/5 xl:text-base">
          This tool is based on the eight mood states taken from research undertaken by Sanguinetti et al., 2020 - Transcranial Focused Ultrasound to the Right Prefrontal Cortex Improves Mood and Alters Functional Connectivity in Humans. Please see the article{" "}
          <a href="https://oa.mg/work/10.3389/fnhum.2020.00052" target="_blank" className="text-link">
            https://oa.mg/work/10.3389/fnhum.2020.00052
          </a>{" "}
          for details of these mood states.
        </p>
        <p className="text-sm italic md:hidden mt-5 sm:text-xs">
          This tool is based on the eight mood states taken from research undertaken by Sanguinetti et al., 2020 - Transcranial Focused Ultrasound to the Right Prefrontal Cortex Improves Mood and Alters Functional Connectivity in Humans. Please see the article{" "}
          <a href="https://oa.mg/work/10.3389/fnhum.2020.00052" target="_blank" className="text-link">
            https://oa.mg/work/10.3389/fnhum.2020.00052
          </a>{" "}
          for details of these mood states.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
