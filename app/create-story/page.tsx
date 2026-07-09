"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createStory } from "@/lib/api";

export default function CreateStoryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ authorName: "", content: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await createStory(formData);
      router.push("/get-all-stories");
      router.refresh();
    } catch (err) {
      setError("Failed to create story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="max-w-lg mx-auto px-4 sm:px-6 mt-10">
      <h1 className="text-2xl font-bold text-primary">Create a Story</h1>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Story</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={6}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-4 py-2 rounded font-semibold disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Story"}
        </button>
      </form>
    </div>
  );
}