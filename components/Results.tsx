"use client";
import React, { FC, useState, useEffect } from "react";
import FormHeading from "./FormHeading";

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

const Results: FC<ChildComponentProps> = ({ happy, sad, calm, tense, effort, sleepy, alert, weary, ga, gv }) => {
  const [copy, setCopy] = useState<boolean>(false);
  const [download, setDownload] = useState<boolean>(false);
  const [string, setString] = useState<string>("");

  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(string);
  };

  const handleDownload = () => {
    setDownload(true);
    const csvContent = `data:text/csv;charset=utf-8,${string}`;
    const encodedURI = encodeURI(csvContent);
    window.open(encodedURI);
  };

  useEffect(() => {
    const str = `GA,${ga}\nGV,${gv}\nHappy,${happy}\nSad,${sad}\nCalm,${calm}\nTense,${tense}\nEffort,${effort}\nSleepy,${sleepy}\nAlert,${alert}\nWeary,${weary}`;
    setString(str);
  }, [happy, sad, calm, tense, effort, sleepy, alert, weary]);

  return (
    <section>
      <FormHeading heading="Results" />
      <h3 className="my-5 text-xl sm:text-base xl:text-2xl">Based on the answers provided to the questionnaire, your mood state scores are outlined.</h3>
      <p className="text-sm italic">
        Global Affect (GV) and Global Vigor (GV) scores are calculated according to Monk, T.H. (1989) - A visual analogue scale technique to measure global vigor and affect. See{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/2922449/" target="_blank" className="text-link">
          https://pubmed.ncbi.nlm.nih.gov/2922449/
        </a>{" "}
        for details.
      </p>
      <p className="text-sm italic mt-2">GA = happy + calm + 200 - sad - tense / 4</p>
      <p className="text-sm italic">GV = alert + 300 - sleepy - effort - weary / 4</p>

      <div className="rounded-3xl border-2 border-slate-600 p-4 bg-white mt-2">
        <div className="flex justify-end gap-4">
          <button onClick={handleCopy} className="flex rounded-full py-2 px-6 border-4 border-blue-800 font-semibold text-lg text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-blue-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
            </svg>
            {!copy && <span>Copy</span>}
            {copy && <span>Copied!</span>}
          </button>
          <button onClick={handleDownload} className="flex rounded-full py-2 px-6 border-4 border-blue-800 font-semibold text-lg text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>

            {!download && <span>Export</span>}
            {download && <span>Exported!</span>}
          </button>
        </div>
        <div>
          Global Affect, {ga}
          <br />
          Global Vigor, {gv}
          <br />
          Happy,{happy}
          <br />
          Sad,{sad}
          <br />
          Calm,{calm}
          <br />
          Tense,{tense}
          <br />
          Effort,{effort}
          <br />
          Sleepy,{sleepy}
          <br />
          Alert,{alert}
          <br />
          Weary,{weary}
          <br />
        </div>
      </div>
    </section>
  );
};

export default Results;
