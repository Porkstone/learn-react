// This is a page to try and understand how to use client and server components together
// Tell react we want to use client component
"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 
 const queryClient = new QueryClient()
import { useEffect, useState } from "react";

import NumberSelector from "../_components/numberSelector";
import SearchBox from "../_components/searchBox";

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
  

  function SelectHotel(id: string, nameOfHotel: string) {
    const hotelName = nameOfHotel.replace(/\s/g, '');
    return (
        <a href={`https://awww.skyscanner.net/g/hotels-website/api/hotels-recommendation/v1?adults=2&checkin=2024-06-18&checkout=2024-06-19&currency=GBP&entity_id=${id}&locale=en-GB&market=UK&recommend_types=recommend%2Cbooked%2Cpopular%2Chighest&rooms=1/`}>{hotelName}</a>
    );
  }

  return (
    <main className="p-5 ">
          <SearchBox />
    </main>

  );
}





