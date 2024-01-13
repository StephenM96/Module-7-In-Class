"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const path = usePathname(); // hook to check current path
  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: "#09193b", color: "#14bbe5" }}
    >
      <ul className="menu">
        {/* Next.js Link components use href instead of to prop */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href="/dash"
            className={path.startsWith("/dash") ? "active" : null}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={path.startsWith("/posts") ? "active" : null}
          >
            Posts
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={path.startsWith("/about") ? "active" : null}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
