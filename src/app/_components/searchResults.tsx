import { useQuery } from '@tanstack/react-query'

export interface HotelType {
    hierarchy: string;
    location: string;
    score: number;
    type: string;
    entity_name: string;
    highlight: Highlight;
    entity_id: string;
    class: string;
    pois: null;

}

interface Highlight {
    entity_name: string;
    hierarchy: string;
}

export interface searchPropsType {
    searchText: string;
    updateHotelCount: (hotelCount: number) => void;
    updateHotelName: (hotelName: string) => void;
}

export default function SearchResults({ searchText, updateHotelCount, updateHotelName }: searchPropsType) {

    const changeParentState = (hotelCount: number) => { updateHotelCount(hotelCount) }

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
        console.log(hotel.entity_name)
        updateHotelName(hotel.entity_name)
    }
    const filteredData = data.filter((hotel: HotelType) => hotel.class == "Hotel");
    console.log(filteredData)
    const hotelCards = filteredData.map((hotel: HotelType) => <div key={hotel.entity_id} className="p-2 w-96">
        <div className='text-lg' onClick={(e) => handleClick(hotel)}>
            <div>{hotel.entity_name}</div>
        </div>{hotel.hierarchy}</div>)
    changeParentState(filteredData.length)
    if (encodedString === '')
        return (<div>...</div>)
    if (filteredData.length === 1)
        {
            
        return (
            <div className='border-2 bg-violet-500 rounded-md w-96'>
                {hotelCards}
            </div>
        )
    }
    if (filteredData.length > 1)
    return (

        <div>
            <div className='text-xl w-96' >Hotels</div>
            {hotelCards}
        </div>
    )
}