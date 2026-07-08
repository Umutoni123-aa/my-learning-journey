import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-4 sm:px-6 py-24 text-center">
      <p className="text-secondary font-semibold text-sm mb-2">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button href="/">Back to Home</Button>
    </section>
  );
}
