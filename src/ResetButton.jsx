import { ResetIcon } from '@radix-ui/react-icons'
const ResetButton = ({setCount}) => {
  return <button onClick={() => {setCount(0)}} className="reset-btn"><ResetIcon className='reset-btn-icon'/></button>;
};

export default ResetButton;

