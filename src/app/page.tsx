import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/8eab33b1-1fe8-4a6b-9c2a-7a02fcd912f8-1fisai.png",
  "https://utfs.io/f/8eab33b1-1fe8-4a6b-9c2a-7a02fcd912f8-1fisai.png",
  "https://utfs.io/f/8eab33b1-1fe8-4a6b-9c2a-7a02fcd912f8-1fisai.png",
  "https://utfs.io/f/8eab33b1-1fe8-4a6b-9c2a-7a02fcd912f8-1fisai.png",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
    url: url
}));

export default async function HomePage() {

   const posts = await db.query.posts.findMany();
   //console.log(posts);

 
  return (
    <main className="">
      Zorro WebUI*
      <div className="flex flex-wrap gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} />
        </div>
        ))}
        </div>
    </main>
  );
}
