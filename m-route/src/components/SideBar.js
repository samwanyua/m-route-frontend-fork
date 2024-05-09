const SidebarLinks = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <img className="h-6 w-6" loading="lazy" alt="" src="/icons.svg" />
          <div className="text-lg font-semibold">Home</div>
        </div>
        <div className="flex items-center gap-4">
          <img className="h-6 w-6" alt="" src="/icons-11.svg" />
          <div className="text-lg font-semibold">Routes plan</div>
        </div>
        <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg gap-4">
          <img className="h-6 w-6" alt="" src="/icons-2.svg" />
          <div className="text-lg font-semibold">Settings</div>
        </button>
      </div>
    );
  };
  
  export default SidebarLinks;
  