# GigFlowww HR Management System

GigFlowww is a comprehensive HR management system that helps organizations manage employees, track salaries, handle job postings, and streamline the hiring process.

## Features

- User authentication with registration and login
- Dashboard with employee statistics, performance tracking, and upcoming activities
- Employee management with filtering and status tracking
- Salary activity tracking with payment status indicators
- Job posting creation and management

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, Chart.js
- **Backend**: Node.js, Express, MongoDB (simulated in this demo)
- **Authentication**: JWT (simulated in this demo)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/gigflowww.git
   cd gigflowww
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   └── ...
├── context/            # React context for state management
├── pages/              # Page components
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   ├── PeoplePage.tsx
│   ├── SalaryPage.tsx
│   └── HiringPage.tsx
├── services/           # API services
│   └── api.ts          # Mock API implementation
├── App.tsx             # Main application component
└── main.tsx           # Entry point
```

## Backend Implementation

This demo uses a simulated backend with mock data. In a production environment, you would need to:

1. Set up a MongoDB database
2. Create a Node.js/Express server with the following API endpoints:
   - `POST /api/auth/register`: Register a new user
   - `POST /api/auth/login`: Login a user and return a JWT
   - `GET /api/employees`: Fetch all employees
   - `GET /api/salary-activities`: Fetch salary activities
   - `GET /api/activities`: Fetch upcoming activities
   - `GET /api/job-postings`: Fetch job postings
   - `POST /api/job-postings`: Create a new job posting
   - `GET /api/stats`: Fetch stats (employee count, hiring count, project count)

3. Connect your frontend to the backend by updating the API service in `src/services/api.ts`

## Authentication

The current implementation uses a simulated authentication flow. In a production environment, you would:

1. Hash passwords before storing them in the database
2. Use JWT for authentication
3. Implement proper token refresh mechanisms
4. Add password reset functionality

## Deployment

To deploy this application:

1. Build the production version:
   ```
   npm run build
   ```

2. Deploy the built files from the `dist` directory to your preferred hosting service (Netlify, Vercel, etc.)

3. Set up your backend server and database on a suitable platform (Heroku, AWS, etc.)

## License

This project is licensed under the MIT License - see the LICENSE file for details.