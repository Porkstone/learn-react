// This is a page to try and understand how to use client and server components together
// Tell react we want to use client component
"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 
 const queryClient = new QueryClient()
import { useEffect, useState } from "react";

import NumberSelector from "../_components/numberSelector";
import SearchBox from "../_components/searchBox";
import BestPrice from "../_components/bestPrice";

export interface hotelProps {
  hotelName: string;
  startDate: Date;
  numberOfNights: number;
  numberOfPeople: number;
}


function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <TestPage />
    </QueryClientProvider>
  )
}

export default App;
function TestPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hotelName, setHotelName] = useState('');

 

  return (
    <main className="p-5 ">
          <SearchBox hotelName={hotelName} startDate={startDate} numberOfNights={7} numberOfPeople={2} />
          <BestPrice hotelName={hotelName} startDate={startDate} numberOfNights={7} numberOfPeople={2} />  
    </main>

  );
}





