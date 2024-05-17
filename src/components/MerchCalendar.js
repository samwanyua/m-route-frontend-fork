import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

// Initialize localizer for React Big Calendar with moment.js
const localizer = momentLocalizer(moment);

const MerchCalendar = () => {
    const events = [
        {
            title: 'Meeting',
            start: new Date(2024, 4, 20, 10, 0), // year, month (zero-based), day, hour, minute
            end: new Date(2024, 4, 20, 12, 0),
        },
        {
            title: 'Training',
            start: new Date(2024, 4, 22, 13, 0),
            end: new Date(2024, 4, 22, 15, 0),
        },
    ];

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ width: '100%', height: 500 }}
            />
        </div>
    );
};

export default MerchCalendar;