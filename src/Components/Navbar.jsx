import React from 'react'

function Navbar() {

    const handleSearch = () => {}
  return (
    <div className="w-full h-10 px-4 py-3 flex items-center justify-center bg-[#3D5A80]">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="px-2 text-sm "
        />
        <button className="ml-2 text-sm font-semibold  text-[#30302E] px-3 rounded-full">
          Search
        </button>
      </form>
    </div>
  );
}

export default Navbar