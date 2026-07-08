export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} My Learning Journey. All rights reserved.</p>
        <p className="text-primary-light">Built by Umutoni Nada</p>
      </div>
    </footer>
  );
}
