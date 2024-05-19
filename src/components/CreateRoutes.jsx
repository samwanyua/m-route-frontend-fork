import { useEffect, useState } from "react";
import "./CreateRoutes.css";

const ROUTES_URL = "https://m-route-backend.onrender.com/users/route-plans";

const CreateRoutes = () => {
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [instructionSets, setInstructionSets] = useState([]);
  const [staffNo, setStaffNo] = useState({
    staff_no: "",
  });
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const userData = localStorage.getItem("user_data");
    setToken(JSON.parse(accessToken));
    if (userData) {
      setUserId(JSON.parse(userData).id);
    }
  }, []);

  const handleDateRange = (event) => {
    const { name, value } = event.target;
    setDateRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInstructionsChange = (index, event) => {
    const { name, value } = event.target;
    const updatedInstructionSets = instructionSets.map((set, i) =>
      i === index ? { ...set, [name]: value } : set
    );
    setInstructionSets(updatedInstructionSets);
  };

  const handleAddInstructionSet = () => {
    setInstructionSets([
      ...instructionSets,
      { dateTime: "", instructions: "", facility: "" },
    ]);
  };

  const handleStaffNo = (event) => {
    const { name, value } = event.target;
    if (value < 0) {
      alert("Please enter a positive number.");
      return;
    }
    setStaffNo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitRoutes = async (event) => {
    event.preventDefault();

    const routes = {
      manager_id: userId,
      staff_no: parseInt(staffNo.staff_no),
      status: "pending",
      date_range: {
        start_date: dateRange.startDate,
        end_date: dateRange.endDate,
      },
      instructions: instructionSets,
    };
    console.log(routes);

    try {
      const response = await fetch(ROUTES_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(routes),
      });

      const data = await response.json();

      if (data.status_code === 201) {
        setMessage(data.message);
        setStaffNo({ staff_no: "" });
        setInstructionSets([]);
        setDateRange({
          startDate: "",
          endDate: "",
        });

        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else if (data.status_code === 400) {
        setMessage(data.message);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else if (data.status_code === 500) {
        console.log(data.message);
        setMessage("There was a problem creating the route plans");
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setMessage("There was a problem creating the route plans");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmitRoutes}>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            placeholder="YYYY-MM-DD"
            value={dateRange.startDate}
            onChange={handleDateRange}
            required
          />
          <small>Start Date: YYYY-MM-DD</small>
          <br />
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            placeholder="YYYY-MM-DD"
            value={dateRange.endDate}
            onChange={handleDateRange}
            required
          />
          <small>End Date: YYYY-MM-DD</small>
        </div>
        <div>
          <label htmlFor="date-instructions">Activity Date</label>
          {instructionSets.map((set, index) => (
            <div key={index} className="instruction-set">
              <input
                type="datetime-local"
                name="dateTime"
                placeholder="YYYY-MM-DDTHH:MM"
                value={set.dateTime}
                onChange={(e) => handleInstructionsChange(index, e)}
                required
              />
              <small>DateTime: YYYY-MM-DDTHH:MM</small>
              <br />
              <label htmlFor="facility">Facility Name</label>
              <input
                type="text"
                name="facility"
                placeholder="Facility name"
                value={set.facility}
                onChange={(e) => handleInstructionsChange(index, e)}
                required
              />
              <br />
              <label htmlFor="instructions">Instructions</label>
              <textarea
                name="instructions"
                id="message"
                rows={4}
                placeholder="Instructions"
                value={set.instructions}
                onChange={(e) => handleInstructionsChange(index, e)}
                required
              />
              <br />
            </div>
          ))}
          <br />
          <button type="button" onClick={handleAddInstructionSet}>
            + Add Another Set
          </button>
        </div>
        <br />
        <div>
          <label htmlFor="staffNo">Staff Number</label>
          <input
            type="number"
            name="staff_no"
            autoComplete="off"
            placeholder="Positive number (1234567899)"
            value={staffNo.staff_no}
            onChange={handleStaffNo}
            required
          />
        </div>
        <p className={message.includes("problem") ? "error" : "message"}>
          {message}
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRoutes;
