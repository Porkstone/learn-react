"use client"

import { useQuery } from '@tanstack/react-query'
import { hotelProps } from "../testPage/page";

export interface HotelType {
  destinationName: string;
  recommendHotelsCards: RecommendHotelsCard[];
  generalType: string;
}

export interface RecommendHotelsCard {
  id: string;
  name: string;
  relevantPOI: null;
  image: null | string;
  numberOfReviews: number;
  reviewScore: number | null;
  reviewSummary: string;
  numberOfStars: number | null;
  priceInfo: PriceInfo;
  mostPopularWith: null;
  reviewsSummaryInfo: ReviewsSummaryInfo | null;
  distanceInfo: DistanceInfo;
  recommendGuest: null;
  recommendReview: null;
  recommendReviewsCount: null;
  recommendCategory: string;
  recommendGeneral: string;
  generalReviewCount: null;
  generalReview: null;
  url: string;
}

export interface DistanceInfo {
  distanceMeters: number;
  referenceEntityType: string;
  referenceEntityName: string;
  cityName: string;
}

export interface PriceInfo {
  price: number;
  basePrice: number;
  taxesAndFees: TaxesAndFee[];
  partnerId: string;
  funnelType: string;
}

export interface TaxesAndFee {
  total: number;
  included: boolean;
  key: string;
}

export interface ReviewsSummaryInfo {
  reviewSummaryScore: number;
  reviewSummaryScoreImageUrl: string;
  reviewSummaryScoreDesc: string;
  reviewSummaryCount: number;
  positiveReviewsCount: number;
}

export interface option {
  otaName: string;
  price: string;
}

export interface options {
  options: option[];
}


export default function BestPrice(props: hotelProps) {
    console.log("Best Price Query Starting..")
    const url = '/api/hello'
    const { isPending, error, data } = useQuery({
      queryKey: ['bestHotelPrice'],
      queryFn: () =>
        fetch(url).then((res) => res.json(),
        ),
    })
    if (isPending) return 'Loading...'
    if (error) console.log(error)
    if (!data) return 'No data found'
    
    
    
    //Success handling
    console.log("Data")
    console.log(JSON.stringify(data))
    
    
    
    if (data.length > 0) {
      const hotelPrices: option[] = data
      return (
        <div>
          <h1>Best price for {props.hotelName}...</h1>
          <div>{hotelPrices[0].otaName}</div>
            <div>{hotelPrices[0].price}</div>
        </div>
      )
      console.log(data.length)  
    } 

  }

/*
  function BestPriceOld(props: hotelProps) {
    const hotelName = "Arte Vida Tarifa"
    const encodedString = encodeURI(hotelName);
    const { isPending, error, data } = useQuery({
      queryKey: ['fetchBestPrice', hotelName],
      queryFn: () => {
        const data = fetchHotelPrices(props.hotelName)
        return data
      },
    })

    console.log(data)
    return (

      <div>
        <h1>Best price for {props.hotelName}...</h1>
        <div> £46 per night</div>

      </div>
    )
  }
  */
