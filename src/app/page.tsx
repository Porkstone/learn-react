
import { getPosts } from "~/server/queries";


 
 
// This tells next not to cache this page, we are pulling data from the Database every time
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/8eab33b1-1fe8-4a6b-9c2a-7a02fcd912f8-1fisai.png",
  "https://utfs.io/f/8eab33b1-1fe8-4a6b-9c2a-7a02fcd912f8-1fisai.png",
  "https://utfs.io/f/8eab33b1-1fe8-4a6b-9c2a-7a02fcd912f8-1fisai.png",
  "https://utfs.io/f/8eab33b1-1fe8-4a6b-9c2a-7a02fcd912f8-1fisai.png",
];
const images = mockUrls.map((url, index) => ({
  id: index + 1,
    url: url
}));


export default async function HomePage() {
   const posts = await getPosts();
   //console.log(posts);

 
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
          <input className="appearance-none text-xl border rounded w-full  py-2 px-3 text-violet-700  leading-tight" type="date" id="startDate" name="startDate" value="2018-07-22" />
         </div>
         <div className="flex flex-col">
          <label className="text-sm" htmlFor="noNights">Number of Nights</label>
          <input className="appearance-none text-xl border rounded w-full  py-2 px-3 text-violet-700  leading-tight" type="text" name="noNights" placeholder="Number of nights" />
          </div>
          <div className="flex flex-col justify-bottom">
          <button className="appearance-none text-xl border rounded w-full  py-2 px-3 text-violet-700  leading-tight" type="submit">Search</button>
          </div>
          </div>
        </form>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
        {images.map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} />
        </div>
        ))}
        </div>
    </main>
  );
}
