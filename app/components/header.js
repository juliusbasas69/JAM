import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 bg-white flex justify-between items-center max-w-7xl m-auto">
      <img className="w-30" src="/images/jam_logo.png" alt="Logo" />
      <nav className="flex gap-8">
        <Link href="/">
          <span className="cursor-pointer text-gray-500">Home</span>
        </Link>
        <Link href="/about">
          <span className="cursor-pointer text-gray-500">About</span>
        </Link>
        <Link href="/about">
          <span className="cursor-pointer text-gray-500">Branches</span>
        </Link>
        <Link href="/about">
          <span className="cursor-pointer text-gray-500">Events</span>
        </Link>
        <Link href="/about">
          <span className="cursor-pointer bg-berry text-white px-4 py-2 rounded-md">
            Contact Us
          </span>
        </Link>
      </nav>
    </header>
  );
}
