import React from 'react'

const RouteModal = ({ route, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-4xl w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Route Details</h2>
                    <button onClick={onClose} className="text-gray-700">&times;</button>
                </div>
                {JSON.parse(route.instructions).map((instruction, index) => {
                    const startTime = new Date(instruction.start);
                    const endTime = new Date(instruction.end);

                    const startTimeString = startTime.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
                    const endTimeString = endTime.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });

                    return (
                        <div key={index} className="mb-3 p-3 border border-gray-300 rounded">
                            <p><span className="font-bold">Start Time:</span> {startTimeString}</p>
                            <p><span className="font-bold">End Time:</span> {endTimeString}</p>
                            <p><span className="font-bold">Instructions:</span> {instruction.instructions}</p>
                            <p><span className="font-bold">Facility:</span> {instruction.facility}</p>
                            <p><span className="font-bold">Status:</span> {instruction.status}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export default RouteModal
