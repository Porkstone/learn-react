
import React, { Suspense, useState } from "react";
import NumberSelector from "./numberSelector";
import { hotelProps } from "../testPage/page";
import SearchResults from "./searchResults";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import BestPrice from "./bestPrice";

function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [hotelCount, setHotelCount] = useState<number>(0);
  

  const updateHotelCount = (hotelCount: number) => { setHotelCount(hotelCount) }
  const updateHotelName = (hotelName: string) => { setSearchText(hotelName) }

  return (<div>
   
    <div className="flex gap-4 items-center justify-center border-b border-violet-500">
      <div className="flex">
        <div className=" flex flex-wrap items-center text-violet-700 py-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="hotel">Hotel Name</label>
            <input className="appearance-none text-xl border rounded w-96  py-2 px-3 text-violet-700  leading-tight"
              type="text"
              autoComplete="off" // Stop iOS from making suggestions
              autoCorrect="off" // Stop iOS from making suggestions
              autoCapitalize="off" // Stop iOS from making suggestions
              spellCheck="false" // Stop iOS from making suggestions
              autoFocus
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Hotel Name" />
          </div>
          
          
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="startDate">Start Date</label>
            <input className="appearance-none text-xl border rounded w-48  py-2 px-3 text-violet-700  leading-tight" value={startDate} type="date" id="startDate" name="startDate" onChange={(e) => setStartDate(e.target.value)} />
          </div> 
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="noNights">Nights</label>
            <NumberSelector defaultValue={7} />
            </div>
            <div className="flex flex-col">
            <label className="text-sm" htmlFor="noPeople">People</label>
            <NumberSelector defaultValue={2} />
          </div>
          <div className="flex flex-col w-full">
            <div className="w-96">
              <SearchResults searchText={searchText} updateHotelCount={updateHotelCount} updateHotelName={updateHotelName} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='text-xl w-96' >
  <Suspense fallback={<div>Loading...</div>}>
    {hotelCount == 1 && <BestPrice hotelName={searchText} startDate={startDate} numberOfNights={7} numberOfPeople={2} />}
    </Suspense>
    </div>
  </div>
  )
}

export default SearchBox;