"use client"
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
  
  const queryClient = new QueryClient()
  
  export default function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    )
  }
  
  function Example() {
    const { isPending, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://www.skyscanner.net/g/hotels-website/api/hotels-recommendation/v1?adults=2&checkin=2024-06-18&checkout=2024-06-19&currency=GBP&entity_id=71821233&locale=en-GB&market=UK&recommend_types=recommend%2Cbooked%2Cpopular%2Chighest&rooms=1&search_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0&user_context={%22device%22%3A{%22osName%22%3A%22Windows%22%2C%22osVersion%22%3A%22unknown%22%2C%22model%22%3A%22unknown%22%2C%22vendor%22%3A%22unknown%22%2C%22browserVendor%22%3A%22Google%22%2C%22browserVersion%22%3A%22125.0.0.0%22%2C%22browserName%22%3A%22Chrome%22%2C%22primaryHardwareType%22%3A%22Desktop%22%2C%22marketingName%22%3A%22unknown%22%2C%22isMobilePhone%22%3Afalse%2C%22isTablet%22%3Afalse%2C%22isBrowser%22%3Atrue%2C%22isRobot%22%3Afalse}%2C%22isWebView%22%3Afalse%2C%22ipAddress%22%3A%2292.13.131.54%22%2C%22userPreferences%22%3A{%22isNewUser%22%3Afalse%2C%22isLoggedIn%22%3Afalse%2C%22utid%22%3A%22de94135b-a341-42d2-9dc3-3d7e7bef83c5%22%2C%22userPreferencesId%22%3A%22de94135ba34142d29dc33d7e7bef83c5%22}%2C%22bellboySortingVersion%22%3A%22lgbmranker-etl-v1-debiased%22%2C%22hotelCouponFlightDbookCampaignid%22%3Anull%2C%22flightsCugEnabled%22%3Atrue%2C%22hotelCouponEnabled%22%3Atrue%2C%22cugOverride%22%3A[]%2C%22searchCycleId%22%3Anull%2C%22searchResultCacheEnable%22%3Atrue%2C%22searchOnlyCurrentCity%22%3Afalse%2C%22ignoreBellboyServerError%22%3Atrue%2C%22culture%22%3A{%22topLevelDomain%22%3A%22net%22%2C%22market%22%3A%22UK%22%2C%22currency%22%3A%22GBP%22%2C%22locale%22%3A%22en-GB%22%2C%22localeParentName%22%3A%22en%22%2C%22isRightToLeft%22%3Afalse%2C%22tld%22%3A%22net%22}%2C%22locale%22%3A%22en-GB%22%2C%22showHotelPolicy%22%3Afalse%2C%22impressionId%22%3A%22ffbc0b71-9274-4bb8-a17e-39bf374f2a0c%22%2C%22experiments%22%3A{%22upsort_reward_hotel%22%3Anull%2C%22UQS_Integration_on_mweb%22%3Anull%2C%22UQS_Integration_on_desktop%22%3Anull%2C%22agoda_double_call_mweb%22%3Anull%2C%22agoda_double_call_desktop%22%3Anull}%2C%22bellboyTVersion%22%3A%22%22%2C%22hopsVersion%22%3A%22hops_raspberry_lemon_glazed_ecpc_mr%22%2C%22hpaHopsVersion%22%3A%22%22%2C%22verifyAnonymousJwtEnable%22%3Afalse%2C%22pageType%22%3A%22hotels-results%22%2C%22hotelCardListCount%22%3A25%2C%22enableSEOVariantHotelsDetailsPage%22%3Afalse%2C%22enableMapRefresh%22%3Afalse%2C%22metaPushLoginEnabled%22%3Afalse%2C%22enableBlackFridayHotelDeals%22%3Afalse%2C%22partnerSortingEnabled%22%3Atrue%2C%22partnerSortingHpaEnabled%22%3Afalse%2C%22highlightCheapestPriceVar%22%3A%22%22}').then((res) =>
          res.json(),
        ),
    })
  
    if (isPending) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
    const jsonData = JSON.parse('{"destinationName":"Arte Vida","recommendHotelsCards":[{"id":"205560252","name":"Kampaoh Valdevaqueros","relevantPOI":null,"image":"https://content.skyscnr.com/available/1538790236/1538790236_WxH.jpg","numberOfReviews":134,"reviewScore":7,"reviewSummary":"rating_good","numberOfStars":null,"priceInfo":{"price":682,"basePrice":620,"taxesAndFees":[{"total":62.03,"key":"vat","included":true}],"partnerId":"h_bc","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":{"reviewSummaryScore":3.5,"reviewSummaryScoreImageUrl":"https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.5-64600-4.png","reviewSummaryScoreDesc":"Good","reviewSummaryCount":134,"positiveReviewsCount":76},"distanceInfo":{"distanceMeters":3533,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":"We stayed here in April 2018 and thought the staff were great. We were in a motorhome and the pitches were good and the great beach was accessed through a tunnel under the road and what a beach just spectacular..The man at reception was brilliant helping us to organize a trip to  Algiers and even directing us to a handy place to park our motorhome in Tangiers","url":"/hotels/spain/tarifa-hotels/kampaoh-valdevaqueros/ht-205560252?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=682&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"},{"id":"140036436","name":"Alojamiento Mesón el Pozuelo","relevantPOI":null,"image":"https://content.skyscnr.com/available/1500132437/1500132437_WxH.jpg","numberOfReviews":8,"reviewScore":9,"reviewSummary":"rating_excellent","numberOfStars":null,"priceInfo":{"price":761,"basePrice":686,"taxesAndFees":[{"total":75.2,"key":"vat","included":true}],"partnerId":"h_bc","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":{"reviewSummaryScore":4.5,"reviewSummaryScoreImageUrl":"https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-64600-4.png","reviewSummaryScoreDesc":"Excellent","reviewSummaryCount":8,"positiveReviewsCount":7},"distanceInfo":{"distanceMeters":2940,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":"We have spent one week in Meson Pozuelo apartments. Great place and excellent service. The apartment is clean and new with all the needed equipment. The apartment has a small terasse where we took our breakfast everyday and a big green yard to  enjoy the sun. The place is a family business and the owners are looking after all services themselves as it is their own house. The place has a big restaurant attached to it and is next to a Cepsa gas station with a Carrefour Express in it. Crossing the road you have the Lances beach which is perfect for long walks, swimming and kite surfing. We would like to come back soon for sure. Tarifa area is fantastic, we loved it","url":"/hotels/spain/tarifa-hotels/alojamiento-meson-el-pozuelo/ht-140036436?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=761&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"},{"id":"219185371","name":"BANTI Tarifa","relevantPOI":null,"image":"https://content.skyscnr.com/available/1516764191/1516764191_WxH.jpg","numberOfReviews":93,"reviewScore":8,"reviewSummary":"rating_very_good","numberOfStars":null,"priceInfo":{"price":1041,"basePrice":938,"taxesAndFees":[{"total":102.85,"key":"vat","included":true}],"partnerId":"h_bc","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":{"reviewSummaryScore":4,"reviewSummaryScoreImageUrl":"https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-64600-4.png","reviewSummaryScoreDesc":"Very good","reviewSummaryCount":93,"positiveReviewsCount":71},"distanceInfo":{"distanceMeters":3565,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":"Great location, beautiful decoration, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. This was one of the nicest places we have been!","url":"/hotels/spain/tarifa-hotels/banti-tarifa/ht-219185371?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=1041&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"},{"id":"160998596","name":"Kampaoh Tarifa","relevantPOI":null,"image":"https://content.skyscnr.com/available/1567728576/1567728576_WxH.jpg","numberOfReviews":76,"reviewScore":8,"reviewSummary":"rating_very_good","numberOfStars":null,"priceInfo":{"price":612,"basePrice":556,"taxesAndFees":[{"total":55.61,"key":"vat","included":true}],"partnerId":"h_bc","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":{"reviewSummaryScore":4,"reviewSummaryScoreImageUrl":"https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-64600-4.png","reviewSummaryScoreDesc":"Very good","reviewSummaryCount":76,"positiveReviewsCount":50},"distanceInfo":{"distanceMeters":355,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":"Had the teepee which sleeps 2-4 (for 3 ppl) and it was decent. Tents were clean & had the amenities required (mini fridge; heater; lights, cutlery, utensils). The pillows n bed were super comfy. Only negative is that our teepee (No. 8) was the furthest from the showers/toilets, but that did not really bother me","url":"/hotels/spain/tarifa-hotels/kampaoh-tarifa/ht-160998596?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=612&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"},{"id":"157037576","name":"TAIGA Tarifa","relevantPOI":null,"image":"https://content.skyscnr.com/available/1497126838/1497126838_WxH.jpg","numberOfReviews":25,"reviewScore":8,"reviewSummary":"rating_very_good","numberOfStars":null,"priceInfo":{"price":820,"basePrice":739,"taxesAndFees":[{"total":81.03,"key":"vat","included":true}],"partnerId":"h_bc","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":{"reviewSummaryScore":4,"reviewSummaryScoreImageUrl":"https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-64600-4.png","reviewSummaryScoreDesc":"Very good","reviewSummaryCount":25,"positiveReviewsCount":18},"distanceInfo":{"distanceMeters":4930,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":null,"url":"/hotels/spain/tarifa-hotels/taiga-tarifa/ht-157037576?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=820&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"},{"id":"154618101","name":"SPIRIT Garden Tarifa","relevantPOI":null,"image":"https://content.skyscnr.com/available/1018254065/1018254065_WxH.jpg","numberOfReviews":9,"reviewScore":5,"reviewSummary":"rating_average","numberOfStars":null,"priceInfo":{"price":885,"basePrice":797,"taxesAndFees":[{"total":87.42,"key":"vat","included":true}],"partnerId":"h_bc","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":{"reviewSummaryScore":2.5,"reviewSummaryScoreImageUrl":"https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/2.5-64600-4.png","reviewSummaryScoreDesc":"Average","reviewSummaryCount":9,"positiveReviewsCount":3},"distanceInfo":{"distanceMeters":3538,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":null,"url":"/hotels/spain/tarifa-hotels/spirit-garden-tarifa/ht-154618101?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=885&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"},{"id":"160169420","name":"APARTAMENTO Vista MAR LA Tortuga","relevantPOI":null,"image":"https://content.skyscnr.com/available/1474476931/1474476931_WxH.jpg","numberOfReviews":0,"reviewScore":null,"reviewSummary":"rating_none","numberOfStars":null,"priceInfo":{"price":1213,"basePrice":1078,"taxesAndFees":[{"total":118.18,"key":"vat","included":true},{"total":16.88,"key":"service_charges","included":true}],"partnerId":"h_io","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":null,"distanceInfo":{"distanceMeters":4469,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":null,"url":"/hotels/spain/tarifa-hotels/apartamento-vista-mar-la-tortuga/ht-160169420?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=1213&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"},{"id":"134535292","name":"Casa Valdevaqueros","relevantPOI":null,"image":"https://content.skyscnr.com/available/530866302/530866302_WxH.jpg","numberOfReviews":0,"reviewScore":null,"reviewSummary":"rating_none","numberOfStars":null,"priceInfo":{"price":1323,"basePrice":1162,"taxesAndFees":[{"total":127.38,"key":"vat","included":true},{"total":33.76,"key":"service_charges","included":true}],"partnerId":"h_io","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":null,"distanceInfo":{"distanceMeters":4354,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":null,"url":"/hotels/spain/tarifa-hotels/casa-valdevaqueros/ht-134535292?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=1323&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"},{"id":"200600944","name":"Livingtarifa Casa Del Mar","relevantPOI":null,"image":"https://content.skyscnr.com/available/1473762087/1473762087_WxH.jpg","numberOfReviews":0,"reviewScore":null,"reviewSummary":"rating_none","numberOfStars":null,"priceInfo":{"price":1831,"basePrice":1601,"taxesAndFees":[{"total":175.53,"key":"vat","included":true},{"total":54.87,"key":"service_charges","included":true}],"partnerId":"h_io","funnelType":"meta"},"mostPopularWith":null,"reviewsSummaryInfo":null,"distanceInfo":{"distanceMeters":4649,"referenceEntityType":"NAMED_ENTITY","referenceEntityName":"Arte Vida","cityName":"Arte Vida"},"recommendGuest":null,"recommendReview":null,"recommendReviewsCount":null,"recommendCategory":"general","recommendGeneral":"booked","generalReviewCount":null,"generalReview":null,"url":"/hotels/spain/tarifa-hotels/livingtarifa-casa-del-mar/ht-200600944?checkin=2024-06-18&checkout=2024-06-19&rooms=1&adults=2&clicked_details_price=1831&currency=GBP&impression_id=ffbc0b71-9274-4bb8-a17e-39bf374f2a0c&locale=en-GB&market=UK&priceType=price-per-night&recommendation=%7B%22general%22%3A%22booked%22%2C%22generalReviewCount%22%3Anull%7D&search_cycle_id=fff0f126cbca2f019817964a938f4a0a7beab193767d14cd2a62dc9e9735cdf0"}],"generalType":"recommend"}');
    const hotelCards = jsonData.recommendHotelsCards.map(hotel => <div><div className='text-lg'>{hotel.name}</div>Price £{hotel.priceInfo.price} - Taxes included: {hotel.priceInfo.taxesAndFees[0].vat} <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked></input><img className="max-h-20 " src={hotel.image} /></div>)
    return (
      <div>
        <div className='text-xl'>Hotels</div>
        {hotelCards}
      </div>
    )
  }