

import Link from "next/link";

const Navbar = () => {
  

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex-shrink-0">
        <a href="/" className="text-4xl font-bold text-gray-600">
          Okirika Brand
        </a>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 text-gray-600">
        <Link href="/" className="hover:text-emerald-500 pe-8 font-bold">Home</Link>
        <Link href="/about" className="hover:text-emerald-500 pe-8">About</Link>
        <Link href="/learn" className="hover:text-emerald-500 pe-8">Learn A Skill</Link>
        <Link href="/contact" className="hover:text-emerald-500 pe-8">Contact</Link>
        <Link href="/signup" className="hover:text-emerald-500 pe-8">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
