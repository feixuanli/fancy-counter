const CountButton = ({ handleClick, IconComp, locked}) => {
    return (
      <button disabled={locked} onClick={handleClick} className="count-btn">
       <IconComp className='count-btn-icon'/>
      </button>)

}

export default CountButton;