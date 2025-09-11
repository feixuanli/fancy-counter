const CountButton = ({ handleClick, IconComp}) => {
    return (
      <button onClick={handleClick} className="count-btn">
       <IconComp className='count-btn-icon'/>
      </button>)

}

export default CountButton;