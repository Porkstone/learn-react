import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 p-4">
        Zorro WebUI
        {mockImages.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
        ))}
        </div>
    </main>
  );
}
