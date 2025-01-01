"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import style from "./header.module.css";

function HeaderComponent() {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={clsx(pathname === "/" && style.active)}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={clsx(pathname === "/search" && style.active)}
            >
              جستجو
            </Link>
          </li>
        </ul>
      </nav>
      <button className={style.cta}>ورود|ثبت نام</button>
    </header>
  );
}

export default HeaderComponent;
