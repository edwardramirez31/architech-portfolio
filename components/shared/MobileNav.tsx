'use client';
import React from 'react';

import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const MobileNav: React.FunctionComponent = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <FontAwesomeIcon
          className="text-[32px] text-accent"
          icon={faBarsStaggered}
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Edward<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`${path === pathName && 'text-accent border-b-2 border-accent'} text-xl font-medium hover:text-accent transition-all`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
