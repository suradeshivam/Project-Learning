// defining schema and creating a model using mongoose

const mongoose = require('mongoose');

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Mongoose Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

// Define a Mongoose Model based on the schema
const User = mongoose.model('User', userSchema);

// Create a new user instance
const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'password123'
});

// Save the new user to the database
newUser.save()
  .then(user => {
    console.log('User saved to the database:', user);
  })
  .catch(error => {
    console.error('Error saving user:', error);
  });
