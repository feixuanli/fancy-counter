import { useState } from "react";

import TitleFoo from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";

const Card = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <TitleFoo />
      <Count count={count}/>
      <ResetButton setCount={setCount} />
      <CountButtons setCount={setCount}/>
    </div>
  );
};

export default Card;
