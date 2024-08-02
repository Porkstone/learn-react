
import { useQuery } from '@tanstack/react-query'

export const getInitialProps = async () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['webPage'],
    queryFn: () =>
        fetch('https://www.skyscanner.net/hotels/search?entity_id=71821233&checkin=2024-11-12&checkout=2024-11-13&adults=2&rooms=1').then((res) =>
            res.text(),
        ),
})

if (isPending) return 'Loading...'
if (error) return 'An error has occurred: ' + error.message + error.name
if (!data) return 'An error has occurred: No data found'    

return {
  props: {pageHtml: data}
}
}


export default  function App(pageHtml: string) {
  console.log('Staring App..')
  console.log(pageHtml)  
  return (
       <TestFetch />
    )
  }
  

function  TestFetch() {
 
  return (

    <div>
      <h1>Test Fetch</h1>
    </div>

    
  )
}