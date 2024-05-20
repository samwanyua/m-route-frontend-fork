import { useState, useEffect } from "react";
import RouteModal from "./RouteModal";

const MANAGER_ROUTES_URL = "https://m-route-backend.onrender.com/users/manager-routes";
const MODIFY_ROUTE = "https://m-route-backend.onrender.com/users/modify-route";
const DELETE_ROUTE_URL = "https://m-route-backend.onrender.com/users/delete-route-plans";

const ManagerRoutes = () => {
    const [routes, setRoutes] = useState([]);
    const [filteredRoutes, setFilteredRoutes] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [modalData, setModalData] = useState(null);
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const routesPerPage = 12;

    // Get token and user ID from local storage
    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
        const userData = localStorage.getItem("user_data");

        if (accessToken) setToken(JSON.parse(accessToken));
        if (userData) setUserId(JSON.parse(userData).id);
    }, []);

    // Fetch routes when token and userId are set
    useEffect(() => {
        if (token && userId) getManagerRoutes();
    }, [token, userId]);

    // Filter routes by search term
    useEffect(() => {
        filterRoutesByMerchandiserName(searchTerm);
    }, [routes, searchTerm]);

    const getManagerRoutes = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${MANAGER_ROUTES_URL}/${userId}`, {
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            const data = await response.json();

            if (data.status_code === 200) {
                setRoutes(data.message);
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            setErrorMessage("Failed to get routes, please try again.");
        } finally {
            setIsLoading(false);
            setTimeout(() => setErrorMessage(""), 5000);
        }
    };

    const filterRoutesByMerchandiserName = (searchTerm) => {
        const filtered = routes.filter(route => route.merchandiser_name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredRoutes(filtered);
    };

    const filteredRoutesByStatus = routes.filter(route => {
        if (filter === 'all') return true;
        return filter === 'complete' ? route.status.toLowerCase() === 'complete' : route.status.toLowerCase() !== 'complete';
    });

    const filteredAndSearchedRoutes = searchTerm ? filteredRoutesByStatus.filter(route => route.merchandiser_name.toLowerCase().includes(searchTerm.toLowerCase())) : filteredRoutesByStatus;
    
    // Calculate total pages
    const totalPages = Math.ceil(filteredAndSearchedRoutes.length / routesPerPage);
    // Slice routes for current page
    const displayedRoutes = filteredAndSearchedRoutes.slice((currentPage - 1) * routesPerPage, currentPage * routesPerPage);

    const handleComplete = async (routeId) => {
        try {
            const response = await fetch(`${MODIFY_ROUTE}/${routeId}`, {
                method: "PUT",
                headers: { "Authorization": `Bearer ${token}` }
            });
            const data = await response.json();

            setErrorMessage(data.message);
            if (data.status_code === 201) getManagerRoutes();
        } catch (error) {
            setErrorMessage("There was an error completing the task");
        } finally {
            setTimeout(() => setErrorMessage(""), 5000);
        }
    };

    const handleDeleteRoute = async (routeId) => {
        try {
            const response = await fetch(`${DELETE_ROUTE_URL}/${routeId}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
    
            if (response.ok) {
                setRoutes(prevRoutes => prevRoutes.filter(route => route.id !== routeId));
                setFilteredRoutes(prevRoutes => prevRoutes.filter(route => route.id !== routeId));
                setErrorMessage("Route deleted successfully.");
            } else {
                const data = await response.json();
                setErrorMessage(data.message || "Failed to delete the route.");
            }
        } catch (error) {
            setErrorMessage("There was an issue deleting the route plan");
        } finally {
            setTimeout(() => setErrorMessage(""), 5000);
        }
    };
    

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleModal = (route) => {
        setModalData(route);
    };

    return (
        <div className="max-w-7xl mx-auto mt-5 p-5 rounded-lg shadow-lg bg-white">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search by merchandiser name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-300 rounded px-3 py-1 w-full"
                />
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="ml-4 border border-gray-300 rounded px-3 py-1"
                >
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
            <p className="text-gray-600 mb-4">Showing {displayedRoutes.length} of {filteredAndSearchedRoutes.length} routes</p>
            {isLoading ? (
                <p className="text-center text-gray-600">Loading...</p>
            ) : errorMessage ? (
                <p className="text-center text-red-600">{errorMessage}</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        {displayedRoutes.map((route) => (
                            <div key={route.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                <p><span className="font-bold">Date Range:</span> {route.date_range.start_date} to {route.date_range.end_date}</p>
                                <p><span className="font-bold">Merchandiser:</span> {route.merchandiser_name}</p>
                                <p><span className="font-bold">Staff No:</span> {route.staff_no}</p>
                                <p><span className="font-bold">Status:</span> {route.status}</p>
                                <button onClick={() => toggleModal(route)} className="mt-2 w-full p-2 bg-gray-800 text-white rounded hover:bg-blue-700">View More</button>
                                <div className="flex mt-4 space-x-2">
                                    {route.status.toLowerCase() !== 'complete' && (
                                        <button onClick={() => handleComplete(route.id)} className="flex-1 p-2 bg-gray-800 text-white rounded hover:bg-green-500">Complete</button>
                                    )}
                                    {route.status.toLowerCase() === 'complete' && (
                                        <button className="flex-1 p-2 bg-gray-400 text-white rounded cursor-not-allowed opacity-50">Complete</button>
                                    )}
                                    <button onClick={() => handleDeleteRoute(route.id)} className="flex-1 p-2 bg-gray-800 text-white rounded hover:bg-red-500">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`p-2 ${currentPage === 1 ? 'bg-gray-400' : 'bg-gray-800 hover:bg-blue-700'} text-white rounded`}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`p-2 ${currentPage === totalPages ? 'bg-gray-400' : 'bg-gray-800 hover:bg-blue-700'} text-white rounded`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
            {modalData && <RouteModal route={modalData} onClose={() => setModalData(null)} />}
        </div>
    );
}

export default ManagerRoutes;
