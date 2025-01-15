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
  // {
  //   name: 'Services',
  //   path: '/services',
  // },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Virtue Path',
    path: '/virtue-in-motion',
  },
];

const MobileNav: React.FunctionComponent = () => {
  const pathName = usePathname();
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <FontAwesomeIcon
          className="text-[32px] text-accent"
          icon={faBarsStaggered}
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link
            href="/"
            onClick={() => {
              setOpen(false);
            }}
          >
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
              onClick={() => {
                setOpen(false);
              }}
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
