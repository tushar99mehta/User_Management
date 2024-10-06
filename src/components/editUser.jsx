import React, { useState, useEffect } from "react";

// EditUser component for editing user details
function EditUser({ user, onEditUser }) {
  // State variables to hold user input values
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({ street: "", city: "" });
  const [phone, setPhone] = useState("");
  const [compName, setCompName] = useState("");
  const [website, setWebsite] = useState("");

  // Effect to populate the form fields with the current user's data
  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
      // Set the address or default to an empty object
      setAddress(user.address || { street: "", city: "" });
      setPhone(user.phone);
      // Set company name or default to an empty string
      setCompName(user.company?.name || "");
      setWebsite(user.website || "");
    }
  }, [user]); // Runs when the user prop changes

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Create an updated user object with new values
    const updatedUser = { 
      ...user,  // Retain other existing user properties
      name, 
      username, 
      email, 
      address, 
      phone, 
      company: { name: compName }, 
      website 
    };
    // Call the onEditUser function passed from the parent component
    onEditUser(updatedUser);
  };

  return (
    // Form for editing user information
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mt-6 mb-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      {/* Input fields for user information */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Ensure this field is filled before submission
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Ensure this field is filled before submission
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Ensure this field is filled before submission
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update phone state on change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Ensure this field is filled before submission
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Street:</label>
        <input
          type="text"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })} // Update street in address state
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Ensure this field is filled before submission
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">City:</label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })} // Update city in address state
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Ensure this field is filled before submission
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Company Name:</label>
        <input
          type="text"
          value={compName}
          onChange={(e) => setCompName(e.target.value)} // Update company name state on change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Website:</label>
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)} // Update website state on change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Submit button to update user information */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Update User
      </button>
    </form>
  );
}

export default EditUser;
