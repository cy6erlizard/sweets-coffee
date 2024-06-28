"use client";

import { Container } from "./container";
import { Logo } from "./icons/logo";
import Link from "next/link";
import { MapIcon } from "./icons/map";
import { FacebookIcon } from "./facebook";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[5px]">
      <Container className="mt-3 flex h-navigation-height items-center">
        <Link href="/" className="top-0">
          <Logo className="" />
        </Link>

        <div className="ml-auto flex items-center space-x-2">
          <Link href="https://maps.app.goo.gl/cfb9Ayczuh4gzNzt6">
            <div className="relative block w-10 h-10 shadow-md overflow-hidden cursor-pointer">
              <MapIcon />
            </div>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100075976747374&mibextid=ZbWKwL">
            <div className="relative block w-10 h-10 shadow-md overflow-hidden cursor-pointer">
              <FacebookIcon />
            </div>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
