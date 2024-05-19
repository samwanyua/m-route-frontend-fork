import { useState, useEffect } from 'react';
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const LOGOUT_URL = 'https://m-route-backend.onrender.com/users/logout';
const LOCATION_URL = 'https://m-route-backend.onrender.com/users/locations';
const CHANGE_PASSWORD_URL = 'https://m-route-backend.onrender.com/users/change-password';

const Settings = ({ setAuthorized }) => {
  const [notifications, setNotifications] = useState({
    routeUpdates: false,
    productInsights: false,
    salesOrders: false,
    competitorActivities: false,
    currentLocation: false,
  });

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState(0);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(null);
  const [error, setError] = useState('');
  const [locateMerchandiser, setLocateMerchandiser] = useState(false);
  const [passwordChange, setPasswordChange] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const user = localStorage.getItem('user_data');

    if (accessToken) {
      setToken(JSON.parse(accessToken));
    }

    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser && parsedUser.id) {
        setUserId(parsedUser.id);
        setEmail(parsedUser.email);  // Assuming the user data contains email
      } else {
        console.error('Invalid user data');
      }
    } else {
      console.error('No user data found');
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (locateMerchandiser) {
      intervalId = setInterval(() => {
        getGeolocation();
      }, 300000); // 5 minutes
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [locateMerchandiser]);

  const getGeolocation = () => {
    if (!navigator.geolocation) {
      setError('Your browser does not support geolocation');
      return;
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        setPosition(coords);
        setIsLoading(false);
        postGeolocation(coords.latitude, coords.longitude);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  };

  const postGeolocation = async (latitude, longitude) => {
    const currentTime = new Date();
    const dateTimeString = currentTime.toISOString();

    const newLocation = {
      latitude,
      longitude,
      timestamp: dateTimeString,
      merchandiser_id: userId,
    };

    if (!isLoading && !error && position !== null) {
      try {
        const response = await fetch(LOCATION_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newLocation),
        });

        const data = await response.json();

        if (data.status_code === 201) {
          console.log(data.message);
        } else {
          setError(data.message || 'System experiencing a problem, please try again later.');
        }
      } catch (error) {
        console.log(error);
        setError('Failed to post location.');
      }
    }
  };

  const handleSendLocationToggle = () => {
    setNotifications((prev) => {
      const newValue = !prev.currentLocation;
      setLocateMerchandiser(newValue);
      return {
        ...prev,
        currentLocation: newValue,
      };
    });
  };

  const logoutUser = async () => {
    try {
      const response = await fetch(LOGOUT_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId }),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthorized(false);
        navigate('/');
        setToken('');
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_data');
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitPasswordChange = async (e) => {
    e.preventDefault();
    if (passwordChange.newPassword !== passwordChange.confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    try {
      const response = await fetch(CHANGE_PASSWORD_URL, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          old_password: passwordChange.oldPassword,
          new_password: passwordChange.newPassword,
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        setError('');
        setPasswordChange({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        setError(data.message || 'Failed to change password');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred while changing password');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start min-h-screen py-16 mb-36 gap-8 lg:gap-36">
      <form className="flex flex-col items-center justify-start gap-8 p-6 md:p-10 lg:p-16 xl:p-20 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white rounded-xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkslateblue-300 mb-4">Profile settings</h1>
        <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center pt-[84px] pb-2 bg-[url('/public/39@2x.png')] bg-cover bg-no-repeat bg-[top]"></div>
        <input type="email" className="input-field" placeholder="Email" value={email} readOnly />
        <input
          type="password"
          className="input-field"
          placeholder="Old Password"
          name="oldPassword"
          value={passwordChange.oldPassword}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          className="input-field"
          placeholder="New password"
          name="newPassword"
          value={passwordChange.newPassword}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          className="input-field"
          placeholder="Confirm new password"
          name="confirmPassword"
          value={passwordChange.confirmPassword}
          onChange={handlePasswordChange}
        />
        <button className="text-white bg-gray-900 px-6 py-2 rounded-full" onClick={handleSubmitPasswordChange}>
          Save changes
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
      <div className="flex flex-col items-center lg:items-start justify-start gap-8 py-6 px-8 text-lg text-black font-poppins shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl">
        <b className="text-xl text-darkslateblue-300">Notification Preferences</b>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="font-medium text-base">Route Updates</div>
            {notifications.routeUpdates ? (
              <div className="flex items-center">
                <BiToggleRight className="text-green-500 cursor-pointer text-3xl ml-2" onClick={() => toggleNotification('routeUpdates')} />
                <span className="ml-2 text-green-500">On</span>
              </div>
            ) : (
              <div className="flex items-center">
                <BiToggleLeft className="text-gray-900 cursor-pointer text-3xl ml-2" onClick={() => toggleNotification('routeUpdates')} />
                <span className="ml-2 text-gray-900">Off</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium text-base">Product Insights</div>
            {notifications.productInsights ? (
              <div className="flex items-center">
                <BiToggleRight className="text-green-500 cursor-pointer text-3xl ml-2" onClick={() => toggleNotification('productInsights')} />
                <span className="ml-2 text-green-500">On</span>
              </div>
            ) : (
              <div className="flex items-center">
                <BiToggleLeft className="text-gray-900 cursor-pointer text-3xl ml-2" onClick={() => toggleNotification('productInsights')} />
                <span className="ml-2 text-gray-900">Off</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium text-base">Sales Orders</div>
            {notifications.salesOrders ? (
              <div className="flex items-center">
                <BiToggleRight className="text-green-500 cursor-pointer text-3xl ml-2" onClick={() => toggleNotification('salesOrders')} />
                <span className="ml-2 text-green-500">On</span>
              </div>
            ) : (
              <div className="flex items-center">
                <BiToggleLeft className="text-gray-900 cursor-pointer text-3xl ml-2" onClick={() => toggleNotification('salesOrders')} />
                <span className="ml-2 text-gray-900">Off</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium text-base">Competitor Activities</div>
            {notifications.competitorActivities ? (
              <div className="flex items-center">
                <BiToggleRight className="text-green-500 cursor-pointer text-3xl ml-2" onClick={() => toggleNotification('competitorActivities')} />
                <span className="ml-2 text-green-500">On</span>
              </div>
            ) : (
              <div className="flex items-center">
                <BiToggleLeft className="text-gray-900 cursor-pointer text-3xl ml-2" onClick={() => toggleNotification('competitorActivities')} />
                <span className="ml-2 text-gray-900">Off</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium text-base">Sharing Current Location</div>
            {notifications.currentLocation ? (
              <div className="flex items-center">
                <BiToggleRight className="text-green-500 cursor-pointer text-3xl ml-2" onClick={handleSendLocationToggle} />
                <span className="ml-2 text-green-500">On</span>
              </div>
            ) : (
              <div className="flex items-center">
                <BiToggleLeft className="text-gray-900 cursor-pointer text-3xl ml-2" onClick={handleSendLocationToggle} />
                <span className="ml-2 text-gray-900">Off</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md" onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
};

export default Settings;
