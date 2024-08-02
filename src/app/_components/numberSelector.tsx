"use client"
import React, {useState} from "react";

/// Returns a text box witwo buttons +/- that allow the user to select a number
function NumberSelector({ defaultValue}: { defaultValue: number }) {

    const [people, setPeople] = useState(defaultValue);
    
    
    const incrementPeople = () => {
        setPeople(people + 1)
    }

    const decrementPeople = () => {
        if (people > 1) {
        setPeople(people - 1)
        }
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'ArrowUp') {
            incrementPeople()
        }
        if (e.key === 'ArrowDown') {
            decrementPeople()
        }
      }
        return(
    <div className="flex">
          <input className="appearance-none text-xl border border-violet-500 rounded  w-12 md:w-28 py-2 px-3 text-violet-700  leading-tight"  
                    type="text" 
                    id="noPeople" 
                    name="noPeople" 
                    placeholder="" 
                    value={people} 
                    onKeyDown={handleKeyDown}/>
          
    </div>)
}

export default NumberSelector;