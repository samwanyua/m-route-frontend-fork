const Navbar = () => {
    return (
      <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold">Merchandiser.inc</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img className="h-5 w-5" loading="lazy" alt="" src="/iconsolidbell.svg" />
            <img className="h-6 w-6" loading="lazy" alt="" src="/vector1.svg" />
            <div className="flex flex-col">
              <b className="text-base">Moses</b>
              <div className="text-xs text-blue-500">Manager</div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  