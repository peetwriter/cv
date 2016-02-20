import Express from 'express';
import * as WorkPlaceController from '../controllers/workPlace.controller';
const router = Express.Router();

// Get all Posts
router.route('/getWorkPlaces').get(WorkPlaceController.getWorkPlaces);

// Get one post by title
router.route('/getWorkPlace').get(WorkPlaceController.getWorkPlace);

// Add a new Post
router.route('/addWorkPlace').post(WorkPlaceController.addWorkPlace);

// Delete a Post
router.route('/deleteWorkPlace').post(WorkPlaceController.deleteWorkPlace);

export default router;
