import BlogHeader from "@/components/BlogHeader";
import BlogNav from "@/components/BlogNav";
import BlogSidebar from "@/components/BlogSidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <BlogHeader />
        <BlogNav />
        <div className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6">
          <BlogSidebar />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
