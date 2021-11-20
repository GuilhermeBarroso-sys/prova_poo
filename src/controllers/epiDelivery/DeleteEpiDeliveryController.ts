import { Request, Response } from "express";
import { DestroyEpiDeliveryService } from "../../services/DestroyEpiDeliveryService";
import { ListEpiDeliveryService } from "../../services/ListEpiDeliveryService";


class DeleteEpiDeliveryController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
    const epiDeliveryService = new DestroyEpiDeliveryService()
    try {
      const epiDelivery = await epiDeliveryService.execute(id);
      return response.status(200).json(epiDelivery);
      
    }catch(err) {
      return response.status(400).json(`Error! Id not Exists!`)
    }
  }
}
export {DeleteEpiDeliveryController}