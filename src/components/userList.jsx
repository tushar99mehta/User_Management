import React, { useEffect, useState } from "react"; // Importing React and necessary hooks
import axios from "axios"; // Importing axios for making HTTP requests
import EditUser from "./editUser"; // Importing the EditUser component for editing user details
import AddUser from "./addUser"; // Importing the AddUser component for adding new users
import { GrAdd, GrClose } from "react-icons/gr"; // Importing icons for add and close actions

function UserList() {
  // State variables
  const [addUser, setAddUser] = useState(false); // State to toggle AddUser component visibility
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [error, setError] = useState(null); // State to handle error messages
  const [editingUser, setEditingUser] = useState(null); // State to store the user currently being edited
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search input

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true before fetching data
      try {
        // Making an API call to fetch users
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data); // Updating the users state with fetched data
      } catch (error) {
        setError("Failed to fetch users"); // Handling error and setting error message
      } finally {
        setLoading(false); // Set loading state to false after data fetching completes
      }
    };
    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run this effect only on mount

  // Function to handle adding a new user
  const handleAddUser = async (newUser) => {
    try {
      // Making a POST request to add a new user
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
      setUsers([...users, response.data]); // Update the users state to include the new user
    } catch (error) {
      console.error("Error adding user:", error); // Log error in the console
    }
  };

  // Function to handle deleting a user
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?"); // Show confirmation dialog
    if (!confirmed) return; // Exit if the user cancels

    try {
      // Making a DELETE request to remove the user
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id)); // Update users state to remove the deleted user
    } catch (error) {
      console.error("Error deleting user:", error); // Log error in the console
    }
  };

  // Function to handle updating a user
  const handleEditUser = (updatedUser) => {
    // Update the users state with the edited user details
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null); // Reset editing user state
  };

  // Filtering users based on the search term
  const filteredUsers = users.filter((user) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase(); // Convert search term to lowercase
    return (
      user.name.toLowerCase().includes(lowerCaseSearchTerm) || // Filter by name
      user.username.toLowerCase().includes(lowerCaseSearchTerm) || // Filter by username
      user.email.toLowerCase().includes(lowerCaseSearchTerm) || // Filter by email
      user.address?.city.toLowerCase().includes(lowerCaseSearchTerm) // Filter by city
    );
  });

  return (
    <div className="container mx-auto p-4"> {/* Container for the user list */}
      <h1 className="text-2xl font-bold text-center mb-4">User List</h1> {/* Title of the user list */}

      {/* Input field for searching users */}
      <input
        type="text"
        placeholder="Search by name, username, email, or city"
        className="block w-full p-2 mb-4 border rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      />

      {addUser ? ( // Conditional rendering to show AddUser component
        <div className="w-full">
          <AddUser onAddUser={handleAddUser} /> {/* Pass handleAddUser to AddUser component */}
        </div>
      ) : (
        <>
          <div className="overflow-x-auto"> {/* Responsive container for the table */}
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"> {/* User data table */}
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Username</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">City</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {filteredUsers.map((user) => ( // Map through filtered users to create table rows
                  <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <span className="font-medium">{user.name}</span> {/* User name */}
                    </td>
                    <td className="py-3 px-6 text-left">{user.username}</td> {/* User username */}
                    <td className="py-3 px-6 text-left">{user.email}</td> {/* User email */}
                    <td className="py-3 px-6 text-left">{user.address?.city}</td> {/* User city */}
                    <td className="py-3 px-6 text-center flex">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600"
                        onClick={() => setEditingUser(user)} // Set the user to edit
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white m-1 px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(user.id)} // Delete the user
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {editingUser && <EditUser user={editingUser} onEditUser={handleEditUser} />} {/* Render EditUser component if editing */}
        </>
      )}

      {loading && <p className="text-center text-gray-500">Loading...</p>} {/* Loading message */}
      {error && <p className="text-center text-red-500">{error}</p>} {/* Error message */}

      {/* Button to toggle AddUser component */}
      <button
        className="px-3 py-1 fixed left-10 bottom-10 rounded-lg bg-blue-600 font-semibold text-4xl text-white"
        onClick={() => setAddUser(!addUser)} // Toggle add user form visibility
      >
        {!addUser ? <GrAdd /> : <GrClose />} {/* Show add or close icon based on state */}
      </button>
    </div>
  );
}

export default UserList; // Exporting UserList component for use in other parts of the app
