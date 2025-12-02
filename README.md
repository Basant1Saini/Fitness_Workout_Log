# Fitness Workout Log

A comprehensive fitness tracking application built with the MERN stack, designed to help users log workouts, track progress, and achieve their fitness goals.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Query (TanStack Query)** - Server state management
- **React Hook Form** - Performant forms with easy validation
- **React Router v6** - Client-side routing
- **Zustand** - Lightweight state management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation middleware
- **helmet** - Security middleware
- **cors** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Jest** - Testing framework
- **Supertest** - HTTP assertion library
- **Docker** - Containerization

## ✨ Features

- **User Authentication** - Secure registration and login
- **Workout Logging** - Create and track custom workouts
- **Exercise Library** - Comprehensive exercise database
- **Progress Tracking** - Visual charts and statistics
- **Goal Setting** - Set and monitor fitness goals
- **Responsive Design** - Mobile-first approach
- **Real-time Updates** - Live data synchronization
- **Data Export** - Export workout data

## 🏗️ Project Structure

```
Fitness_Workout_Log/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service functions
│   │   ├── store/         # State management
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   ├── public/
│   └── package.json
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── utils/         # Utility functions
│   │   └── types/         # TypeScript interfaces
│   └── package.json
├── docker-compose.yml     # Docker configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Fitness_Workout_Log
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Server environment variables (.env)
   cd server
   cp .env.example .env
   ```
   
   Configure the following variables:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/fitness_log
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   ```

4. **Start the application**
   ```bash
   # Start MongoDB (if running locally)
   mongod
   
   # Start server (from server directory)
   npm run dev
   
   # Start client (from client directory)
   npm run dev
   ```

### Using Docker

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Workouts
- `GET /api/workouts` - Get user workouts
- `POST /api/workouts` - Create new workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

### Exercises
- `GET /api/exercises` - Get exercise library
- `POST /api/exercises` - Add custom exercise
- `GET /api/exercises/:id` - Get exercise details

## 🧪 Testing

```bash
# Run server tests
cd server
npm test

# Run client tests
cd client
npm test

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Production Build

```bash
# Build client for production
cd client
npm run build

# Start server in production mode
cd server
npm start
```

### Environment Variables (Production)

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fitness_log
JWT_SECRET=your_production_jwt_secret
JWT_EXPIRE=7d
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Exercise data from various fitness APIs
- UI inspiration from modern fitness applications
- Community contributions and feedback