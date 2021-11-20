import { EpiDeliveryRepository } from "../repositories/epiDeliveryRepository/EpiDeliveryRepository";


class ListEpiDeliveryService {
  async execute() {
    const epiDeliveryRepository = new EpiDeliveryRepository();
    const epiDelivery = await epiDeliveryRepository.list();
    return epiDelivery;
  }
}
export {ListEpiDeliveryService}