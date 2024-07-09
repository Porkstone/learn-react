"use client";
import { doc } from "prettier";
import { title } from "process";
import React, {useEffect, useState} from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import NumberSelector from "./numberSelector";
import { hotelProps } from "../testPage/page";
import { on } from "events";


export interface HotelType {
  hierarchy:   string;
  location:    string;
  score:       number;
  type:        string;
  entity_name: string;
  highlight:   Highlight;
  entity_id:   string;
  class:       string;
  pois:        null;
  
}

export interface Highlight {
  entity_name: string;
  hierarchy:   string;
}


export interface searchPropsType {
  searchText: string;
  updateHotelCount: (hotelCount: number) => void;
}

function SearchResults({ searchText, updateHotelCount }: searchPropsType) {
  
  const changeParentState = (hotelCount: number) => {updateHotelCount(hotelCount)}
  
  const encodedString = encodeURI(searchText);
  
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData', searchText],
    queryFn: () =>
      fetch('https://www.skyscanner.net/g/autosuggest-search/api/v1/search-hotel/UK/en-GB/' + encodedString + '?rf=map&vrows=10').then((res) =>
        res.json(),
      ),
  })
  
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  if (!data) return 'An error has occurred: No data found'
  let hotel: HotelType;
  console.log(data)
  // filter for the hotels 
  const handleClick = (hotel: HotelType) => {
    console.log(hotel)
    //setSearchText(hotel.entity_name)
  }
  const filteredData = data.filter((hotel: HotelType) => hotel.class == "Hotel");
  console.log(filteredData)
  const hotelCards = filteredData.map(hotel => <div key={hotel.entity_id} className="p-2">
                                            <div className='text-lg' onClick={(e) => handleClick(hotel)}>
                                              <div>{hotel.entity_name}</div> 
                                            </div>{hotel.hierarchy}</div>)
  changeParentState(filteredData.length)
  if(encodedString === '')
    return (<div>...</div>)
  if(filteredData.length === 1)
    return (
      
      <div className='border-2 border-violet-500'>
        <div>1</div>
        {hotelCards}
      </div>
    )
    
  return (
      
    <div>
      <div className='text-xl'>Hotels</div>
      {hotelCards}
    </div>
  )
  

}
function SearchBox(props: hotelProps) {
    const [searchText, setSearchText] = useState('');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [hotelCount, setHotelCount] = useState<number>(0);

    const updateHotelCount = (hotelCount: number) => {setHotelCount(hotelCount)}
      
    
  return (<div>
    <div className="flex gap-4 items-center justify-center border-b border-violet-500">
      <div className="flex">
        <div className=" flex flex-wrap items-center text-violet-700 py-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="hotel">Hotel Name</label>
            <input className="appearance-none text-xl border rounded w-72  py-2 px-3 text-violet-700  leading-tight"
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
            <div>
              <SearchResults searchText={searchText} updateHotelCount={updateHotelCount} />
              {hotelCount == 1 && <div>{hotelCount}</div>}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="startDate">Start Date</label>
            <input className="appearance-none text-xl border rounded w-48  py-2 px-3 text-violet-700  leading-tight" value={startDate} type="date" id="startDate" name="startDate" onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="noNights">Number of Nights</label>
            <NumberSelector defaultValue={7} />
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="noPeople">Number of People</label>
            <NumberSelector defaultValue={2} />
          </div>
          <div className="flex flex-col pt-5">
            <button className="text-xl border rounded py-2 px-3 w-48 md:w-28 text-white bg-violet-500 leading-tight" type="submit">Search</button>
          </div>

        </div>
      </div>
    
  </div>
  
  </div>)
}

export default SearchBox;