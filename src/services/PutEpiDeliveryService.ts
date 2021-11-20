import prismaClient from "../prisma";
import { EpiDeliveryRepository } from "../repositories/epiDeliveryRepository/EpiDeliveryRepository";

interface IPutEpiDelivery {
  id:               string,
  employee_id:      string,
  epi_id:           string,
  delivery_date:    Date
  amount_delivered: number
}
class PutEpiDeliveryService {
  async execute({id, employee_id,epi_id, delivery_date, amount_delivered} : IPutEpiDelivery) {
    const epiDeliveryRepository = new EpiDeliveryRepository();
    const epiDelivery = await epiDeliveryRepository.put({id, employee_id,epi_id,delivery_date,amount_delivered});
    return epiDelivery;
  }
}
export {PutEpiDeliveryService}