"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({ menu }) => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-11 items-center">
      {menu.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Link key={item.bar} href={item.link}>
            <li
              className={`text-[17px] font-bold transition
                ${isActive ? "text-[#80B500]" : "text-[#232323]"}
              `}
            >
              {item.bar}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavMenu;
