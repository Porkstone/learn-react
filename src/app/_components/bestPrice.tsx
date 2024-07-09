"use client"

import {useQuery, useMutation} from '@tanstack/react-query'
import { number } from "zod";
import { hotelProps } from "../testPage/page";
import { time } from 'console';


async function fetchPokemon(name: string) {
	const pokemonQuery = `
    {
        "lang":"en",
        "promoCode":"",
        "hotelCheckin":{
           "day":17,
           "month":10,
           "year":2024
        },
        "hotelCheckout":{
           "day":18,
           "month":10,
           "year":2024
        },
        "rooms":[
           {
              "adults":2,
              "childrenAges":[
                 
              ]
           }
        ]
     }
  `

const response = await window.fetch('https://www.mesondesancho.com/_/onetbooking.v4.engine.EngineService.GetAvailability', {
    // learn more about this API here: https://graphql-pokemon2.vercel.app/
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: pokemonQuery,
})
const { data, errors } = await response.json()
    if (!response.ok) {
        console.log(response.status)
        const error = new Error(
			errors?.map((e: any) => e.message).join('\n') ?? 'unknown',
		)
        return Promise.reject(error)
    }
	if (response.ok) {
		const pokemon = data?.pokemon
		if (pokemon) {
			// add fetchedAt helper (used in the UI to help differentiate requests)
			console.log(pokemon)
			return <div>Success</div>
		} else {
			return Promise.reject(new Error(`No pokemon with the name "${name}"`))
		}
	
    }  
}

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

export default function  BestPrice(props: hotelProps) {
    const hotelName = "Arte Vida Tarifa"
    const encodedString = encodeURI(hotelName);
    const { isPending, error, data } = useQuery({
      queryKey: ['fetchBestPrice', hotelName],
      queryFn: async() => {
        const data = await fetchPokemon("Pikachu")
          return data
      },
    })
    
    
    return(

      <div>
            <h1>Best price ...</h1>
            <div> £46 per night</div>

      </div>
    )
  }
