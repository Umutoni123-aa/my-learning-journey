import Link from "next/link";
import { getStories } from "@/lib/api";

export default async function GetAllStoriesPage() {
  const stories = await getStories();

  return (
    <div className="section-container">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">All Stories</h1>
        <Link
          href="/create-story"
          className="bg-secondary text-white px-3 py-1.5 rounded text-sm font-semibold"
        >
          + Create Story
        </Link>
      </div>

      <ul className="mt-6 flex flex-col gap-3">
        {stories.map((story) => (
          <li key={story.id} className="border p-3 rounded">
            <p className="font-semibold">{story.authorName}</p>
            <p className="text-sm text-gray-600 line-clamp-2">{story.content}</p>

            <Link
              href={`/${story.id}`}
              className="inline-block mt-2 text-primary underline text-sm"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}