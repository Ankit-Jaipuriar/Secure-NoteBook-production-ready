# Secure Notebook

Secure Notebook is a full-stack web application designed for secure note-taking with advanced features to ensure user privacy and controlled access. This application emphasizes robust authentication, encryption, and seamless sharing of notes while maintaining security.

## Features

- **JWT Authentication**
  - Implemented secure login and signup functionality using JSON Web Tokens (JWT).
  - Ensures safe and authenticated access for all users.

- **Password-Protected Note Locking**
  - Integrated bcrypt encryption to allow users to lock their notes with a password.
  - Protects sensitive information with advanced cryptography.

- **Permission System**
  - Designed to let users share notes securely or keep them encrypted.
  - Shared files automatically expire after 24 hours to enhance security.

- **Role-Based Access Control (RBAC)**
  - Implemented RBAC to manage user permissions effectively.
  - Ensures controlled access to notes based on roles.

- **RESTful API Architecture**
  - Utilized RESTful API principles to enable seamless communication between the frontend and backend.
  - Ensures scalability and flexibility for future enhancements.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/secure-notebook.git
   cd secure-notebook
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Register or log in using your credentials.
- Create, lock, and share notes securely.
- View shared notes with automatic expiration after 24 hours.

## Future Enhancements

- Two-factor authentication (2FA) for added security.
- Real-time collaboration on shared notes.
- Enhanced analytics for note-sharing activities.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.
