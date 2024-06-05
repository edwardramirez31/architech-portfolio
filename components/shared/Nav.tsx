'use client';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
];

const Nav: React.FunctionComponent = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          href={path}
          className={`${path === pathName && 'text-accent border-b-2 border-accent'} font-medium hover:text-accent transition-all`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
