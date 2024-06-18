import React, {useState} from "react";

/// Returns a text box witwo buttons +/- that allow the user to select a number
function NumberSelector({ defaultValue}: { defaultValue: number }) {

    const [people, setPeople] = useState(defaultValue);
    
    
    const incrementPeople = () => {
        setPeople(people + 1)
    }

    const decrementPeople = () => {
        setPeople(people - 1)
    }
        return(
    <div className="flex">
          <input className="appearance-none text-xl border rounded  w-24 md:w-28 py-2 px-3 text-violet-700  leading-tight"  
                    type="text" 
                    id="noPeople" 
                    name="noPeople" 
                    placeholder="" 
                    value={people} 
                    readOnly/>
          <button className="text-xl border rounded py-2 px-3 w-12 text-white bg-violet-500 " onClick={decrementPeople} >-</button>
          <button className="text-xl border rounded py-2 px-3 w-12 text-white bg-violet-500"  onClick={incrementPeople}>+</button>
    </div>)
}

export default NumberSelector;