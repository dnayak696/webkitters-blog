import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex w-screen justify-between items-center p-4 bg-teal-500 text-white">

<Link href="/"> <h1 className="text-2xl font-bold">Webskitters Blog</h1>  </Link>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
      <Link href="/create-post">  Create Post</Link>
      </button>
    </header>
  );
};

export default Header;