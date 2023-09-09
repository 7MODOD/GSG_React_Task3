import './SelectList.css';
function SelectList(props) {
  
  return (
    <div>
      <label className='myLable'>Salary</label>
      <select className='myList' value={props.value} onChange={props.onChange}>
        <option value="">Select an option</option>
        <option value="option1">Less than 500</option>
        <option value="option2">Between 500 to 1500</option>
        <option value="option3">More than 1500</option>
      </select>
    </div>
  );
}

export default SelectList;
