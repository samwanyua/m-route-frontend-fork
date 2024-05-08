export default function Header (){
    return (
        <div className="w-[1440px] h-[78px] px-2.5 py-4 bg-white shadow flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[1152px] justify-between items-center inline-flex">
            <div className="text-sky-700 text-4xl font-bold font-['Post No Bills Colombo'] leading-[46px] tracking-wide">Merchandiser.inc</div>
            <div className="w-[157.95px] h-[35px] relative">
            <div className="w-5 h-5 left-0 top-[7px] absolute" />
            <div className="w-[91.02px] h-[35px] left-[66.93px] top-0 absolute">
                <div className="w-[91.02px] left-0 top-0 absolute text-sky-900 text-sm font-bold font-['Poppins'] tracking-wide">Moses</div>
                <div className="w-[67.50px] left-0 top-[17px] absolute text-slate-400 text-xs font-normal font-['Poppins'] tracking-wide">Manager</div>
            </div>
            </div>
        </div>
        </div>
    )
}