import Link from "next/link";
const navItems = [
  { href: "/Introduction", label: "Introduction" },
  { href: "/Member", label: "Member" },
  { href: "/News", label: "News" },
  { href: "/Activity", label: "Activity" },
  { href: "/Communication", label: "Communication" },
  { href: "/Book", label: "Book" },
];
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
          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-10 leading-5 text-md md:text-lg tracking-tight font-normal"
            >
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}