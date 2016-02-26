import Express from 'express';
import * as WorkPlaceController from '../controllers/workPlace.controller';
const router = Express.Router();

router.route('/getWorkPlaces').get(WorkPlaceController.getWorkPlaces);

router.route('/getWorkPlace').get(WorkPlaceController.getWorkPlace);

router.route('/addWorkPlace').post(WorkPlaceController.addWorkPlace);

router.route('/deleteWorkPlace').post(WorkPlaceController.deleteWorkPlace);

export default router;
