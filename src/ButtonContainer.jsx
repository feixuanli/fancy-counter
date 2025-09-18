import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import CountButton from './CountButton';

const ButtonContainer = ({ setCount, locked }) => {
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
    <div className="button-container">
      <CountButton handleClick={handleClickOnPlus} IconComp={PlusIcon} locked={locked}/>
      <CountButton handleClick={handleClickOnMinus} IconComp={MinusIcon} locked={locked}/>
    </div>
  );
};

export default ButtonContainer;
