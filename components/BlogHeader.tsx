export default function BlogHeader() {
  return (
    <div className="bg-secondary/10 border-b border-secondary/30 py-8 px-4 sm:px-6 rounded-t-xl">
      <h1 className="text-2xl sm:text-3xl font-semibold text-primary-dark">
        The Blog
      </h1>
      <p className="text-gray-600 mt-1 text-sm sm:text-base">
        Notes on frontend, backend, and mobile development from my learning journey.
      </p>
    </div>
  );
}
