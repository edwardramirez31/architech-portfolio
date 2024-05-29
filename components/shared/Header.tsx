import React from 'react';

import Link from 'next/link';

import { Button } from '../ui/button';

import MobileNav from './MobileNav';
import Nav from './Nav';

const Header: React.FunctionComponent = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Edward<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
