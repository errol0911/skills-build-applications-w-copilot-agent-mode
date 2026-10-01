import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        username: 'alex.runner',
        email: 'alex.runner@example.com',
        displayName: 'Alex Runner',
      },
      {
        username: 'maya.moves',
        email: 'maya.moves@example.com',
        displayName: 'Maya Patel',
      },
      {
        username: 'sam.strength',
        email: 'sam.strength@example.com',
        displayName: 'Sam Jordan',
      },
      {
        username: 'taylor.trails',
        email: 'taylor.trails@example.com',
        displayName: 'Taylor Chen',
      },
    ]);

    await Team.insertMany([
      {
        name: 'Cardio Crew',
        description: 'A team focused on weekly runs, rides, and endurance goals.',
        memberIds: [users[0]._id, users[1]._id],
      },
      {
        name: 'Strength Squad',
        description: 'Lifters and cross-training fans building consistent habits.',
        memberIds: [users[2]._id, users[3]._id],
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id,
        type: 'Run',
        durationMinutes: 42,
        caloriesBurned: 430,
        activityDate: new Date('2026-09-27T07:30:00.000Z'),
      },
      {
        userId: users[1]._id,
        type: 'Cycling',
        durationMinutes: 58,
        caloriesBurned: 510,
        activityDate: new Date('2026-09-28T17:45:00.000Z'),
      },
      {
        userId: users[2]._id,
        type: 'Strength Training',
        durationMinutes: 50,
        caloriesBurned: 360,
        activityDate: new Date('2026-09-29T12:15:00.000Z'),
      },
      {
        userId: users[3]._id,
        type: 'Hiking',
        durationMinutes: 95,
        caloriesBurned: 680,
        activityDate: new Date('2026-09-30T09:00:00.000Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      { userId: users[3]._id, points: 1890, rank: 1 },
      { userId: users[1]._id, points: 1725, rank: 2 },
      { userId: users[0]._id, points: 1640, rank: 3 },
      { userId: users[2]._id, points: 1510, rank: 4 },
    ]);

    await Workout.insertMany([
      {
        name: 'Morning Mobility Reset',
        level: 'Beginner',
        focusArea: 'Mobility',
        durationMinutes: 20,
      },
      {
        name: 'Tempo Run Builder',
        level: 'Intermediate',
        focusArea: 'Cardio',
        durationMinutes: 35,
      },
      {
        name: 'Full-Body Strength Circuit',
        level: 'Intermediate',
        focusArea: 'Strength',
        durationMinutes: 45,
      },
      {
        name: 'Trail Endurance Push',
        level: 'Advanced',
        focusArea: 'Endurance',
        durationMinutes: 60,
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
