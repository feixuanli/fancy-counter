import { useEffect, useState } from "react";

import TitleFoo from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";

const Card = () => {
  const [count, setCount] = useState(0);

  // const [locked, setLocked] = useState(false); do not use state if we can derive it from exisitng info
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        const val = newCount < 5 ? newCount : 5;
        console.log('val', val)
        setCount(val);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <TitleFoo locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
};

export default Card;
