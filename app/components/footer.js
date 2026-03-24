import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col sm:flex-row justify-between items-center text-gray-700 py-6 text-center max-w-7xl m-auto">
      {/* Center copyright */}
      <div className="text-sm mb-2 sm:mb-0">
        &copy; {new Date().getFullYear()} Jam Right. All rights reserved.
      </div>

      {/* Terms & Privacy */}
      <div className="flex gap-4 text-sm">
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
