'use client';

import Link from "next/link";
import { Logo } from "./icons/logo";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {CalendarIcon, CheckIcon , FileIcon, InboxIcon } from "@iconicicons/react";
const navLinks = [
  {
    name: 'Tasks',
    path: '/',
    icon: <CheckIcon className="w-[1.6rem] h-[1.6rem]" />
  },
  {
    name: 'Inbox',
    path: '#',
    icon: <InboxIcon className="w-[1.6rem] h-[1.6rem]" />
  },
  {
    name: 'Schedules', 
    path: '#',
    icon: <CalendarIcon className="w-[1.6rem] h-[1.6rem]" />
  },
  {
    name: 'Files',
    path: '#',
    icon: <FileIcon className="w-[1.6rem] h-[1.6rem]" />
  }
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-[20rem] h-screen">
      <nav className="flex flex-col w-full h-full p-[1.2rem]">
        <div className="mb-[6.4rem]">
          <h1>
            <Link href={'/'}>
              <Logo classNames="h-10"/>
            </Link>
          </h1>
        </div>

        <ul className="w-full flex flex-col h-auto space-y-[0.4rem]">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full h-auto relative [&_a]:text-sm">
              <Link href={link.path} className="w-full hover:bg-white/[.03]   p-[0.8rem] rounded-[8px] flex items-center">
              <span className="mr-[.8rem] ">{link.icon}</span>  {link.name}
              </Link>
              {link.path === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-0 block h-full w-full  bg-white/[.05] rounded-[8px]"
                    />
                  )}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link href={'/'}>@userxyz</Link>
        </div>
      </nav>
    </aside>
  );
}