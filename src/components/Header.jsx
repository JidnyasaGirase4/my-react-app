import React from "react";
  const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-[#2B1C50]]">Streelancer</div>
      <nav className="space-x-6 hidden md:flex text-[#2B1C50]">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Find Work</a>
        <a href="#" className="hover:underline">Find Talent</a>
        <a href="#" className="hover:underline">Why Us</a>
        <a href="#" className="hover:underline">Community</a>
      </nav>
      <div className="space-x-4">
        <button className="px-4 py-2 text-sm  text-[#2B1C50] rounded">Join</button>
        <button className="px-4 py-2 text-sm bg-[#2B1C50] text-white rounded">Login</button>
      </div>
    </header>
  );
}
  export default Header;