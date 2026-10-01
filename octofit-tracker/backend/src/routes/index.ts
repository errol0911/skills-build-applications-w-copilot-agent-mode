import { Router } from 'express';
import type { Model } from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

function createCollectionRouter<DocumentShape>(collectionName: string, collectionModel: Model<DocumentShape>) {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const records = await collectionModel.find().lean();
      response.status(200).json({ collection: collectionName, records });
    } catch (error) {
      next(error);
    }
  });

  return router;
}

export const apiRouter = Router();

apiRouter.use('/users', createCollectionRouter('users', User));
apiRouter.use('/teams', createCollectionRouter('teams', Team));
apiRouter.use('/activities', createCollectionRouter('activities', Activity));
apiRouter.use('/leaderboard', createCollectionRouter('leaderboard', LeaderboardEntry));
apiRouter.use('/workouts', createCollectionRouter('workouts', Workout));