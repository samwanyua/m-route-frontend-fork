import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const ROUTES_URL = "https://m-route-backend.onrender.com/users/route-plans"

// Initialize localizer for React Big Calendar with moment.js
const localizer = momentLocalizer(moment);

const MerchCalendar = ({ userData }) => {
    const [events, setEvents] = useState([]);
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
                        throw new Error('Failed to fetch events');
                    }
                    const data = await response.json();
                    if (data.successful) {
                        // Transform fetched data into the format expected by React Big Calendar
                        const formattedEvents = data.message.map(event => {
                            // Use moment to parse and format dates
                            const startDate = moment(event.date_range.start_date, 'DD/MM/YYYY h:mm A').toDate();
                            const endDate = moment(event.date_range.end_date, 'DD/MM/YYYY h:mm A').toDate();

                            return {
                                title: event.instructions,
                                start: startDate,
                                end: endDate,
                            };
                        });
                        setEvents(formattedEvents);
                    } else {
                        throw new Error(data.message);
                    }
                } catch (error) {
                    console.error('Error fetching events:', error);
                }
            };
            fetchData();
        }
    }, [token, userData.id]); // Depend on token and userData.id

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ width: 1500, height: '95%' }}
            />
        </div>
    );
};

export default MerchCalendar;
