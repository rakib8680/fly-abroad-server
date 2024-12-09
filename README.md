# flyAbroad API

This API provides endpoints to manage visa applications for the flyAbroad project. The flyAbroad project aims to simplify the process of applying for and managing visas. Users can add new visas, update existing ones, delete visas, and retrieve information about visas they have created or applied for. The API is built using Node.js, Express, and MongoDB, ensuring a robust and scalable backend solution.

## Features

- **Visa Management**: Add, update, delete, and retrieve visa information.
- **User-Specific Visas**: Retrieve visas created by a specific user.
- **Applied Visa Management**: Apply for visas and retrieve user-specific applied visas.
- **Sorting and Filtering**: Retrieve visas sorted by the most recently added.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing visa and application data.
- **dotenv**: Module to load environment variables from a `.env` file.
- **cors**: Middleware to enable Cross-Origin Resource Sharing.

## Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/fly-abroad-server.git
   cd fly-abroad-server
   ```

## Database Collections

- **visaCollection**: Collection to store visa data.
- **appliedVisaCollection**: Collection to store applied visa data.

## Routes

### Visa Management

- **GET /allVisa**

  - Description: Retrieve all added visas, sorted by the most recently added.
  - Response: Array of visa objects.

- **POST /addVisa**

  - Description: Add a new visa.
  - Request Body: Visa data (JSON).
  - Response: Inserted visa object.

- **GET /visa/:id**

  - Description: Retrieve a single visa by its ID.
  - Params: `id` - Visa ID.
  - Response: Visa object.

- **GET /myVisa/:email**

  - Description: Retrieve visas created by a specific user.
  - Params: `email` - User's email.
  - Response: Array of visa objects.

- **PATCH /updateVisa/:id**

  - Description: Update a visa by its ID.
  - Params: `id` - Visa ID.
  - Request Body: Fields to update (JSON).
  - Response: Update result object.

- **DELETE /deleteVisa/:id**
  - Description: Delete a visa by its ID.
  - Params: `id` - Visa ID.
  - Response: Deletion result object.

### Applied Visa Management

- **GET /appliedVisa**

  - Description: Retrieve all applied visas.
  - Response: Array of applied visa objects.

- **POST /applyVisa**

  - Description: Apply for a visa.
  - Request Body: Application data (JSON).
  - Response: Inserted application object.

- **GET /myAppliedVisa/:email**
  - Description: Retrieve applied visas for a specific user.
  - Params: `email` - User's email.
  - Response: Array of applied visa objects.

## Usage

1. **Configure MongoDB Connection**:

   - Ensure you have a `.env` file with your MongoDB credentials:
     ```env
     PORT=5000
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     ```

2. **Run the API Server**:

   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the server:
     ```sh
     npm start
     ```

3. **Access the API**:
   - The API server will listen on the specified `port` (default is 5000).

## Example .env File

```env
PORT=5000
DB_USER=your_db_user
DB_PASSWORD=your_db_password
```
