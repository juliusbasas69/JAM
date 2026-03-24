import Link from "next/link";

// --------------------
//        @Jma Right
// --------------------

export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-gray-500 text-gray-700 py-6 text-center">
      <div className="mb-2"></div>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Jam Right. All rights reserved.
      </div>
    </footer>
  );
}
