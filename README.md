# User Management Project

## Overview
The User Management Project is a simple React application that allows users to add, manage, and display user information. It provides a user-friendly interface for creating user profiles, including details such as name, username, email, address, phone number, company name, and website. This project utilizes the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch and display a list of users.

## Features
- Add new users with detailed information
- Fetch and display users from the JSONPlaceholder API
- Form validation to ensure correct data entry
- Responsive design for optimal viewing on various devices
- User-friendly interface with clear input fields and error handling

## Technologies Used
- **Frontend:** React, HTML, CSS (with Tailwind CSS for styling)
- **State Management:** React Hooks (useState ,useEffect)
- **Form Validation:** Basic validation implemented for email format
- **API Integration:** JSONPlaceholder API for user data

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/tushar99mehta/User_Management.git

2. Navigate to the project directory:

   ```bash
   cd user-management

3. Install the required dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash

   npm run dev

Open your browser and visit http://localhost:5173 to view the application.

## Usage
Fill in the user details in the provided input fields:

Name
Username
Email
Phone
Street
City
Company Name (optional)
Website (optional)
Click the "Add User" button to submit the form.

Upon successful submission, the form will reset, and the user details will be processed (you can add functionality to display user data as needed).

The application fetches and displays the user list from the JSONPlaceholder API. You can view the existing users by navigating to the appropriate section in the app.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure that your code follows the project's coding conventions and includes appropriate tests.
