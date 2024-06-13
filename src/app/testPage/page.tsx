// This is a page to try and understand how to use client and server components together
// Tell react we want to use client component
"use client"

import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
export default function TestPage() {
  const [startDate, setStartDate] = useState(new Date());
  
  

  return (
      <main className="p-5 ">
      <div className="grid grid-cols-5 gap-4 content-center border-b border-violet-500">
        <div className="col-span-1"></div>
        <div className="col-span-3">
        <form action="post" className="w-full">
        <div className=" flex flex-wrap items-center text-violet-700 py-2 gap-4">
          <div className="flex flex-col">
          <label className="text-sm" htmlFor="hotel">Hotel Name</label>
          <input className="appearance-none text-xl border rounded w-full  py-2 px-3 text-violet-700  leading-tight" type="text" name="hotel" placeholder="Hotel Name" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="start">Start Date</label>
          <input className="appearance-none text-xl border rounded w-full  py-2 px-3 text-violet-700  leading-tight" type="date" id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.valueAsDate)} />
         </div>
         <div className="flex flex-col">
          <label className="text-sm" htmlFor="noNights">Number of Nights</label>
          <input className="appearance-none text-xl border rounded w-full  py-2 px-3 text-violet-700  leading-tight" type="text" name="noNights" placeholder="Number of nights" />
          </div>
          <div className="flex flex-col justify-">
          <button className="appearance-none text-xl border rounded w-full  py-2 px-3 text-violet-700  leading-tight" type="submit">Search</button>
          </div>
          </div>
        </form>
        </div>
        <div className="col-span-1"></div>
      </div>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>    
      </main>
    
  );
}

function SelectHotel(id: string, nameOfHotel: string) {
  const hotelName = nameOfHotel.replace(/\s/g, '');
  return (
      <a href={`https://awww.skyscanner.net/g/hotels-website/api/hotels-recommendation/v1?adults=2&checkin=2024-06-18&checkout=2024-06-19&currency=GBP&entity_id=${id}&locale=en-GB&market=UK&recommend_types=recommend%2Cbooked%2Cpopular%2Chighest&rooms=1/`}>{hotelName}</a>
  );
}

function SimpleLink(url: string, target: string) {
  return (
    <a href={url} target={target}></a>
  );}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://www.skyscanner.net/g/autosuggest-search/api/v1/search-hotel/UK/en-GB/Arte%20Vida?rf=map&vrows=10').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error || !data) return 'An error has occurred: ' + error.message
  
  const hotelCards = data.map(hotel => <div className="p-2"><div className='text-lg'> <SimpleLink url="https://google.co.uk" target="_self"></SimpleLink> </div>Region {hotel.hierarchy} - Id: {hotel.entity_id}</div>)
  return (
    <div>
      <div className='text-xl'>Hotels</div>
      {hotelCards}
    </div>
  )
}

