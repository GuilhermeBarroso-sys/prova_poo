import {Router} from 'express';
import { CreateEmployeeController } from './controllers/employeeController/CreateEmployeeController';
import { CreateEpiController } from './controllers/epiController/CreateEpiController';
import { CreateEpiDeliveryController } from './controllers/epiDelivery/CreateEpiDeliveryController';
import { DeleteEpiDeliveryController } from './controllers/epiDelivery/DeleteEpiDeliveryController';
import { ListEpiDeliveryController } from './controllers/epiDelivery/ListEpiDeliveryController';
import { PutEpiDeliveryController } from './controllers/epiDelivery/PutEpiDeliveryController';

const routes = Router();

routes.post('/employees', new CreateEmployeeController().handle);
routes.post('/epi', new CreateEpiController().handle);
routes.post('/epidelivery', new CreateEpiDeliveryController().handle);
routes.get('/epidelivery', new ListEpiDeliveryController().handle);
routes.put('/epidelivery/:id', new PutEpiDeliveryController().handle);
routes.delete('/epidelivery/:id', new DeleteEpiDeliveryController().handle);




export default routes;