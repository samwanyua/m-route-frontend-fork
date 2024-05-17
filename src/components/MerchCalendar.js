import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const ROUTES_PLANS_URL = "dfghjkfghj";
// Initialize localizer for React Big Calendar with moment.js
const localizer = momentLocalizer(moment);

const MerchCalendar = () => {

    const [event, setEvents] = useState([]);

    // fetch from route plans url
    // Filter for specific merchaniser
    // Map



    const events = [
        {
            title: 'Meeting',
            instructions: "xew1",
            start: new Date(2024, 4, 20, 10, 0), 
            end: new Date(2024, 4, 20, 12, 0),
        },
        {
            title: 'Training',
            instructions: "xew",
            start: new Date(2024, 4, 22, 13, 0),
            end: new Date(2024, 4, 22, 15, 0),
        },
    ];

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
                style={{ width: '100%', height: 500 }}
            />
        </div>
    );
};

export default MerchCalendar;