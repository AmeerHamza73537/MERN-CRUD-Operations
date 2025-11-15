# User Management Application

This is a **User Management Application** built with the **MERN stack** (MongoDB, Express, React, Node.js). The application allows users to **create**, **update**, and **delete** user information. Each user has the following details: **Name**, **Email**, and **Age**. The data is stored in **MongoDB** for persistent storage.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Make sure you have **Node.js** and **npm** installed on your machine.
- You also need to have **MongoDB** set up locally or use a cloud-based solution like **MongoDB Atlas**.

### Steps to Run the Project Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    ```

2. Navigate into the project directory:

    ```bash
    cd your-repository
    ```

3. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

4. Install frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

5. Configure MongoDB:
   - If you are using **MongoDB Atlas**, create a new cluster and get the connection string. 
   - If you are using **local MongoDB**, make sure it is running on your machine.

6. Set up environment variables:
   - Create a `.env` file in the `backend` folder and add the following:

    ```
    MONGO_URI=your-mongo-db-connection-string
    PORT=5000
    ```

7. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

8. Start the frontend server:

    ```bash
    cd frontend
    npm start
    ```

9. Open your browser and go to [http://localhost:3000](http://localhost:3000) to use the application.

## Usage

1. **Create User**: 
   - Enter the user's name, email, and age, and click **Submit** to create a new user.
   
2. **Update User**:
   - Select a user to update their information (name, email, age).

3. **Delete User**:
   - Click the **Delete** button next to a user to remove them from the database.

## Features

- **Create User**: Allows the user to add new users by providing **name**, **email**, and **age**.
- **Update User**: Allows the user to edit an existing user's information.
- **Delete User**: Allows the user to delete an existing user from the database.
- **Data Persistence**: All user data is stored in **MongoDB**.

## Technologies Used

- **Frontend**:
  - **React.js**: For building the user interface.
  - **React Router**: For managing navigation between different pages.
  
- **Backend**:
  - **Node.js**: Backend runtime environment.
  - **Express.js**: Web framework for Node.js.
  - **MongoDB**: NoSQL database for storing user data.
  - **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

- **Other**:
  - **Axios**: For making HTTP requests between the frontend and backend.
  - **CORS**: For enabling cross-origin requests between the client and server.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

