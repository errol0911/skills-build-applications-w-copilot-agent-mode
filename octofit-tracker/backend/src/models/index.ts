import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    displayName: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const teamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    memberIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);

const activitySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    caloriesBurned: { type: Number, default: 0, min: 0 },
    activityDate: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

const leaderboardSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

const workoutSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    level: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
export const Team = model('Team', teamSchema);
export const Activity = model('Activity', activitySchema);
export const LeaderboardEntry = model('LeaderboardEntry', leaderboardSchema);
export const Workout = model('Workout', workoutSchema);