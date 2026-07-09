import { getStory } from "@/lib/api";
import Link from "next/link";

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const story = await getStory(id);

  return (
    <div className="section-container max-w-lg">
      <Link href="/get-all-stories" className="text-primary text-sm underline">
        ← Back to all stories
      </Link>

      <h1 className="text-2xl font-bold text-primary mt-4">{story.authorName}</h1>
      <p className="mt-4 text-gray-700 whitespace-pre-line">{story.content}</p>
    </div>
  );
}