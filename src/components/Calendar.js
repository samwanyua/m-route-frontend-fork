import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import { useState } from 'react';

function Calendar({userData}) {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [staffNo, setStaffNo] = useState("");
  const [status, setStatus] = useState("pending"); // Added status state

  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.provider_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to create calendar event....");
        }
        const eventData = await response.json();

        const data = {
          manager_id: userData.user_id,
          date_range: JSON.stringify({ start, end }),
          instructions: eventDescription,
          status: status, // Use selected status
          staff_no: staffNo,
        };

        await fetch("https://m-route-backend.onrender.com/users/route-plans", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${session.jwt}`,
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to create route plan");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            alert("Event created! Please check your Google Calendar.");
          })
          .catch((error) => {
            console.error(error);
            alert("Failed to create route plan");
          });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create calendar event!");
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 lg:px-8">
      {session ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">Hey there {userData.username}</h2>
          <h3 className="text-xl font-semibold mb-4">Route Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full max-w-3xl">
            <div>
              <p className="text-lg font-semibold">Set start time and date</p>
              <input
                type="date"
                className="border border-gray-300 rounded p-2 w-full mb-2"
                onChange={(e) => setStart(new Date(e.target.value))}
                value={start.toISOString().slice(0, 10)}
              />
              <input
                type="time"
                className="border border-gray-300 rounded p-2 w-full mb-2"
                onChange={(e) => setStart(new Date(`${start.toISOString().slice(0, 10)}T${e.target.value}`))}
                value={start.toISOString().slice(11, 16)}
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Deadline: date and time</p>
              <input
                type="date"
                className="border border-gray-300 rounded p-2 w-full mb-2"
                onChange={(e) => setEnd(new Date(e.target.value))}
                value={end.toISOString().slice(0, 10)}
              />
              <input
                type="time"
                className="border border-gray-300 rounded p-2 w-full mb-2"
                onChange={(e) => setEnd(new Date(`${end.toISOString().slice(0, 10)}T${e.target.value}`))}
                value={end.toISOString().slice(11, 16)}
              />
            </div>
          </div>
          <p className="text-lg font-semibold mb-2">Route name</p>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full mb-2 max-w-lg"
            onChange={(e) => setEventName(e.target.value)}
          />
          <p className="text-lg font-semibold mb-2">Route instructions</p>
          <textarea
            className="border border-gray-300 rounded p-2 w-full mb-2 max-w-lg"
            rows="4"
            onChange={(e) => setEventDescription(e.target.value)}
          ></textarea>
          <p className="text-lg font-semibold mb-2">Staff No</p>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full mb-2 max-w-lg"
            onChange={(e) => setStaffNo(e.target.value)}
          />

          <p className="text-lg font-semibold mb-2">Status</p>
          <div className="flex mb-4">
            <button
              className={`py-2 px-4 mr-2 rounded ${status === 'pending' ? 'bg-gray-900 text-white' : 'bg-gray-300'}`}
              onClick={() => setStatus('pending')}
            >
              Pending
            </button>
            <button
              className={`py-2 px-4 rounded ${status === 'complete' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setStatus('complete')}
            >
              Complete
            </button>
          </div>

          <hr className="w-full mb-4" />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2 max-w-lg"
            onClick={() => createCalendarEvent()}
          >
            Create Calendar Event
          </button>
          <p></p>
          <button
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-full mb-2 max-w-lg"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => googleSignIn()}
        >
          Sign In With Google
        </button>
      )}
    </div>
  );
}

export default Calendar;
