import { useState } from "react";
import Rive from "@rive-app/react-canvas";
import { Animation } from "./components/Animation";
import { ArrowLongRight } from "./components/Icons";
import { TodayWords, ThisWeekWords } from "./components/Graphics";
import ActionButton from "./components/ActionButton";
import WeeklyOverview from "./components/WeeklyOverview";

function App() {
  const [count, setCount] = useState(0);
  const [isBtnExpand, setIsBtnExpand] = useState(false);

  return (
    <main className="h-full w-full min-h-screen  bg-stone-800 text-white flex flex-col font-inter">
      <nav className="p-4 flex justify-between items-center">
        <p className="text-sm">Welcome user9876</p>
        <div className="flex gap-2">
          {" "}
          <ActionButton color="white" icon="setting" />
          <ActionButton color="white" icon="stats" />
        </div>
      </nav>
      <header className="p-4 flex-1 flex h-fit   flex-col">
        <div className=" h-1/2 w-full">
          <Animation />
        </div>
      </header>

      <section
        className="bg-[#80CEAF] h-24 flex items-center cursor-pointer justify-between"
        onClick={() => setIsBtnExpand(!isBtnExpand)}
      >
        <p className="p-4 text-stone-950 font-fustat text-xl">
          Take 10-minutes exercise
        </p>
        <div className="flex h-full">
          <div className=" w-[10px] overflow-hidden">
            <div className="size-24 bg-stone-800 rounded-full"></div>
          </div>
          <div className=" w-[20px] overflow-hidden">
            {" "}
            <div className="size-24 bg-stone-800 rounded-full"></div>
          </div>
          <div
            className=" w-[--btnWidth] overflow-hidden transition-all"
            style={{ "--btnWidth": isBtnExpand ? "96px" : "30px" }}
          >
            {" "}
            <div className="size-24 bg-stone-800 rounded-full relative flex items-center justify-center">
              <ArrowLongRight />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="p-4 h-24 border-b border-stone-700 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <TodayWords />
            <p className=" leading-tight">
              Today <br></br> words
            </p>
          </div>
          <p className="font-fustat text-5xl font-thin leading-none">3</p>
        </div>
        <div className="p-4 h-24 border-b border-stone-700 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <ThisWeekWords />
            <p className=" leading-tight">
              This week <br></br> words
            </p>
          </div>
          <p className="font-fustat text-5xl font-thin leading-none">15</p>
        </div>
        <WeeklyOverview />
      </section>
    </main>
  );
}

export default App;
