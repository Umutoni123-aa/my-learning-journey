import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my learning journey — a personal website about who I am, what I'm learning, and where I'm headed as a software engineer.",
};

export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-secondary font-medium mb-3">Hi there, I'm</p>
      <h1 className="text-3xl sm:text-5xl font-bold text-primary-dark leading-tight">
        Umutoni
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl">
        A software engineering student and frontend developer, building my
        skills one project at a time — from clean UI to full single-page
        applications.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <Button href="/about">About Me</Button>
        <Button href="/blog" variant="secondary">
          Read My Blog
        </Button>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-16">
        <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
          <h3 className="font-semibold text-primary-dark mb-2">React &amp; Next.js</h3>
          <p className="text-sm text-gray-600">
            Building responsive, accessible interfaces and component-driven apps.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
          <h3 className="font-semibold text-primary-dark mb-2">UI &amp; Styling</h3>
          <p className="text-sm text-gray-600">
            Crafting clean, consistent designs with Tailwind CSS and Figma.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
          <h3 className="font-semibold text-primary-dark mb-2">API Integration</h3>
          <p className="text-sm text-gray-600">
            Consuming REST APIs to bring data-driven interfaces to life.
          </p>
        </div>
      </div>
    </section>
  );
}
