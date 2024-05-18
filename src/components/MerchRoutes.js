import React, { useState, useEffect } from 'react';
import moment from 'moment';

const ROUTES_URL = "https://m-route-backend.onrender.com/users/route-plans";
const UPDATE_URL = "https://m-route-backend.onrender.com/users/route-plans"; // Use this URL to update status

const MerchRoutePlans = ({ userData }) => {
    const [routePlans, setRoutePlans] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
        setToken(JSON.parse(accessToken));
    }, []);

    useEffect(() => {
        if (token && userData.id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${ROUTES_URL}/${userData.id}`, {
                   method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch route plans');
                    }
                    const data = await response.json();
                    if (data.successful) {
                        const formattedRoutePlans = data.message.map(event => ({
                            id: event.id,  // Ensure the id is included
                            instructions: event.instructions,
                            dateRange: {
                                start_date: moment(event.date_range.start_date, 'DD/MM/YYYY h:mm A').toDate(),
                                end_date: moment(event.date_range.end_date, 'DD/MM/YYYY h:mm A').toDate(),
                            },
                            status: event.status,
                        }));
                        setRoutePlans(formattedRoutePlans);
                    } else {
                        throw new Error(data.message);
                    }
                } catch (error) {
                    console.error('Error fetching route plans:', error);
                }
            };
            fetchData();
        }
    }, [token, userData.id]);

    const handleStatusChange = async (routePlanId, newStatus) => {
        try {
            const response = await fetch(`${UPDATE_URL}/${routePlanId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ status: newStatus }),
            });
            if (!response.ok) {
                throw new Error('Failed to update status');
            }
            const data = await response.json();
            if (data.successful) {
                setRoutePlans(prevPlans => prevPlans.map(plan => 
                    plan.id === routePlanId ? { ...plan, status: newStatus } : plan
                ));
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8">Route Plans</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Instructions</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {routePlans.map(plan => (
                            <tr key={plan.id} className="even:bg-gray-100">
                                <td className="py-2 px-4 border-b">{plan.instructions}</td>
                                <td className="py-2 px-4 border-b">
                                    {moment(plan.dateRange.start_date).format('DD/MM/YYYY h:mm A')} - {moment(plan.dateRange.end_date).format('DD/MM/YYYY h:mm A')}
                                </td>
                                <td className="py-2 px-4 border-b">{plan.status}</td>
                                <td className="py-2 px-4 border-b text-center">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4"
                                            checked={plan.status === 'complete'}
                                            onChange={(e) => handleStatusChange(plan.id, e.target.checked ? 'complete' : 'pending')}
                                        />
                                        <span className="ml-2">Complete</span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MerchRoutePlans;
