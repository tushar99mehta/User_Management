import React, { useState } from "react";

// Functional component for adding a user
function AddUser({ onAddUser }) {
  // State variables to hold input values
  const [name, setName] = useState(""); // Holds the user's name
  const [username, setUsername] = useState(""); // Holds the user's username
  const [email, setEmail] = useState(""); // Holds the user's email
  const [address, setAddress] = useState({ street: "", city: "" }); // Holds the user's address
  const [phone, setPhone] = useState(""); // Holds the user's phone number
  const [compName, setCompName] = useState(""); // Holds the user's company name
  const [website, setWebsite] = useState(""); // Holds the user's website
  const [error, setError] = useState(""); // State variable for error messages

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      // If email is invalid, set an error message and stop further execution
      setError("Please enter a valid email address.");
      return;
    }

    // Create a new user object with the form values
    const newUser = { 
      name, 
      username, 
      email, 
      address, 
      phone, 
      company: { name: compName }, 
      website 
    };
    
    // Call the onAddUser function passed from parent component with the new user
    onAddUser(newUser);
    
    // Reset form fields to empty strings after submission
    setName("");
    setUsername("");
    setEmail("");
    setAddress({ street: "", city: "" });
    setPhone("");
    setCompName("");
    setWebsite("");
    setError(""); // Reset error state on successful submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 m-12 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Add User</h2>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message if exists */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on input change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Mark the field as required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on input change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Mark the field as required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Mark the field as required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update phone state on input change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Mark the field as required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Street:</label>
        <input
          type="text"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })} // Update street in address state
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Mark the field as required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">City:</label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })} // Update city in address state
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Mark the field as required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Company Name:</label>
        <input
          type="text"
          value={compName}
          onChange={(e) => setCompName(e.target.value)} // Update company name state on input change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Website:</label>
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)} // Update website state on input change
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add User
      </button>
    </form>
  );
}

export default AddUser;
