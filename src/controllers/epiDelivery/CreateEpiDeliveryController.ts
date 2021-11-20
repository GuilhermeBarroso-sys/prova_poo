import { Request, Response } from "express";
import { CreateEpiDeliveryService } from "../../services/CreateEpiDeliveryService";


class CreateEpiDeliveryController {
  async handle(request: Request, response: Response) {
    const {employee_id, epi_id, delivery_date, amount_delivered} = request.body;

    const epiDeliveryService = new CreateEpiDeliveryService();
    try {
      const epiDelivery = await epiDeliveryService.execute({employee_id, epi_id, delivery_date, amount_delivered});
      return response.status(201).json(epiDelivery);
      
    }catch(err) {
      return response.status(400).json(`Error! err: ${err.message}`)
    }
  }
}
export {CreateEpiDeliveryController}