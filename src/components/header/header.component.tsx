"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import style from "./header.module.css";

function HeaderComponent() {
  const pathname = usePathname();
  const url = [
    { id: 1, href: "صفحه-1", txt: "صفحه1" },
    { id: 2, href: "صفحه-2", txt: "صفحه2" },
    { id: 3, href: "صفحه-3", txt: "صفحه3" },
    { id: 4, href: "صفحه-4", txt: "صفحه4" },
    { id: 5, href: "5", txt: "صفحه5" },
    { id: 6, href: "صفحه-6", txt: "صفحه6" },
  ];
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
          {url.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.href}>{item.txt}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className={style.cta}>ورود|ثبت نام</button>
    </header>
  );
}

export default HeaderComponent;
