import { useState } from "react";

import TitleFoo from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";

const Card = () => {
  const [count, setCount] = useState(0);
  // const [locked, setLocked] = useState(false); do not use state if we can derive it from exisitng info
  const locked = count === 5 ? true : false;

  return (
    <div className={`card ${locked ? 'card--limit':''}`}>
      <TitleFoo locked={locked}/>
      <Count count={count}/>
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked}/>
    </div>
  );
};

export default Card;
 