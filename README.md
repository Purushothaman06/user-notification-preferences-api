# User Notification Preferences API 

## 📋 Overview
A robust, serverless Nest.js API for managing user notification preferences and sending notifications. The system provides comprehensive functionality for user preference management, notification tracking, and delivery simulation.

## 🌐 Deployment
- **Live API Documentation**: https://user-notification-preferences-api.onrender.com/api-docs

## ✨ Features

### User Preference Management
- Create, read, update, and delete user notification preferences
- Flexible notification channel configuration
- Timezone and frequency management

### Notification Handling
- Simulate notification sending across multiple channels
- Detailed notification logging
- Basic notification statistics tracking

## 🚀 Tech Stack
- **Framework**: Nest.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose)
- **Validation**: Class Validator
- **Testing**: Jest
- **Documentation**: Swagger OpenAPI

## 🔧 Prerequisites
- Node.js (v16+ recommended)
- MongoDB
- npm or yarn

## 💾 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Purushothaman06/user-notification-preferences-api.git
cd user-notification-preferences-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
```bash
# Copy example environment file
cp .env.example .env

# Edit .env and configure your settings
```

## 🔒 Environment Configuration
Create a `.env` file with the following key configurations:

```
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/notification_preferences

# Server Configuration
PORT=3000
```

## 🖥️ Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Build
```bash
npm run build
npm run start:prod
```

## 📄 API Documentation
- **Swagger UI**: `http://localhost:3000/api-docs`
- **Live Deployment Docs**: https://user-notification-preferences-api.onrender.com/api-docs

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### Integration Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

## 🌐 Endpoints

### User Preferences
- `POST /api/preferences`: Create user preferences
- `GET /api/preferences/:userId`: Retrieve user preferences
- `PATCH /api/preferences/:userId`: Update user preferences
- `DELETE /api/preferences/:userId`: Delete user preferences

### Notifications
- `POST /api/notifications/send`: Send a notification
- `GET /api/notifications/:userId/logs`: Retrieve notification logs
- `GET /api/notifications/stats`: Get notification statistics

## 📊 Monitoring
- Basic request logging
- Error tracking
- Performance interceptors

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 🐛 Known Issues & Limitations
- Current implementation is a simulation of notification sending
- Rate limiting might need tuning based on production traffic
- Additional authentication mechanisms can be implemented

## 📚 Additional Resources
- [Nest.js Documentation](https://docs.nestjs.com/)
- [Mongoose ODM](https://mongoosejs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 🚨 Disclaimer
This is a demonstration project and should be thoroughly reviewed and adapted for production use.

**🌟 Happy Coding!**
