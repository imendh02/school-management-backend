# school-management-backend

# School Management Backend

## Overview

This is the backend of the School Management App, built using Node.js, Express, and MongoDB.

## Features

- **Student Management**: CRUD operations for managing student records.
- **Class Management**: CRUD operations for managing class records.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **dotenv**: For managing environment variables.
- **Nodemon**: For automatic server restarting during development.

## Installation

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/imendh02/school-management-backend.git
    cd school-management-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add the following variables:
    ```env
    URI = "mongodb+srv://imendhaoui02:u3aHBVDJMZrwskV6@cluster0.oothz.mongodb.net/"
    ```

4. **Start the server**:
    ```bash
    npm run serve
    ```

