import { Request, Response } from "express";
import { CreateEpiDeliveryService } from "../../services/CreateEpiDeliveryService";
import { PutEpiDeliveryService } from "../../services/PutEpiDeliveryService";


class PutEpiDeliveryController {
  async handle(request: Request, response: Response) {
    const {id} = request.params;
    const {employee_id, epi_id, delivery_date, amount_delivered} = request.body;
    const epiDeliveryService = new PutEpiDeliveryService();
    try {
      const epiDelivery = await epiDeliveryService.execute({id,employee_id, epi_id, delivery_date, amount_delivered});
      return response.status(200).json(epiDelivery);
      
    }catch(err) {
      return response.status(400).json(`Error! employee_id or epi_id doesn't exist!`)
    }
  }
}
export {PutEpiDeliveryController}