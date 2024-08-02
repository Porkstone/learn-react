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
    //console.log(data)
    // filter for the hotels 
    const handleClick = (hotel: HotelType) => {
       // console.log(hotel.entity_name)
        updateHotelName(hotel.entity_name)
    }
    const filteredData = data.filter((hotel: HotelType) => hotel.class == "Hotel");
    //console.log(filteredData)
    changeParentState(filteredData.length)

    let hotelCards: JSX.Element;
    if (filteredData.length === 1){
    hotelCards = filteredData.map((hotel: HotelType) => 
        <div key={hotel.entity_id} className="p-2 border-2 bg-violet-500 rounded-md w-96 text-white">
            <div className='text-lg' onClick={(e) => handleClick(hotel)} onTouchStart={(e) => handleClick(hotel)}>
                <div>{hotel.entity_name}</div>
                <div>{hotel.hierarchy}</div>
            </div>
        </div>)
        } else{
            hotelCards = filteredData.map((hotel: HotelType) => 
            <div key={hotel.entity_id} className=" border-t border-violet-500 p-1 m-t-1 w-96 ">
                <div className='text-base' onClick={(e) => handleClick(hotel)} onTouchStart={(e) => handleClick(hotel)}>
                    <div className='font-medium'>{hotel.entity_name}</div>
                    <div>{hotel.hierarchy}</div>
                </div>
        </div>)
        }
    
    if (encodedString === '')
        return (<div>Please enter a hotel above.</div>)
    
    if (filteredData.length === 1)
        {
        return (
            <div className=''>
                {hotelCards}
            </div>
        )
    }

    if (filteredData.length > 1)
    return (

        <div>
            <div className='text-xl w-96 pb-1 font-medium'>Matching hotels:</div>
            {hotelCards}
        </div>

    )
    
}