import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import CountButton from './CountButton';

const ButtonContainer = ({ setCount }) => {
  return (
    <div className="button-container">
      <CountButton handleClick={() => setCount(prev => prev + 1)} IconComp={PlusIcon}/>
      <CountButton handleClick={() => setCount(prev => prev - 1)} IconComp={MinusIcon}/>
    </div>
  );
};

export default ButtonContainer;
