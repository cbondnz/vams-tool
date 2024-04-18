"use client";
import Mood from "@/components/Mood";
import NavButtons from "@/components/NavButtons";
import Results from "@/components/Results";
import SelectedOptions from "@/components/SelectedOptions";
import Welcome from "@/components/Welcome";
import React, { useState, useEffect } from "react";

export default function Home() {
  // State objects
  const [activeStep, setActiveStep] = useState<number>(1);
  const [happy, setHappy] = useState<number>(50);
  const [sad, setSad] = useState<number>(50);
  const [calm, setCalm] = useState<number>(50);
  const [tense, setTense] = useState<number>(50);
  const [effort, setEffort] = useState<number>(50);
  const [sleepy, setSleepy] = useState<number>(50);
  const [alert, setAlert] = useState<number>(50);
  const [weary, setWeary] = useState<number>(50);
  const [ga, setGA] = useState<number>(0);
  const [gv, setGV] = useState<number>(0);

  // Clicking the "Get Started" button on the home screen moves to the first form page
  const handleClickGettingStarted = () => {
    setActiveStep(2);
  };

  // Check if end state is not reached and increment the step by 1
  const handleClickNext = () => {
    if (activeStep != 10) {
      setActiveStep(activeStep + 1);
    }

    // Calculate GV = alert + 300 - sleepy - effort - weary / 4
    setGV((alert + 300 - sleepy - effort - weary) / 4);

    // Calculate GA = happy + calm + 200 - sad - tense / 4
    setGA((happy + calm + 200 - sad - tense) / 4);
  };

  // Check if start state is not reached and decrement the step by 1
  const handleClickPrevious = () => {
    if (activeStep != 1) {
      setActiveStep(activeStep - 1);
    }
  };

  // Resets all scores back to defaults
  const startOver = () => {
    setHappy(50);
    setSad(50);
    setCalm(50);
    setTense(50);
    setEffort(50);
    setSleepy(50);
    setAlert(50);
    setWeary(50);
    setGA(0);
    setGV(0);
  };

  // Resets scorings and go back to home page (step 1)
  const handleClickStartOver = () => {
    startOver();
    setActiveStep(1);
  };

  // Sets the happy mood based on the value received from the form inputs
  const handleSetHappy = (selectedValue: number) => {
    setHappy(selectedValue);
  };

  // Sets the sad mood based on the value received from the form inputs
  const handleSetSad = (selectedValue: number) => {
    setSad(selectedValue);
  };

  // Sets the calm mood based on the value received from the form inputs
  const handleSetCalm = (selectedValue: number) => {
    setCalm(selectedValue);
  };

  // Sets the tense mood based on the value received from the form inputs
  const handleSetTense = (selectedValue: number) => {
    setTense(selectedValue);
  };

  // Sets the energetic mood based on the value received from the form inputs
  const handlesetEffort = (selectedValue: number) => {
    setEffort(selectedValue);
  };

  // Sets the sleepy mood based on the value received from the form inputs
  const handleSetSleepy = (selectedValue: number) => {
    setSleepy(selectedValue);
  };

  // Sets the alert mood based on the value received from the form inputs
  const handleSetAlert = (selectedValue: number) => {
    setAlert(selectedValue);
  };

  // Sets the weary mood based on the value received from the form inputs
  const handleSetWeary = (selectedValue: number) => {
    setWeary(selectedValue);
  };

  useEffect(() => {}, [ga, gv]);

  return (
    <main className="text-primary p-4 sm:p-0 h-screen">
      <section className="h-full">
        {activeStep == 1 ? (
          <Welcome onClick={handleClickGettingStarted} />
        ) : (
          <div className="sm:bg-bgHalf sm:bg-no-repeat sm:bg-right-top h-full bg-half xl:bg-contain xl:bg-bg">
            <div className="sm:max-w-2xl sm:mx-auto sm:flex sm:items-center h-full lg:max-w-4xl sm:gap-x-4 md:items-start md:pt-40 xl:max-w-7xl xl:pb-60">
              <div className="sm:w-3/5 xl:flex xl:flex-col xl:justify-between xl:h-full">
                {activeStep == 2 && <Mood onMoodChange={handleSetHappy} mood={happy} lower="Not at all happy" upper="Extremely happy" activeStep={activeStep} />}
                {activeStep == 3 && <Mood onMoodChange={handleSetSad} mood={sad} lower="Not at all sad" upper="Extremely sad" activeStep={activeStep} />}
                {activeStep == 4 && <Mood onMoodChange={handleSetCalm} mood={calm} lower="Not at all calm" upper="Extremely calm" activeStep={activeStep} />}
                {activeStep == 5 && <Mood onMoodChange={handleSetTense} mood={tense} lower="Not at all tense" upper="Extremely tense" activeStep={activeStep} />}
                {activeStep == 6 && <Mood onMoodChange={handlesetEffort} mood={effort} lower="Little effort" upper="A lot of effort" activeStep={activeStep} />}
                {activeStep == 7 && <Mood onMoodChange={handleSetSleepy} mood={sleepy} lower="Not at all sleepy" upper="Extremely sleepy" activeStep={activeStep} />}
                {activeStep == 8 && <Mood onMoodChange={handleSetAlert} mood={alert} lower="Not at all alert" upper="Extremely alert" activeStep={activeStep} />}
                {activeStep == 9 && <Mood onMoodChange={handleSetWeary} mood={weary} lower="Not at all weary" upper="Extremely weary" activeStep={activeStep} />}
                {activeStep == 10 && <Results happy={happy} sad={sad} calm={calm} tense={tense} effort={effort} sleepy={sleepy} alert={alert} weary={weary} ga={ga} gv={gv} />}
                {activeStep != 1 && <NavButtons onClickNext={handleClickNext} onClickPrevious={handleClickPrevious} onClickStartOver={handleClickStartOver} activeStep={activeStep} />}
              </div>
              {activeStep == 10 && <SelectedOptions happy={happy} sad={sad} calm={calm} tense={tense} effort={effort} sleepy={sleepy} alert={alert} weary={weary} ga={ga} gv={gv} />}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
