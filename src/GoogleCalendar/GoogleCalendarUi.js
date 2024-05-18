import React from "react";

const GoogleCalendarUi = () => {
    return (
        <div className="container mx-auto bg-gray-200 rounded-lg shadow-md p-6 flex flex-row items-start">
            <section className="flex-1 flex flex-col items-start gap-6 text-gray-700 font-sans">
                <div className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 flex items-center">
                    <select className="flex-grow focus:outline-none">
                        <option value="">Select an option</option>
                    </select>
                </div>
                <div className="flex flex-row items-start gap-4">
                    <img
                        src="/vector1.svg"
                        alt="Icon"
                        className="h-10 w-10 object-cover rounded-md"
                    />
                    <select className="flex-grow focus:outline-none rounded-md border border-gray-300 shadow-sm px-4 py-2">
                        <option value="">Select an option</option>
                    </select>
                </div>
                <div className="flex flex-row items-center gap-8">
                    <div className="bg-gray-100 rounded-lg px-4 py-2 font-medium">
                        Morning Hours
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-2 font-medium">
                        Afternoon
                    </div>
                </div>
                <div className="rounded-lg bg-gray-100 border border-gray-300 p-4 flex flex-col gap-4">
                    <div className="flex flex-row items-end justify-between">
                        <div className="text-sm font-medium">Instructions</div>
                        <div className="h-6 flex items-center text-gray-400">
                            <svg className="h-4 w-4 fill-current" aria-hidden="true">
                                {/* Replace with your actual SVG code */}
                            </svg>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500"></p>
                </div>
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-medium shadow-sm hover:bg-blue-700">
                    Assign
                </button>
            </section>
        </div>
    );
};

export default GoogleCalendarUi;


