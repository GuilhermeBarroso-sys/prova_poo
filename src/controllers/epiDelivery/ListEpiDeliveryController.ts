import { Request, Response } from "express";
import { ListEpiDeliveryService } from "../../services/ListEpiDeliveryService";


class ListEpiDeliveryController {
  async handle(request: Request, response: Response) {
    const epiDeliveryService = new ListEpiDeliveryService();
    try {
      const epiDelivery = await epiDeliveryService.execute();
      return response.status(200).json(epiDelivery);
      
    }catch(err) {
      return response.status(400).json(`Error! err: \n\n${err.message}`)
    }
  }
}
export {ListEpiDeliveryController}