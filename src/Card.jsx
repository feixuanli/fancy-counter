import { useEffect, useState } from "react";

import TitleFoo from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import CountButton from './CountButton';

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

  const handleClickOnMinus = (event) => {
    setCount(prev => {
      if (prev <= 0) { 
        return 0;
      }
      return prev - 1;
    });
    event.currentTarget.blur();
  }

  const handleClickOnPlus = (event) => {
    setCount(prev => {
      const newCount = prev + 1;
      if (newCount > 5) {
        return 5;
      }
      return newCount; 
    });
    event.currentTarget.blur();
  }

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <TitleFoo locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton handleClick={handleClickOnPlus} IconComp={PlusIcon} locked={locked}/>
        <CountButton handleClick={handleClickOnMinus} IconComp={MinusIcon} locked={locked}/>
      </ButtonContainer>
    </div>
  );
};

export default Card;
