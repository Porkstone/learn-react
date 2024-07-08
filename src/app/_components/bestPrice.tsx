"use client";

import React, {useEffect, useState} from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

  export interface hotelProps {
    hotelName: string;
  }
  
  
export default function  BestPrice(props: hotelProps) {
    const { hotelName } = props;
    const encodedString = encodeURI(hotelName);
    const { isPending, error, data } = useQuery({
      queryKey: ['fetchBestPrice', hotelName],
      queryFn: () =>
        fetch('https://www.skyscanner.net/g/autosuggest-search/api/v1/search-hotel/UK/en-GB/' + encodedString + '?rf=map&vrows=10').then((res) =>
          res.json(),
        ),
    })
    return(
      <div>SearchResults</div>
    )
  }