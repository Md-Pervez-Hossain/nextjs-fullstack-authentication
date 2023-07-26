import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-9/12 mx-auto font-bold py-10 flex items-center justify-between">
      <Link href="/">Logo</Link>
      <div className="flex items-center gap-5">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Header;
