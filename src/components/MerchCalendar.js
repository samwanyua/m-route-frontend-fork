
import React, { useState, useEffect } from 'react';


import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const ROUTES_PLANS_URL = "dfghjkfghj";
// Initialize localizer for React Big Calendar with moment.js
const localizer = momentLocalizer(moment);

const MerchCalendar = () => {

    const [events, setEvents] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
        setToken(accessToken);
      }, []);
    console.log(token)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://m-route-backend.onrender.com/users/route-plans', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                if (data.successful) {
                    // Transform fetched data into the format expected by React Big Calendar
                    const formattedEvents = data.message.map(event => ({
                        title: event.instructions,
                        start: new Date(event.date_range.start_date),
                        end: new Date(event.date_range.end_date),
                    }));
                    setEvents(formattedEvents);
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
                // Handle error
            }
        };
        fetchData();
    }, []); // Empty dependency array to ensure this effect runs only once on mount


    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={event.map(ev =>{
                    ev.title
                    ev.instructions,
                    ev.start,
                    ev.end
                })}
                startAccessor="start"
                endAccessor="end"
                style={{ width: 1500, height: '95%' }}
            />
        </div>
    );
};

export default MerchCalendar;
