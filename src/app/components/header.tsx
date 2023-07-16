const Header = (props: any) => {
  return (
    <header className="fixed top-0 w-full bg-yellow-300 p-2 md:p-5 z-10 border-b-2">
      <nav className="flex justify-between mx-auto container items-center h-full">
        <div className="text-white font-bold text-2xl">AniMorse code</div>
        <div className="space-x-12">
          {/* <a href="" className="text-white font-bold text-3xl md:text-3xl no-underline hover:underline">usename</a> */}
          <button onClick={() => props.setIsShown((prev: any) => !prev)} className="text-white font-bold text-3xl md:text-3xl no-underline hover:underline">×</button>
        </div>
      </nav>
    </header>
  );
}

export default Header