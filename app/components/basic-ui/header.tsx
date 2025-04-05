import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-20 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <span className="hidden lg:block text-lg pl-2 font-semibold">
              placed items
            </span>
          </Link>
          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-10 leading-5 text-md md:text-lg tracking-tight font-normal"
            >
              <li>
                <Link href="/Home" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">
                  About
                </Link>
              </li>
              <li>
                <Link href="/member" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">
                  Member
                </Link>
              </li>
              <li>
                <Link href="/contact" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}